var mainMock = angular.module("MockChargeSync", ["ngMaterial","ngMessages","ngRoute"])
.config(['$routeProvider','$mdThemingProvider', function($routeProvider, $mdThemingProvider){
	$mdThemingProvider.theme('default').primaryPalette('teal');
}])
.controller('MainScreen', ['$scope','$mdDialog', function($scope, $mdDialog) {
	$scope.showAlert = function(ev) {
		$mdDialog.show({
	          clickOutsideToClose: true,
	          scope: $scope,
	          preserveScope: true,
	          template: '<md-dialog aria-label="Mock Charge Sync" class="border-shadow" style="border-radius: 20px;">' +
				          '<md-toolbar>' +
				          '<div class="md-toolbar-tools">' +
					          '<md-button class="md-icon-button">' +
				              	'<md-icon md-svg-src="images/truck.svg" aria-label="logo"></md-icon>' +
				              '</md-button>' +
				              '<h2><b>Mock</b> Charge Sync</h2>' +
				              '<span flex></span>' +
				              '<md-button class="md-icon-button">' +
				              	'<md-icon md-svg-src="images/close.svg" aria-label="Fechar" ng-click="closeDialog()"></md-icon>' +
				              '</md-button>' +
				          '</div>' +
				        '</md-toolbar>' +
	                    '  <md-dialog-content style="padding: 2%; font-family: Arial; font-size: 1.5em">' +
	                    'Bem vindo ao <b>Mock Charge Sync</b>, este aplicativo foi desenvolvido para compartilhar cargas entre amigos no ETS2 Multiplayer.</br></br>' + 
	                    '<b>Desenvolvido por:</b> SuperMock</br>' +
	                    '<b>Email de contato:</b> supermockmensagem@gmail.com</br>' +
	                    '<b>Lançado em: </b> 15/04/2017 01:40' +
	                    '  </md-dialog-content>' +
	                    '</md-dialog>',
	          controller: function DialogController($scope, $mdDialog) {
	            $scope.closeDialog = function() {
	              $mdDialog.hide();
	            }
	          }
	       });
	};
	
	$scope.showTranslate = function(ev) {
		$mdDialog.show({
	          clickOutsideToClose: true,
	          scope: $scope,
	          preserveScope: true,
	          template: '<md-dialog aria-label="Mock Charge Sync" class="border-shadow" style="border-radius: 20px;">' +
				          '<md-toolbar>' +
				          '<div class="md-toolbar-tools">' +
					          '<md-button class="md-icon-button">' +
				              	'<md-icon md-svg-src="images/truck.svg" aria-label="logo"></md-icon>' +
				              '</md-button>' +
				              '<h2><b>Mock</b> Charge Sync</h2>' +
				              '<span flex></span>' +
				              '<md-button class="md-icon-button">' +
				              	'<md-icon md-svg-src="images/close.svg" aria-label="Fechar" ng-click="closeDialog()"></md-icon>' +
				              '</md-button>' +
				          '</div>' +
				        '</md-toolbar>' +
	                    '  <md-dialog-content style="padding: 2%; font-family: Arial; font-size: 1.5em">' +
	                    'Download the file in Portuguese to translate into your language: </br></br>' + 
	                    '<a href="download/package-to-translate.zip" download="package-to-translate.zip">Download file</a></br></br>' +
	                    '<b>Available space for the translated files:</b></br>' +
	                    '<b>- <a href="download/translate/en/language.mytxt" download="language.mytxt">ENGLISH</a> (Google Translate [we still need])</b></br>' +
	                    '<b>- </b></br>' +
	                    '  </md-dialog-content>' +
	              '</md-dialog>',
	          controller: function DialogController($scope, $mdDialog) {
	            $scope.closeDialog = function() {
	              $mdDialog.hide();
	            }
	          }
	       });
	};

	$scope.verifyScreenSize = function() {
		var blocks = document.getElementById("blocks");
		if (blocks != null) {
			if (window.innerWidth < 800) {
				blocks.className = "layout-align-center-center layout-column";
			} else {
				blocks.className = "layout-align-center-center layout-row";
			}
		}
	}

	$scope.verifyScreenSize();

	window.addEventListener('resize', function(){
		$scope.verifyScreenSize();
	});
}]);