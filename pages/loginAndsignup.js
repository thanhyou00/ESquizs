      // check pass
      //   camelCase
      app.directive("checkPassword", function(){
        return {
            require : 'ngModel',
            link : function (scope, element, attr, controller) {
                const fnValidate = function (value) {
                    if(value.length>=8) {
                        controller.$setValidity("check_password", true);
                    } else {
                        controller.$setValidity("check_password", false);
                    }

                    return value;
                }
                controller.$parsers.push(fnValidate);
            }
        }
    });
// module
app.controller("ctrlLogin", function ($scope) {
  $scope.students = [
    {
      id: 1234,
      username: "teonv",
      password: "iloveyou",
      fullname: "Nguyễn Văn Tèo",
      email: "teonv@fpt.edu.vn",
      gender: "true",
      birthday: "21/12/1995",
      // schoolfee: "1500000",
      marks: 0,
    },
    {
      id: 2345,
      username: "pheonv",
      password: "iloveyou",
      fullname: "Nguyễn Văn Chí Phèo",
      email: "pheonv@fpt.edu.vn",
      gender: "true",
      birthday: "11/10/1985",
      // schoolfee: "2500000",
      marks: 0,
    },
    {
      id: 3456,
      username: "nopt",
      password: "iloveyou",
      fullname: "Phạm Thị Nở",
      email: "nopt@fpt.edu.vn",
      gender: "false",
      birthday: "15/05/1993",
      // schoolfee: "2000000",
      marks: 0,
    },
  ];

  // handler save to local storage

  const infoAccount = JSON.stringify($scope.students);
  localStorage.setItem("account", infoAccount);
  // handler login
  $scope.user;
  $scope.pass;
  let len = $scope.students.length;
  $scope.submit = () => {
    $scope.flag = 0;
    for (var i = 0; i < len; i++) {
      // Validate
      if (
        $scope.user === $scope.students[i].username &&
        $scope.pass === $scope.students[i].password
      ) {
        // flag
        $scope.flag++;
        // info acc
        $scope.fullname = $scope.students[i].fullname;
      }
    }

    if ($scope.flag == 1) {
      alert("Đăng nhập thành công ! "+ $scope.fullname);
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu !");
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

