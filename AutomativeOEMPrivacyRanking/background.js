// Background service worker for the extension

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('Automotive OEM Privacy Ranking extension installed');
        // Initialize storage will be called when popup is opened
    } else if (details.reason === 'update') {
        console.log('Automotive OEM Privacy Ranking extension updated');
    }
});

// Handle any errors
chrome.runtime.onError.addListener((error) => {
    console.error('Extension error:', error);
});