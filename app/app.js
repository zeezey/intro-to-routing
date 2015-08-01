var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
            function(router, $location){
               router
                .when('/Settings',{
                     controller: 'SettingsController',
                     templateUrl: '/app/templates/settings_template.html'
                   })
                .when('/List', {
                    controller: 'MyListController',
                    templateUrl: '/app/templates/list_template.html'
                   })
                .when('/Details/:detailId', {
                    controller: 'DetailsController',
                    templateUrl: '/app/templates/details_template.html'
                   });
                
                $location.html5mode = true;
                      
          /*
            Our Routes:
            /Settings
            /List
            /Details/:detailId

          */
            }]);