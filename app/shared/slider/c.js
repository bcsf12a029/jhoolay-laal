app.controller('BznsSliderCtrl', ['$log', '$scope', 'bznsSliderSrvc', function(log, scope, srvc){
	
	scope.slides=[];
	srvc.getSlides().then(function(slides){
		scope.slides = slides;
	});
}]);