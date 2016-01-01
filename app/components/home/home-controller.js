app.controller('homeController', ['home', function(home){
	
	var that = this;
	this.top3Biz = null;
	this.cities = null
	this.categories = null;

	home.getTopBzns().then(function(data){
		that.top3Biz = data;
	});

	home.getCities().then(function(data){
		that.cities = data;
	});

	home.getCategories().then(function(data){
		that.categories = data;
	});
}]);