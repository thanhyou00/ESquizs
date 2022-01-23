var mybutton = document.querySelector(".backTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// module

const app = angular.module("myapp", []);

// controller
app.controller("myctrl", ($scope) => {
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
