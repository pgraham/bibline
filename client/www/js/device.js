function isRunningPhonegap() {
	return (window.cordova || window.PhoneGap || window.phonegap)
	&& /^file:\/{3}[^\/]/i.test(window.location.href)
	&& /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
}

