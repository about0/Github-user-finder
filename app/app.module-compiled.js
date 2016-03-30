'use strict';

var myApp = angular.module('myApp', []);
myApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.gitUser = {
		text: 'Put the Git user name there',
		name: ''
	};
	$scope.submit = function () {
		if ($scope.gitUser.text != 'Put the Git user name there') {
			$http.get('https://api.github.com/users/' + $scope.gitUser.text).then(onUserComplete, onError);
		}
	};
	var onUserComplete = function onUserComplete(response) {
		$scope.user = response.data;
	};

	var onError = function onError(reason) {
		$scope.error = 'Couldn\'t reach the user info';
	};

	$scope.message = 'Hello, Angular';
}]);

//# sourceMappingURL=app.module-compiled.js.map