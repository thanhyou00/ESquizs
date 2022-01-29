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
      birthday: "1995-12-21",
      schoolfee: "1500000",
      marks: "0",
    },
    {
      id: 2345,
      username: "pheonv",
      password: "iloveyou",
      fullname: "Nguyễn Văn Chí Phèo",
      email: "pheonv@fpt.edu.vn",
      gender: "true",
      birthday: "1985-10-11",
      schoolfee: "2500000",
      marks: "0",
    },
    {
      id: 3456,
      username: "nopt",
      password: "iloveyou",
      fullname: "Phạm Thị Nở",
      email: "nopt@fpt.edu.vn",
      gender: "false",
      birthday: "1993-05-15",
      schoolfee: "2000000",
      marks: "0",
    },
  ];

  // handler login
  $scope.fullname = "Người mới chơi";
  $scope.submit = (user, pass) => {
    $scope.flag = 0;
    for (var i = 0; i < $scope.students.length; i++) {
      // Validate
      if (
        user === $scope.students[i].username &&
        pass === $scope.students[i].password
      ) {
        // flag
        $scope.flag++;
        // info acc
        $scope.fullname = $scope.students[i].fullname;
      }
    }

    if (user.length >= 1 && $scope.flag == 1) {
      alert("Đăng nhập thành công !");
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
});
