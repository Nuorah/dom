var app = {
	init: function () {	

		function gaucheDroite (event){
			console.log("x :" + event.x + ", y :" + event.y);
			if (event.x >= window.innerWidth/2){
				console.log("DROITE");
				event.target.classList.add('text-red');
			} else {
				console.log("GAUCHE");
				event.target.classList.remove('text-red');
			}
		}	
	}
};

var titleIdElement = document.getElementById('title-1')

titleIdElement.addEventListener('click', function(){
	var newPElement = document.createElement('P');
	console.log(newPElement)
	newPElement.classList.add('text-red');
	newPElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit,"
	+ " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
	+ " veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	+ " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
	+ " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
	newPElement.addEventListener('mouseover', gaucheDroite)
	document.body.append(newPElement);
})

var pElements = document.getElementsByTagName('P');

for (var i = pElements.length - 1; i >= 0; i--) {
	var element = pElements[i]
	element.addEventListener('mouseover', gaucheDroite)
	pElements[i].addEventListener('mouseout', function(event){
		console.log("x :" + event.x + ", y :" + event.y);
	})
}

function deleteAllP(){
	var pElements = document.getElementsByTagName('p');
	for (var i = pElements.length - 1; i >= 0; i--) {
		document.body.removeChild(pElements[i]);
	}
}

