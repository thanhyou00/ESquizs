// check pass
//   camelCase
app.directive("checkPassword", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attr, controller) {
      const fnValidate = function (value) {
        if (value.length >= 8) {
          controller.$setValidity("check_password", true);
        } else {
          controller.$setValidity("check_password", false);
        }

        return value;
      };
      controller.$parsers.push(fnValidate);
    },
  };
});
// module
app.controller("ctrlLogin", function ($scope, $http) {
  $scope.students = [];
  $scope.student = {
    id: "",
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    marks: 0,
  };

  // handler API

  const api = "https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/Account";
  $http.get(api).then(function (res) {
    $scope.students = res.data;
    console.log($scope.students);
  });
  // handler login
  $scope.user;
  $scope.pass;
  $scope.submit = () => {
    // $scope.flag = true;
    for (var i = 0; i < 16; i++) {
      // Validate
      if ($scope.user === $scope.students[i].username &&$scope.pass === $scope.students[i].password) {
        alert("Đăng nhập thành công ! ");
        return
      } else {
        alert("Sai tên đăng nhập hoặc mật khẩu !");
        return
      }
    }
  };

  // get pass
  $scope.getindex = 0;
  $scope.getpass = (getemail, getid) => {
    $scope.flagpass = 0;
    for (var i = 0; i < $scope.students.length; i++) {
      if (
        getemail == $scope.students[i].email &&
        getid == $scope.students[i].id
      ) {
        $scope.flagpass++;
        $scope.getindex = i;
      }
    }

    $scope.flagpass == 1
      ? alert(
          "Mật khẩu của bạn là : " + $scope.students[$scope.getindex].password
        )
      : alert("Nhập sai mã xác nhận");
  };

  // Handler Signup
  // Add new a account
});
