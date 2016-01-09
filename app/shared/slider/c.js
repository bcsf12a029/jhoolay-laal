app.controller('BznsSliderCtrl', ['$scope', 'bznsSliderSrvc', function(scope, srvc){
	
	scope.slides=[];
	srvc.getSlides().then(function(slides){
		scope.slides = slides;
	});
}]);