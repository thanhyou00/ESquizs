// QUIZZ

app.controller("ctrlADAV", function ($scope, $http) {
  $scope.title = "Lập trình Android nâng cao";
  $scope.srcs = [];
  $scope.src = {
    id: "",
    Text: "",
    Marks: "",
    AnswerId: "",
    Answers: [
     {
      Id: "",
      Text: ""
     },
     {
      Id: "",
      Text: ""
     },
     {
      Id: "",
      Text: ""
     },
     {
      Id: "",
      Text: ""
     }
    ]
  };
  $scope.getApi = function() {
      // Get API
      const api ='https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/ADAV';
      $http.get(api) // Gửi request dạng GET lên API
          .then(function (response) {
              $scope.srcs = response.data.filter(function(us){
                return us.id == $scope.ID;
              });  
              $scope.len= response.data.length; 
      });
  }

  $scope.showQuestion = function() {
        $scope.isShow = false;
        $scope.start();
        $scope.getApi();
  }

  $scope.ID = 1;
  $scope.totalMark= 0;
  $scope.len = 0; 
  $scope.isShow = true;


  // function next
  $scope.nextQuestion = function() {
    $scope.ID++;
    $scope.getApi();
    if($scope.ID > $scope.len) {
      alert("Hoàn thành bài thi")
    }
  };
  // function check
  $scope.check = function () {
    if (!$("input[name = answer]:checked").length) {
      return;
    }
    var answ = $("input[name = answer]:checked").val();
    $scope.flag = false;
    for (var i = 0; i < $scope.srcs.length; i++) {
      if (answ == $scope.srcs[i].AnswerId) {
        $scope.totalMark++;
        $scope.flag = true;
      } 
    };
    $scope.flag?alert("Đáp án đúng"):alert("Đáp án sai")

  };

  // countdown from stackoverflow:))
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript  
  $scope.start = function() {
  let timer = 60 * 15,
  minutes,
  seconds;
  const myTimer = setInterval(function () {
  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const txtContent = document.querySelector("#mytime").textContent = (minutes + ":" + seconds);

  if (--timer < 0) {
    timer = 60*1;
  }

  if (txtContent == "00:00") {
    alert("Hết giờ");
    clearInterval(myTimer);
  }
  }, 1000);
  };

});
