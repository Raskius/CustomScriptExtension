document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('helloButton');
    button.addEventListener('click', function() {
        console.log('Hello World');
		
		
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            // tabs is an array of all tabs that match the query criteria
            var currentTab = tabs[0];
            // Log the current tab's information
            console.log('Current Tab:', currentTab);

            // Execute a script in the active tab
            chrome.scripting.executeScript({
                target: { tabId: currentTab.id },
                function: () => {
                    console.log("Script executed in current tab");
                }
            });
			
			// Execute jQuery first
			chrome.scripting.executeScript({
				target: { tabId: currentTab.id },
				files: ['jquery-3.7.1.min.js']
			}, function() {
				// Execute custom script after jQuery is loaded
				chrome.scripting.executeScript({
					target: { tabId: currentTab.id },
					files: ['customScript1.js']
				});
			});
        });
		
    });
	
	
});
