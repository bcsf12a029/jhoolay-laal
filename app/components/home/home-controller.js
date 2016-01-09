app.controller('homeController', ['$scope', 'home', 'user', function($scope,home,user){
	
	var that = this;
	
	this.cities = null

	home.getCities().then(function(data){
		that.cities = data;
	});

	this.city = user.city;
	this.setCity = angular.bind(this, user.setCity);

}]);