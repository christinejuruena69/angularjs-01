(function(){ 

	'use strict';

	angular.module('main')
			
			.controller('AboutCtrl', AboutCtrl);

			AboutCtrl.$inject = ['$scope'];


			
		    function AboutCtrl($scope){
		    	$scope.characters =[
		    		{
		    			name: 'Jon Snow',
		    			title: 'Prince that was Promised'
		    		},
		    		{
		    			name: 'Daenerys Targaryen',
		    			title: 'Mother of Dragons'
		    		},
		    		{
		    			name: 'Jorah Mormont',
		    			title: 'King of Friendzone'
		    		},
		    		{
		    			name: 'Jaime Lannister',
		    			title: 'Kingslayer'
		    		}
		    	];

		    }
		        
	

})();