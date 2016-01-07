var app=angular.module('assignment',['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		
		templateUrl:'login.html'
	})
	.when('/input',{
		templateUrl: 'Input.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl', function($scope){
	$scope.login= function(){
		var uname= $scope.uname;
		var pwd=$scope.pwd;
		if($scope.uname =='admin' && $scope.pwd=='admin'){
			window.location.href='/Input.html';
		}else{
			alert('Wrong credentials');
		}
	};
});