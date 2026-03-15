// Main popup logic

let currentRankings = [];
let allHistoricalRankings = [];

// DOM Elements
const viewBtn = document.getElementById('viewBtn');
const historyBtn = document.getElementById('historyBtn');
const exportBtn = document.getElementById('exportBtn');
const currentView = document.getElementById('currentView');
const historyView = document.getElementById('historyView');
const rankingsList = document.getElementById('rankingsList');
const assessmentDate = document.getElementById('assessmentDate');
const searchInput = document.getElementById('searchInput');
const countryFilter = document.getElementById('countryFilter');
const ratingFilter = document.getElementById('ratingFilter');
const toast = document.getElementById('toast');

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeApp);

async function initializeApp() {
    try {
        console.log('🚀 Initializing Extension...');
        
        // Initialize storage
        await RankingStorage.initialize();
        
        // Load current ranking
        const currentRanking = await RankingStorage.getCurrentRanking();
        if (currentRanking) {
            currentRankings = currentRanking.data;
            updateAssessmentDate(new Date(currentRanking.date));
        } else {
            currentRankings = rankingData;
            await RankingStorage.saveRanking(rankingData);
            updateAssessmentDate(new Date());
        }
        
        // Load history
        allHistoricalRankings = await RankingStorage.getAllRankings();
        
        // Setup UI
        setupEventListeners();
        populateCountryFilter();
        displayCurrentRankings();
        
        console.log('✅ Extension Initialized');
    } catch (error) {
        console.error('❌ Initialization error:', error);
        rankingsList.innerHTML = '<div class="loading-message">Error loading data</div>';
    }
}

function setupEventListeners() {
    viewBtn.addEventListener('click', () => {
        currentView.classList.add('active');
        historyView.classList.remove('active');
        viewBtn.classList.add('active');
        historyBtn.classList.remove('active');
        displayCurrentRankings();
    });
    
    historyBtn.addEventListener('click', () => {
        currentView.classList.remove('active');
        historyView.classList.add('active');
        viewBtn.classList.remove('active');
        historyBtn.classList.add('active');
        displayHistoricalRankings();
    });
    
    exportBtn.addEventListener('click', handleExport);
    
    searchInput.addEventListener('input', filterAndDisplay);
    countryFilter.addEventListener('change', filterAndDisplay);
    ratingFilter.addEventListener('change', filterAndDisplay);
}

function populateCountryFilter() {
    const countries = [...new Set(currentRankings.map(r => r.country))].sort();
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
}

function updateAssessmentDate(date) {
    assessmentDate.textContent = `Last Assessment: ${date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}`;
}

function displayCurrentRankings() {
    rankingsList.innerHTML = '';
    filterAndDisplay();
}

function filterAndDisplay() {
    const searchTerm = searchInput.value.toLowerCase();
    const country = countryFilter.value;
    const rating = ratingFilter.value ? parseInt(ratingFilter.value) : null;
    
    const filtered = currentRankings.filter(item => {
        const matchesSearch = !searchTerm || 
            item.oemName.toLowerCase().includes(searchTerm) ||
            item.country.toLowerCase().includes(searchTerm);
        const matchesCountry = !country || item.country === country;
        const matchesRating = rating === null || item.privacyRating === rating;
        return matchesSearch && matchesCountry && matchesRating;
    });
    
    rankingsList.innerHTML = '';
    if (filtered.length === 0) {
        rankingsList.innerHTML = '<div class="no-results">No results found</div>';
        return;
    }
    
    filtered.forEach(ranking => {
        rankingsList.appendChild(createRankingItem(ranking));
    });
}

function createRankingItem(ranking) {
    const item = document.createElement('div');
    item.className = 'ranking-item';
    
    const stars = '⭐'.repeat(ranking.privacyRating);
    const privacyLinks = ranking.privacyStatements
        .map(ps => `<a href="${ps.url}" target="_blank" class="privacy-statement-link">🔗 ${ps.name}</a>`)
        .join('');
    
    item.innerHTML = `
        <div class="ranking-item-header">
            <div class="ranking-item-left">
                <div class="ranking-number">${ranking.rank}</div>
                <div class="ranking-item-main">
                    <div class="oem-name">${ranking.oemName}</div>
                    <div class="oem-country">${ranking.countryCode} ${ranking.country}</div>
                </div>
            </div>
            <div class="ranking-item-right">
                <div class="rating-stars">${stars}</div>
                <div class="toggle-icon">▼</div>
            </div>
        </div>
        <div class="ranking-item-details">
            <div class="detail-section">
                <div class="detail-label">Rating</div>
                <div class="detail-value">${ranking.privacyRating}/5 Stars</div>
            </div>
            <div class="detail-section">
                <div class="detail-label">Country</div>
                <div class="detail-value">${ranking.countryCode} ${ranking.country}</div>
            </div>
            <div class="detail-section">
                <div class="detail-label">Privacy Statements</div>
                <div class="privacy-statements-list">${privacyLinks}</div>
            </div>
            <div class="detail-section">
                <div class="detail-label">Rationale</div>
                <div class="rationale">${ranking.rationale}</div>
            </div>
        </div>
    `;
    
    item.querySelector('.ranking-item-header').addEventListener('click', () => {
        item.classList.toggle('expanded');
    });
    
    return item;
}

function displayHistoricalRankings() {
    const historyTimeline = document.getElementById('historyTimeline');
    historyTimeline.innerHTML = '';
    
    if (allHistoricalRankings.length === 0) {
        historyTimeline.innerHTML = '<div class="loading-message">No historical data</div>';
        return;
    }
    
    allHistoricalRankings.forEach((ranking, idx) => {
        const card = document.createElement('div');
        card.className = 'history-card';
        
        const date = new Date(ranking.date);
        const dateStr = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        let diffHTML = '';
        if (idx < allHistoricalRankings.length - 1) {
            const diffs = RankingStorage.compareRankings(ranking, allHistoricalRankings[idx + 1]);
            if (diffs.length > 0) {
                diffHTML = '<div class="history-diff">' +
                    diffs.map(d => {
                        const cls = d.change === 'improved' ? 'improved' : 'declined';
                        const emoji = d.change === 'improved' ? '⬆️' : '⬇️';
                        return `<div class="diff-item ${cls}">${emoji} ${d.oemName}: ${d.oldRating}⭐ → ${d.newRating}⭐</div>`;
                    }).join('') + '</div>';
            }
        }
        
        card.innerHTML = `
            <div class="history-card-header">
                <div class="history-date">${dateStr}</div>
                <div class="history-badge">v${ranking.version}</div>
            </div>
            <div class="history-changes">30 OEMs Ranked</div>
            ${diffHTML}
        `;
        
        historyTimeline.appendChild(card);
    });
}

async function handleExport() {
    try {
        const csv = await RankingStorage.exportAsCSV();
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `OEM-Rankings-${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
        URL.revokeObjectURL(url);
        showToast('✓ Exported successfully', 'success');
    } catch (error) {
        showToast('✗ Export failed', 'error');
        console.error(error);
    }
}

function showToast(msg, type = 'success') {
    toast.textContent = msg;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}