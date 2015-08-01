app.controller('MyListController', function($scope, DataService, $location){
    $scope.Test = "Our list controller is working";
    
    //1. Inject the DataService
    //2. Get the array of data out of hte data service
    $scope.myDataPersonList = DataService.monkeyData;

    $scope.personClicked = function(thePerson){
//        $scope.clickedPerson = thePerson.name;
        $location.path('/Details/' + thePerson.name);
    }
    
});


//     http://127.0.0.1:63182/index.html#/Details/99