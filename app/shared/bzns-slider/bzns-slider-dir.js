app.directive('businessSlider', function(){

	return {
		templateUrl : 'app/shared/bzns-slider/bzns-slider-view.html',
		replace: true,
		scope : {
			slidesData : "="
		}
	}
});