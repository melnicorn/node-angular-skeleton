const sampleApp = angular.module('sampleApp', [])
	.controller('sampleController', function ($scope, $http){
		$scope.message = "Hello there! This is a sample angular app!";

		$scope.request = {
			get: 'Request pending...',
			post: 'Request pending...'
		};

		$http.get('/api/template')
			.then(function (response) {
				$scope.request.get = 'API request succeeded: ' + response.data.message;
			})
			.catch(function (err) {
				$scope.request.get = 'API request failed: ' + err
			});

		$http.post('/api/template', { message: 'snorkel!' })
			.then(function (response) {
				$scope.request.post = 'API request succeeded: ' + response.data.message;
			})
			.catch(function (err) {
				$scope.request.get = 'API request failed: ' + err
			});
	});