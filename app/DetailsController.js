var app = angular.module('app');


app.controller('DetailsController', function($scope, $routeParams){
    var personId = $routeParams.personId;

    $scope.name = "Mr placeholder";
    $scope.description = "random description";
});

