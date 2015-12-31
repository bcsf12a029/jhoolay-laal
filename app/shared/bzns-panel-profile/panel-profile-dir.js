app.directive('panelProfile', function(){
	return {
		templateUrl: 'app/shared/bzns-panel-profile/panel-profile-view.html',
		replace: true,
		scope: {
			bznsObj: "="
		}
	}
});