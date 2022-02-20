// QUIZZ

app.controller("ctrlADAV", function ($scope, $http) {
  $scope.title = "Lập trình Android nâng cao";
  $scope.srcs = [];
  $scope.src = {
    "Id": "",
    "Text": "",
    "Marks": "",
    "AnswerId": "",
    "Answers": [
     {
      "Id": "",
      "Text": ""
     },
     {
      "Id": "",
      "Text": ""
     },
     {
      "Id": "",
      "Text": ""
     },
     {
      "Id": "",
      "Text": ""
     }
    ]
  };
  $scope.srcs.Id = 1;
  // function next
  $scope.nextQuestion = function() {
    console.log('ok');
    $scope.srcs.Id++;
    $scope.getQuestions=function(ID){
      return $scope.srcs[ID];
    };
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
          // $scope.len = $scope.srcs.length;
          console.log($scope.srcs);
  });
      const ID = $scope.srcs.Id;
      return {
          getQuestions:function(ID) {
          return $scope.srcs[ID];
        }
      };

});
