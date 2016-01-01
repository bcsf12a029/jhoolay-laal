app.controller('bizDispPanelCtrl', ['$scope', '$routeParams','bizDispPanel', '$location',function($scope, $routeParams, bizDispPanel, $location){
	
	var that = this;
	this.panelData = [];

	this.category = bizDispPanel.category;

	var changeCategory = function(){
		bizDispPanel.changeCategory($routeParams.ctg || that.category).then(function(data){
			that.panelData = data;
		},function(reason){that.panelData=[];});
	};

	changeCategory();
	this.changeCategory = angular.bind(this,changeCategory);

	$location.hash("/");
}]);