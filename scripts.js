function clickAction() {
	chrome.extension.getBackgroundPage().console.log(chrome)
}

document.addEventListener('DOMContentLoaded', function() {
	chrome.extension.getBackgroundPage().console.log('supposedly the  document has loaded: ', document)
	const link = document.getElementById('permit');
	if (link) link.addEventListener('click', clickAction);
});
