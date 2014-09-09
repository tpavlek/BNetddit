chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                // When a page contains a <video> tag...
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostPrefix: 'www.reddit.com', 'pathPrefix': '/r/starcraft/comments', schemes: [ "http", "https" ] }
                })
            ],
            // ... show the page action.
            actions: [new chrome.declarativeContent.ShowPageAction() ]
        }]);
    });
});
