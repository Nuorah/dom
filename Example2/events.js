var app = {
	init: function () {
		
	}
};

var pElements = document.getElementsByTagName('P');

for (var i = pElements.length - 1; i >= 0; i--) {
	var element = pElements[i]
	element.addEventListener('mouseover', function(event){
		console.log("x :" + event.x + ", y :" + event.y);
		if (event.x >= window.innerWidth/2){
			console.log("DROITE");
			element.classList.add('text-red');
		} else {
			console.log("GAUCHE");
			element.classList.remove('text-red');
		}
	})
	pElements[i].addEventListener('mouseout', function(event){
		console.log("x :" + event.x + ", y :" + event.y);
	})
}