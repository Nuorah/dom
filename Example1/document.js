var app = {
	init: function () {
		console.log('Document title: ', document.title);
		document.title = 'Nouveau titre';
		console.log('Document title: ', document.title);
	}
};

app.init();