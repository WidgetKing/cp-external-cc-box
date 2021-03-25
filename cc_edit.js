
var mainContainer = document.getElementById("main_container");
var originalProjectWidth = mainContainer.style.width;

function calculateFullWidth() {
//var ccWidthPercent = (cp.D.ccProperties[1024].w / 100) + 1;
var ccWidthPercent = 1.25;
return (parseFloat(originalProjectWidth) * ccWidthPercent) + "px";
//var ccWidth = document.getElementById("cc").clientWidth;
//return parseFloat(originalProjectWidth) + ccWidth + "px";
}

function showCC() {
	$("#cc").appendTo("#main_container").css("float", "right").css(
"right", "0%");
	mainContainer.style.width = calculateFullWidth();
}

function hideCC() {
	mainContainer.style.width = originalProjectWidth;
}

var ccToggle = false;

cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", 
 function (event) {
	
	if (event.cpData.newVal === 1) {
		showCC();
	} else {
		hideCC();
	}
	if (cp.shouldScale) cp.SetScaleAndPosition();
}, "cpCmndCC");



