// module

var app = angular.module("myroutes", ["ngRoute"]);
// angular.module('ng').filter('tel', function (){});
app.config(function ($routeProvider, $locationProvider) {
  //inject $locationProvider service
  $locationProvider.hashPrefix(""); // add configuration
  $routeProvider
    // menu
    .when("/", {
      templateUrl: "/pages/login.html",
      controller: "ctrlLogin",
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
      controller: "ctrlAdmin",
    })
    .when("/login", {
      templateUrl: "/pages/login.html",
      controller: "ctrlAdmin",
    })
    .when("/admin", {
      templateUrl: "/pages/admin.html",
      controller: "ctrlAdmin",
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
    .when("/ADUI", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlADUI",
    })
    .when("/ASNE", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlASNE",
    })
    .when("/CLCO", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlCLCO",
    })
    .when("/DBAV", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlDBAV",
    })
    .when("/DBBS", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlDBBS",
    })
    .when("/GAME", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlGAME",
    })
    .when("/HTCS", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlHTCS",
    })
    .when("/INMA", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlINMA",
    })
    .when("/JAAV", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlJAAV",
    })
    .when("/JABS", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlJABS",
    })
    .when("/JSPR", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlJSPR",
    })
    .when("/LAYO", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlLAYO",
    })
    .when("/MOWE", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlMOWE",
    })
    .when("/PHPP", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlPHPP",
    })
    .when("/PMAG", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlPMAG",
    })
    .when("/VBPR", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlVBPR",
    })
    .when("/WEBU", {
      templateUrl: "/pages/tests/root.html",
      controller: "ctrlWEBU",
    })
    .otherwise({
      redirectTo: "/login",
    });
});
