// module

var app = angular.module("myroutes", ["ngRoute"]);
// angular.module('ng').filter('tel', function (){});
app.config(function ($routeProvider, $locationProvider) {
  //inject $locationProvider service
  $locationProvider.hashPrefix(""); // add configuration
  $routeProvider
    // menu
    .when("/", {
      templateUrl: "/pages/home.html",
      controller: "ctrlHome",
    })
    .when("/home", {
      templateUrl: "/pages/home.html",
      controller: "ctrlHome",
    })
    .when("/introduce", {
      templateUrl: "/pages/introduce.html",
    })
    .when("/test", {
      templateUrl: "/pages/test.html",
      controller: "ctrlTest",
    })
    .when("/edit", {
      templateUrl: "/pages/edit-acc.html",
    })
    .when("/contact", {
      templateUrl: "/pages/contact.html",
    })
    .when("/ask", {
      templateUrl: "/pages/ask.html",
    })
    .when("/feedback", {
      templateUrl: "/pages/feedback.html",
    })
    .when("/login", {
      templateUrl: "/pages/login.html",
    })
    .when("/signup", {
      templateUrl: "/pages/signup.html",
      controller:"ctrlLoginAndSignup"
    })
    .when("/login", {
      templateUrl: "/pages/login.html",
      controller:"ctrlLoginAndSignup"
    })
    // test
    .when("/ADAV", {
      templateUrl: "/pages/tests/ADAV.html",
      controller: "ctrlADAV",
    })
    .when("/ADBS", {
      templateUrl: "/pages/tests/ADBS.html",
      controller: "ctrlADBS",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
