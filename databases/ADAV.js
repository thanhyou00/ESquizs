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

  $scope.showQuestion = function() {
        // Get API
        const api ='https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/ADAV';
        $http.get(api) // Gửi request dạng GET lên API
            .then(function (response) {
                $scope.srcs = response.data.filter(function(us){
                  return us.id == $scope.ID;
                });  
                $scope.len= response.data.length; 
                console.log($scope.ID);
        });
  }

  $scope.ID = 1;
  $scope.totalMark= 0;
  $scope.len = 0; 

  // function next
  $scope.nextQuestion = function() {
    $scope.ID++;
    $scope.showQuestion($scope.ID)
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
