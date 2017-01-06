/**
 * Created by Jim on 1/3/2017.
 */
'use strict';

angular.module('myApp.response', ['ngRoute'])



    .controller('response', ['$rootScope', '$scope', function($rootScope, $scope) {
       $scope.$watch($rootScope.showResponse, function(newValue, oldValue){

            $scope.showResponse = newValue
           console.log($rootScope.showResponse)

       })
    }]);