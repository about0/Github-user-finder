

var myApp = angular.module('myApp',[]);
myApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.gitUser = {
		text: 'Put the Git user name there',
		name : ''
	};
	$scope.submit = function () {
		if ($scope.gitUser.text != 'Put the Git user name there'){
			$http.get('https://api.github.com/users/' + $scope.gitUser.text)
				.then(onUserComplete, onError);
		}
		
	}
	var onUserComplete = function (response) {
		$scope.user = response.data;
	};

	var onError = function (reason) {
		$scope.error ='Couldn\'t reach the user info'
	};




	$scope.message = 'Hello, Angular';
}]);