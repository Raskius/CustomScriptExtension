// background.js

// Listen for clicks on the extension icon
chrome.action.onClicked.addListener(function(tab) {
    // Query for the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // Get the active tab
        var activeTab = tabs[0];
        // Inject custom script into the active tab
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            files: ['customScript1.js']
        });
    });
});
