app.directive('bizDisplayPanel', function(){

	return {
		templateUrl: 'app/shared/bzns-display-panel/display-panel-view.html',
		replace: true,
		controller: 'bizDispPanelCtrl',
		controllerAs: 'bdpc',
		scope: {
			categories: "="
		}
	};
});