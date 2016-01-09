app.controller('BznsDispPanelCtrl', ['$scope', '$routeParams','bznsDispPanelSrvc', '$location',function(scope, $routeParams, srvc, $location){
	
	var that = this;
	scope.panelData = [];
	scope.categories = [];

	srvc.getCategories().then(function(ctgs){
		scope.categories = ctgs;
	});

	this.category = srvc.category;

	var changeCategory = function(){
		srvc.changeCategory($routeParams.ctg || that.category).then(function(data){
			scope.panelData = data;
		},function(reason){scope.panelData=[];});
	};

	changeCategory();
	scope.changeCategory = angular.bind(this,changeCategory);

	$location.hash("/");
}]);