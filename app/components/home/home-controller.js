app.controller('homeController', ['$scope', 'home', 'user', function($scope,home,user){
	
	var that = this;

	this.top3Biz = null;
	this.cities = null
	this.categories = null;

	home.getCities().then(function(data){
		that.cities = data;
	});

	home.getCategories().then(function(data){
		that.categories = data;
	});

	this.city = user.city;
	this.setCity = angular.bind(this, user.setCity);

}]);