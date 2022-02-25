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
    marks: "",
  };
  $scope.courses = [];
  $scope.course = {
    id :"",
    Id : "",
    Name : "",
    Logo : "",
  };
  $scope.quizs = [];
  $scope.quiz = {
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
  }

  $scope.isSuccess = false;
  $scope.message = "";
  $scope.index = -1;
  // $scope.fullname  ;

  // handler API Account

  const apiAccount = "https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/Account";
  $http.get(apiAccount)
    .then(function (res) {
    $scope.users = res.data;
  }).catch(function(error){
    console.log(error);
  });
    // handler API Course

    const apiCourse = "https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/Course";
    $http.get(apiCourse)
      .then(function (res) {
      $scope.courses = res.data;
    }).catch(function(error){
      console.log(error);
    });
    // handler API Quizs

    const apiQuiz = "https://620fbe2aec8b2ee2834b77d0.mockapi.io/api/ADAV";
    $http.get(apiQuiz)
      .then(function (res) {
      $scope.quizs = res.data;
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
        $scope.user.fullname = $scope.users[i].fullname;
        console.log($scope.user.fullname);
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
  // event.preventDefault();
  // HANDLER SIGNUP
  $scope.repassword;
  // validate
  if($scope.repassword != $scope.user.password) {
    alert("Mật khẩu xác nhận không trùng khớp")
    $scope.isSuccess = false;
    return
  }

  // Add new a account
  // Gửi request dạng POST kèm dữ liệu tới API
  $http.post(apiAccount, $scope.user)
  .then(function (response) {
    // Thông báo thành công
    $scope.isSuccess = true;
    $scope.message = "Đăng ký tài khoản thành công";
    // Thêm vào table
    $scope.users.push(response.data);
 })
};

  // ACCOUNT
  $scope.onFormSubmitAccount = function(event){
    // event.preventDefault();
    if($scope.index == -1) {
      // Add new a account
      // Gửi request dạng POST kèm dữ liệu tới API
      $http.post(apiAccount, $scope.user)
      .then(function (response) {
        // Thông báo thành công
        alert("Thêm mới tài khoản thành công")
        $scope.onClearAccount();
        // Thêm vào table
        $scope.users.push(response.data);
     })
      } else {
        alert("Cập nhật thành công")
        $scope.onUpdateAccount();
      }
  }

  // Remove a account
  $scope.onDeleteAccount = function (index) {
   const id = $scope.users[index].id;
   const apiDeleteAccount = apiAccount + "/" + id;
   $http.delete(apiDeleteAccount)
       .then(function (response) {
           // Xóa trên table
           $scope.users.splice(index, 1);
           alert("Xóa tài khoản thành công")
  })
 }
   // Update a account
   $scope.onUpdateAccount = function(index) {
    $scope.users[$scope.index] = angular.copy($scope.user);
    $scope.index = index;
    $scope.user =  angular.copy($scope.users[index]); 
}
  // Clear form
  $scope.onClearAccount = function() {
    $scope.user = {};
    $scope.index = -1;
   }

   // COURSE
  $scope.onFormSubmitCourse = function(event) {
    // event.preventDefault();
    if ($scope.index == -1) {
    // Add new a Course
    // Gửi request dạng POST kèm dữ liệu tới API
    $http.post(apiCourse, $scope.course)
    .then(function (response) {
      // Thông báo thành công
      alert("Thêm mới khóa học thành công")
      $scope.onClearCourse();
      // Thêm vào table
      $scope.courses.push(response.data);
   })
    } else {
        alert("Cập nhật thành công")
        $scope.onUpdateCourse();
    }

};

     // Remove a course
     $scope.onDeleteCourse = function (index) {
      const id = $scope.courses[index].id;
      const apiDeleteCourse = apiCourse + "/" + id;
      $http.delete(apiDeleteCourse)
          .then(function (response) {
              // Xóa trên table
              $scope.courses.splice(index, 1);
              alert("Xóa khóa học thành công")
              console.log(apiDeleteCourse);
     })
    };
  // Update a course
    $scope.onUpdateCourse = function(index) {
      $scope.courses[$scope.index] = angular.copy($scope.course);
      $scope.index = index;
      $scope.course =  angular.copy($scope.courses[index]); 
    };

  // Clear form
  $scope.onClearCourse = function() {
    $scope.course = {};
    $scope.index = -1;
   }
   // QUIZ
   $scope.onFormSubmitQuiz = function(event) {
    event.preventDefault();
    if ($scope.index == -1) {
    // Add new a Course
    // Gửi request dạng POST kèm dữ liệu tới API
    $http.post(apiQuiz, $scope.quiz)
    .then(function (response) {
      // Thông báo thành công
      alert("Thêm mới khóa học thành công")
      $scope.onClearquiz();
      // Thêm vào table
      $scope.quizs.push(response.data);
   })
    } else {
        alert("Cập nhật thành công")
        $scope.onUpdateQuiz();
    }

};

     // Remove a course
     $scope.onDeleteQuiz = function (index) {
      const id = $scope.quizs[index].id;
      const apiDeletequiz = apiQuiz + "/" + id;
      $http.delete(apiDeletequiz)
          .then(function (response) {
              // Xóa trên table
              $scope.quizs.splice(index, 1);
              alert("Xóa khóa học thành công")
              console.log(apiDeletequiz);
     })
    };
  // Update a course
    $scope.onUpdateQuiz = function(index) {
      $scope.quizs[$scope.index] = angular.copy($scope.quiz);
      $scope.index = index;
      $scope.quiz =  angular.copy($scope.quizs[index]); 
    };

  // Clear form
  $scope.onClearQuiz = function() {
    $scope.quiz = {};
    $scope.index = -1;
   }



});
