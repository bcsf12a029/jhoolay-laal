app.controller('homeController', ['$scope', 'home', '$cookies', function($scope,home,$cookies){
	
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


	this.city = {id:$cookies.get('city')};

	this.setCity = function(){
		var now = new Date();
		var exp = new Date(now.getFullYear()+1, now.getMonth());
		$cookies.put('city', that.city.id, {expires:exp});
	}

}]);