console.log("linked");

document.getElementById("tag") .onmouseover = function() {mouseOver()};

document.getElementById("tag") .onmouseout = function() {mouseOut()};


function mouseOver() {

	document.getElementById("tag").style.color = "gray";

}

function mouseOut () {

	document.getElementById("tag").style.color = "black";

}