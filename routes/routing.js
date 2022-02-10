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
    .when("/signup", {
      templateUrl: "/pages/signup.html",
      controller:"ctrlSignup"
    })
    .when("/login", {
      templateUrl: "/pages/login.html",
      controller:"ctrlLogin"
    })
    // test
    .when("/ADAV", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlADAV",
    })
    .when("/ADBS", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlADBS",
    })
    .when("/ADTE", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlADTE",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
