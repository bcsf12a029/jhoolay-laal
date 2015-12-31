app.directive('businessSlide', function(){

	return {
		templateUrl : 'app/shared/bzns-slide/bzns-slide-view.html',
		replace : true,
		scope : {
			bznsObj : "=",
			slideNumber : "@"
		}
	};
});