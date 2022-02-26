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
    // Get API
    const api = 'https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/ADAV';
    $http.get(api) // Gửi request dạng GET lên API
        .then(function (response) {
            $scope.srcs = response.data;  
            $scope.len= $scope.srcs.length; 
    });

  $scope.ID = 1;
  $scope.totalMark= 0;
  // $scope.srcs.Id
  $scope.len; 
  // function next
  $scope.nextQuestion = function() {
    $scope.ID++;
    console.log($scope.ID);
    $scope.getQuestions($scope.ID);
  };
  // getquestion
  $scope.getQuestions = function(ID){
    $scope.srcs = $scope.srcs[$scope.ID];
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
        console.log(i);
      } 
    };
    $scope.flag?alert("Đáp án đúng"):alert("Đáp án sai")

  };

});
