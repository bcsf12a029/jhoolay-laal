app.factory('home', ['$http', '$q', function($http, $q){
	var o={};

	o.getTopBzns = function(){
		var d = $q.defer();
		$http.get('data/top-biz.json').then(function(data){
			d.resolve(angular.fromJson(data.data));
		});
		return d.promise;
	};

	o.getCities = function(){
		var d = $q.defer();
		$http.get('data/cities.json').then(function(data){
			d.resolve(angular.fromJson(data.data));
		});
		return d.promise;
	};

	o.getCategories = function(){
		var d = $q.defer();
		$http.get('data/categories.json').then(function(data){
			d.resolve(angular.fromJson(data.data));
		});
		return d.promise;
	};

	return o;
}]);