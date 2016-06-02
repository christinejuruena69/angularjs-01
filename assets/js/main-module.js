(function(){ 

	'use strict';

	angular.module('main', ['ngMaterial', 'ui.router'])

			
			.config(config);

			// .controller("MainCtrl", MainCtrl);

			// MainCtrl.$inject = ["$scope"];


			function config($stateProvider, $urlRouterProvider) {
   
			    $urlRouterProvider.otherwise('/home');				    
				    $stateProvider
				       
				       // HOME STATES AND NESTED VIEWS ========================================
				       .state('home', {
				           url: '/home',
				           templateUrl: 'home.html'
				       })
				       
				       .state('home.list', {
				        url: '/list',
				        templateUrl: 'home-list.html',
				        controller: function($scope) {
				            $scope.friends = ['Chandler', 'Ross', 'Rachel', 'Joey', 'Monica'];					        }
					    })
					    .state('about', {
				           url: '/about',
					       views: {

						            // the main template will be placed here (relatively named)
						        '': { templateUrl: 'about.html' },

					            // the child views will be defined here (absolutely named)
					            'columnOne@about': { template: 'Look I am a column!' },

						            // for column two, we'll define a separate controller 
						        'columnTwo@about': { 
						            templateUrl: 'about-data.html',
					                controller: 'AboutCtrl'
					            }
				       		}
			        	});
		    }
		    // function MainCtrl($scope){
		    // 	$scope.characters =[
		    // 		{
		    // 			name: 'Jon Snow',
		    // 			title: 'Prince that was Promised'
		    // 		},
		    // 		{
		    // 			name: 'Daenerys Targaryen',
		    // 			title: 'Mother of Dragons'
		    // 		},
		    // 		{
		    // 			name: 'Jorah Mormont',
		    // 			title: 'King of Friendzone'
		    // 		},
		    // 		{
		    // 			name: 'Jaime Lannister',
		    // 			title: 'Kingslayer'
		    // 		}
		    // 	];

		    // }
		        
	

})();