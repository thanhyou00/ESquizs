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
app.controller("ctrlAdmin", function ($scope, $http) {
  $scope.users = [];
  $scope.user = {
    id: "",
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    marks: 0,
  };
  $scope.isSuccess = false;
  $scope.message = "";

  // handler API

  const api = "https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/Account";
  $http.get(api)
    .then(function (res) {
    $scope.users = res.data;
  }).catch(function(error){
    console.log(error);
  });
  // HANDLER LOGIN
  $scope.submitLogin = function(){
    $scope.flag = false;
    for (var i = 0; i < $scope.users.length; i++) {
      // Validate
      if ($scope.user.username == $scope.users[i].username &&$scope.user.password == $scope.users[i].password) {
        $scope.flag = true;
      } 
    }
    if($scope.flag) {
      alert("Đăng nhập thành công")
    } else {
      alert("Sai tên tài khoản hoặc mật khẩu")
    }
  };

  // Fotget password
  $scope.getindex = 0;
  $scope.getpass = (getemail, getid) => {
    $scope.flagpass = 0;
    for (var i = 0; i < $scope.users.length; i++) {
      if (getemail == $scope.users[i].email &&getid == $scope.users[i].id) {
        $scope.flagpass++;
        $scope.getindex = i;
      }
    }

    $scope.flagpass == 1 ? alert("Mật khẩu của bạn là : " + $scope.users[$scope.getindex].password): alert("Nhập sai mã xác nhận");
  };

  $scope.submitSignup = function(event) {
  event.preventDefault();
  // HANDLER SAIGUP
  $scope.repassword;
  // validate
  if($scope.repassword != $scope.user.password) {
    alert("Mật khẩu xác nhận không trùng khớp")
    $scope.isSuccess = false;
    return
  }

  // Add new a account
  // Gửi request dạng POST kèm dữ liệu tới API
  $http.post(api, $scope.user)
  .then(function (response) {
    // Thông báo thành công
    $scope.isSuccess = true;
    $scope.message = "Đăng ký tài khoản thành công";
    // Thêm vào table
    $scope.users.push(response.data);
 })

  }
});
