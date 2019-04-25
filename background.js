
chrome.runtime.onInstalled.addListener(function() {
	chrome.extension.getBackgroundPage().console.log('is this going to log?')
	// chrome.extension.getBackgroundPage().console.log(chrome.extension)

});

chrome.identity.getProfileUserInfo(resp => {
	chrome.extension.getBackgroundPage().console.log(resp)
})
