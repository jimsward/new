'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
    'myApp.response',
    'ngMaterial',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
    .config(function($mdThemingProvider, $mdIconProvider){

      /* $mdIconProvider
       .defaultIconSet("./assets/svg/avatars.svg", 128)
       .icon("menu"       , "./assets/svg/menu.svg"        , 24)
       .icon("share"      , "./assets/svg/share.svg"       , 24)
       .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
       .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
       .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
       .icon("phone"      , "./assets/svg/phone.svg"       , 512);*/

      $mdThemingProvider.theme('default')
          .primaryPalette('indigo')
          .accentPalette('pink')
          .warnPalette('deep-orange')
          .backgroundPalette('grey');

    })
.component('view1', {
  templateURL : 'view1.html',
  controller : 'View1Ctrl'
})
.component('view2', {
      templateURL : 'view2.html',
      controller : 'View2Ctrl'
})
.component('response', {
        template : `<md-button ng-click="$ctrl.btnResponse()">This is a Button</md-button>
        <p ng-show="$ctrl.showResponse">Response:</p>
    <p ng-show="$ctrl.showResponse">Thank you for clicking my button!</p>`,

    controller : function(){
        this.showResponse = false
        this.btnResponse = function(){
            console.log('clickhandler')
            this.showResponse = !this.showResponse
        }}

    })
