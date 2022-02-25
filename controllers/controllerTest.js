app.controller("ctrlTest", function ($scope, $http) {
  $scope.courses = [];
  $scope.course = {
    Id: "",
    Name: "",
    Logo: ""
  }
  // API
  const api = 'https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/Course';
  $http.get(api) // Gửi request dạng GET lên API
      .then(function (response) {
          $scope.courses = response.data;
      })
      .catch(function (error) {
          console.log(error);
      });

});
