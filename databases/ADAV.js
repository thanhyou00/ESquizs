// QUIZZ

app.controller("ctrlADAV", function ($scope, $http) {
  $scope.title = "Lập trình Android nâng cao";
  $scope.srcs = [];
  $scope.src = {
    Id: "",
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

  $scope.ID = 1;
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

    for (var i = 0; i < $scope.srcs.length; i++) {
      if (answ == $scope.srcs[i].AnswerId) {
        alert("Đúng")
        return
      } else {
        alert("Sai")
        return
      }
    };
  };

  // Get API
  const api = 'https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/ADAV';
  $http.get(api) // Gửi request dạng GET lên API
      .then(function (response) {
          $scope.srcs = response.data;
          $scope.len = $scope.srcs.length;
          console.log($scope.srcs);      
  });

});
