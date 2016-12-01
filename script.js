var appX = angular.module('mainApp', []);

appX.controller('app', function ($scope) {

    $scope.tasks = [];

    var taskData = localStorage['taskList'];

    if (taskData !== undefined) {

        $scope.tasks = JSON.parse(taskData);
    }


    $scope.searchEnter = function () {

        if (event.which == 13 && $scope.task != "") {

            $scope.addTask();
        }

    };

    var taski = document.getElementsByTagName('li');
    
    
    if(!taski){
        
        document.getElementsByTagName('ul').innerText('add a task');
        
    }

    $scope.addTask = function () {
        $scope.tasks.push({
            'taskMessage': $scope.task,
            'status': false
        });
        $scope.task = "";
        localStorage['taskList'] = JSON.stringify($scope.tasks);
        console.log(localStorage);
    }

    $scope.contentEdit = function (msg) {

        for (i = 0; i < $scope.tasks.length; i++) {
            if ($scope.tasks[i].taskMessage == msg) {
                $scope.tasks[i].taskMessage = event.target.innerText;

            }

        }

        localStorage['taskList'] = JSON.stringify($scope.tasks);

        event.target.contentEditable = event.target.contentEditable == 'false' ? 'true' : 'false';

    }

    $scope.enterAgain = function (msg) {
        if (event.which == 13 && msg != "") {

            $scope.contentEdit(msg);
        }

    }

    $scope.remove = function (array, index) {
        $scope.tasks.splice(index, 1);
        
        localStorage['taskList'] = JSON.stringify($scope.tasks);
       
    }

 

});