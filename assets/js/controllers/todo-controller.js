
(function(){ 

  'use strict';

  angular.module('main')
      
      .controller('TodoCtrl', TodoCtrl);

      TodoCtrl.$inject = ['$scope', '$firebaseArray', '$mdDialog', '$mdMedia'];


        function TodoCtrl($scope, $firebaseArray, $mdDialog, $mdMedia) {
          //CREATE A FIREBASE REFERENCE
          var ref = new Firebase("https://intense-inferno-1925.firebaseio.com/");

          // GET MESSAGES AS AN ARRAY
          $scope.messages = $firebaseArray(ref);

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              //ALLOW CUSTOM OR ANONYMOUS USER NAMES
              var name = $scope.name || "anonymous";

              //ADD TO FIREBASE
              $scope.messages.$add({
                todo: name,
                completed: false
              });

              //RESET MESSAGE
              $scope.msg = "";
            }
          };

          $scope.addNote = function(){
          	console.log($scope.todo);
          	// console.log($scope.text);

          	$scope.messages.$add({
          		todo: $scope.todo,
          		// text: $scope.text,
          		completed: false
          	});

          	//RESET FIELDS
          	$scope.todo = "";
          	// $scope.text = "";
          };

          $scope.toggle = function(note){
          	note.completed = !note.completed;
          	$scope.messages.$save(note);

          };

          $scope.delete = function(note){
          	$scope.messages.$remove(note);

          };

          $scope.editTodo = function(ev, note) {
              // Appending dialog to document.body to cover sidenav in docs app
              var confirm = $mdDialog.prompt()
                    .title('What would your new todo be?')
                    .textContent('')
                    .placeholder(note.todo)
                    .ariaLabel('Dog name')
                    .targetEvent(ev)
                    .ok('Save!')
                    .cancel('Cancel');
                  $mdDialog.show(confirm).then(function(result) {
                    note.todo = result;
                    $scope.messages.$save(note);
              }, function() {
              });
            };
         

        }

   

})();