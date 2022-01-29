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
    })
    // test
    .when("/ADAV", {
      templateUrl: "/pages/tests/ADAV.html",
      controller: "ctrlADAV",
    })
    .otherwise({
      redirectTo: "/home",
    });
});

// controllers
app.controller("ctrlHome", ($scope) => {
  $scope.msg = "Oke la";
  $scope.course = [
    {
      Id: "ADAV",
      Name: "Lập trình Android nâng cao",
      Logo: "ADAV.svg",
    },
    {
      Id: "ADBS",
      Name: "Lập trình Android cơ bản",
      Logo: "ADBS.svg",
    },
    {
      Id: "ADTE",
      Name: "Kiểm thử và triển khai ứng dụng Android",
      Logo: "ADTE.svg",
    },
    {
      Id: "ADUI",
      Name: "Thiết kế giao diện trên Android",
      Logo: "ADUI.svg",
    },
    {
      Id: "ASNE",
      Name: "Lập trình ASP.NET",
      Logo: "ASNE.svg",
    },
    {
      Id: "CLCO",
      Name: "Điện toán đám mây",
      Logo: "CLCO.svg",
    },
    {
      Id: "DBAV",
      Name: "SQL Server",
      Logo: "DBAV.svg",
    },
    {
      Id: "DBBS",
      Name: "Cơ sở dữ liệu",
      Logo: "DBBS.svg",
    },
    {
      Id: "GAME",
      Name: "Lập trình game 2D",
      Logo: "GAME.svg",
    },
    {
      Id: "HTCS",
      Name: "HTML5 và CSS3",
      Logo: "HTCS.svg",
    },
    {
      Id: "INMA",
      Name: "Internet Marketing",
      Logo: "INMA.svg",
    },
    {
      Id: "JAAV",
      Name: "Lập trình Java nâng cao",
      Logo: "JAAV.svg",
    },
  ];
});
