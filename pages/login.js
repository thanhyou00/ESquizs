// module
const app = angular.module("myapp", []);

app.controller("myctrl", ($scope) => {
  $scope.students = [
    {
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
      if ((user === $scope.students[i].username)&&(pass === $scope.students[i].password)) {
        // flag
        $scope.flag++;
        // info acc
        $scope.fullname = $scope.students[i].fullname;
      }
    }
    if(user.length>=1) {
      ($scope.flag==1)?alert("Đăng nhập thành công !"):alert("Sai tên đăng nhập hoặc mật khẩu !");
    }
  };

});
