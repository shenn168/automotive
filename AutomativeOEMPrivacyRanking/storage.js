// Local Storage Management for rankings history

const STORAGE_KEY = 'AutomativeOEMPrivacyRankings';
const MAX_HISTORY = 5;

class RankingStorage {
    // Save current ranking
    static saveRanking(data) {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.local.get([STORAGE_KEY], (result) => {
                    if (chrome.runtime.lastError) {
                        reject(new Error(chrome.runtime.lastError));
                        return;
                    }

                    const rankings = result[STORAGE_KEY] || [];
                    
                    const newRanking = {
                        date: new Date().toISOString(),
                        data: data,
                        version: rankings.length + 1
                    };

                    rankings.unshift(newRanking);

                    // Keep only last 5 rankings
                    if (rankings.length > MAX_HISTORY) {
                        rankings.pop();
                    }

                    chrome.storage.local.set({ [STORAGE_KEY]: rankings }, () => {
                        if (chrome.runtime.lastError) {
                            reject(new Error(chrome.runtime.lastError));
                        } else {
                            resolve(newRanking);
                        }
                    });
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    // Get all rankings
    static getAllRankings() {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.local.get([STORAGE_KEY], (result) => {
                    if (chrome.runtime.lastError) {
                        reject(new Error(chrome.runtime.lastError));
                    } else {
                        resolve(result[STORAGE_KEY] || []);
                    }
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    // Get current ranking (most recent)
    static async getCurrentRanking() {
        try {
            const rankings = await this.getAllRankings();
            return rankings.length > 0 ? rankings[0] : null;
        } catch (error) {
            console.error('Error getting current ranking:', error);
            return null;
        }
    }

    // Get specific ranking by version
    static async getRankingByVersion(version) {
        try {
            const rankings = await this.getAllRankings();
            return rankings.find(r => r.version === version) || null;
        } catch (error) {
            console.error('Error getting ranking by version:', error);
            return null;
        }
    }

    // Compare two rankings and get differences
    static compareRankings(ranking1, ranking2) {
        try {
            const differences = [];

            if (!ranking1 || !ranking2 || !ranking1.data || !ranking2.data) {
                return differences;
            }

            ranking1.data.forEach((item1) => {
                const item2 = ranking2.data.find(i => i.rank === item1.rank);
                if (item2) {
                    if (item1.privacyRating !== item2.privacyRating) {
                        const change = item1.privacyRating > item2.privacyRating ? 'improved' : 'declined';
                        differences.push({
                            oemName: item1.oemName,
                            oldRating: item2.privacyRating,
                            newRating: item1.privacyRating,
                            change: change
                        });
                    }
                }
            });

            return differences;
        } catch (error) {
            console.error('Error comparing rankings:', error);
            return [];
        }
    }

    // Initialize with current ranking if empty
    static async initialize() {
        try {
            const rankings = await this.getAllRankings();
            if (rankings.length === 0) {
                await this.saveRanking(rankingData);
            }
            return true;
        } catch (error) {
            console.error('Error initializing storage:', error);
            return false;
        }
    }

    // Export rankings as CSV
    static async exportAsCSV(version = null) {
        try {
            let ranking;
            if (version) {
                ranking = await this.getRankingByVersion(version);
            } else {
                ranking = await this.getCurrentRanking();
            }

            if (!ranking) {
                throw new Error('No ranking data found');
            }

            const headers = ['Rank', 'OEM Name', 'Brand', 'Country', 'Privacy Rating', 'Privacy Statements', 'Rationale'];
            const rows = ranking.data.map(item => [
                item.rank,
                item.oemName,
                item.brandName,
                item.country,
                item.privacyRating,
                item.privacyStatements.map(ps => ps.name + ': ' + ps.url).join(' | '),
                item.rationale
            ]);

            const csvContent = [
                `Assessment Date: ${new Date(ranking.date).toLocaleDateString()}`,
                '',
                headers.join(','),
                ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
            ].join('\
');

            return csvContent;
        } catch (error) {
            console.error('Error exporting CSV:', error);
            throw error;
        }
    }
}