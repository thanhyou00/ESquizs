

// module 

const app = angular.module("myroutes",['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../pages/home.html',
      })
      .when('/home', {
        templateUrl: '../pages/home.html',
      })
      .when('/introduce', {
        templateUrl: '../pages/introduce.html',
      })
      .when('/test', {
        templateUrl: '../pages/test.html',
      })
      .otherwise({
        redirectTo: '/home'
     });
}    