'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'app/view3/view3.html',
    controller: 'View3Ctrl',
    controllerAs : 'ctrl'
  });
}])

  .controller('View3Ctrl', function ($http, $scope) {
//          $http({
//            method: 'GET',
//            url: 'api/stories'
//          }).then(function successCallback(res) {
//            $scope.data = res.data.message;
//          }, function errorCallback(res) {
//            $scope.error = res.status + ": "+ res.data.statusText;
//          });
        });


//
//.controller('View1Ctrl', ["InfoFactory","InfoService",function(InfoFactory,InfoService) {
//        
//        
//        
//        
//}]);