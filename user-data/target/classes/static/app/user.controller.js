(function(){
	
	'use strict';
	angular.module('app').controller('UserController',UserController);
	
	Usercontroller.$inject = [];
	
	function UserController(){
		var vm = this;
		
		vm.topics = [];
		vm.getAll = getAll;
		vm.deleteUser = deleteUser;
		
		init();
		
		function init(){
			getAll();
		}
		function getAll(){
			var url = "/topics";
			var userPromise = $http.get(url);
			userPromise.then(function(response){
				vm.topics = response.data;
			});
		}
		function deleteUser(id){
			var url = "/topics/" + id ;
			$http.delete(url).then(function(response){
				vm.topics = response.data;
			});
		}
		
	}
	
})();