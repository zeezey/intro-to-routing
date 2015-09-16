var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/list', {
    template: '<div ng-repeat="person in people">{{person.name}}</div>',
    controller: 'ListController',
    })
        .when('/details/:personid', {
    templateUrl: 'app/templates/details_template.html',
        controller: 'DetailsController',
    })
        .when('settings', {})

});

