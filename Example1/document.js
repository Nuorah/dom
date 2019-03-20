var app = {
	init: function () {
		console.log('Document title: ', document.title);
		document.title = 'Nouveau titre';
		console.log('Document title: ', document.title);
		console.log('Elements h1: ', document.getElementsByTagName('H1'));
		console.log('Elements avec la classe text-red: ', document.getElementsByClassName('text-red'));
		console.log("Element avec l'id title: ", document.getElementById('title'));
	}
};

app.init();