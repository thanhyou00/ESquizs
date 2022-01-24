// back to top

var mybutton = document.querySelector(".backTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// sucess
var toastTrigger = document.getElementById("liveToastBtn");
var toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", function () {
    var toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

// QUIZZ

const app = angular.module("myapp", []);

app.controller("myctrl", ($scope) => {
  $scope.adbs = [
    {
      Id: 25262,
      Text: "Kiểm thử nào không nằm trong kiểm thử hệ thống?",
      Marks: 1,
      AnswerId: 104715,
      Answers: [
        { Id: 104712, Text: "Installation tests" },
        { Id: 104713, Text: "Performance tests" },
        { Id: 104714, Text: "GUI tests" },
        { Id: 104715, Text: "Unit test" },
      ],
    },
    {
      Id: 25263,
      Text: "Kiểm thử nào được sử dụng để kiểm thử hoạt động của các thành phần khi chúng làm việc chung với nhau?",
      Marks: 1,
      AnswerId: 104717,
      Answers: [
        { Id: 104716, Text: "Kiểm thử đơn vị" },
        { Id: 104717, Text: "Kiểm thử tích hợp" },
        { Id: 104718, Text: "Kiểm thử chấp nhận" },
        { Id: 104719, Text: "Kiểm thử giao diện" },
      ],
    },
    {
      Id: 25264,
      Text: "Android sử dụng Framework nào để kiểm thử đơn vị?",
      Marks: 1,
      AnswerId: 104720,
      Answers: [
        { Id: 104720, Text: "JUnit" },
        { Id: 104721, Text: "FUnit" },
        { Id: 104722, Text: "NUnit" },
        { Id: 104723, Text: "AUnit" },
      ],
    },
    {
      Id: 25265,
      Text: "Trong JUnit, phương thức nào được sử dụng để kiểm tra một giá trị có phải Null hay không?",
      Marks: 1,
      AnswerId: 104727,
      Answers: [
        { Id: 104724, Text: "confirmNull" },
        { Id: 104725, Text: "assertNulls" },
        { Id: 104726, Text: "confirmNulls" },
        { Id: 104727, Text: "assertNull" },
      ],
    },
    {
      Id: 25266,
      Text: "Trong JUnit test case, phương thức nào được sử dụng để tạo đối tượng và khởi tạo giá trị cho các đối tượng?",
      Marks: 1,
      AnswerId: 104729,
      Answers: [
        { Id: 104728, Text: "tearingDown()" },
        { Id: 104729, Text: "setUp()" },
        { Id: 104730, Text: "settingUp()" },
        { Id: 104731, Text: "tearDown()" },
      ],
    },
    {
      Id: 25267,
      Text: "Kiểm tra việc lưu thông tin trạng thái của Activity trong phương thức nào?",
      Marks: 1,
      AnswerId: 104733,
      Answers: [
        { Id: 104732, Text: "onSearchRequested" },
        { Id: 104733, Text: "onPause" },
        { Id: 104734, Text: "onKeyUp" },
        { Id: 104735, Text: "onNavigateUp" },
      ],
    },
    {
      Id: 25268,
      Text: "Lớp nào không nằm trong gói android.test.mock?",
      Marks: 1,
      AnswerId: 104740,
      Answers: [
        { Id: 104736, Text: "MockContext" },
        { Id: 104737, Text: "MockContentResolver" },
        { Id: 104738, Text: "MockCursor" },
        { Id: 104739, Text: "MockContentProvider" },
        { Id: 104740, Text: "MockResource" },
      ],
    },
    {
      Id: 25269,
      Text: "Trong JUnit, phương thức nào được sử dụng để so sánh hai giá trị có bằng nhau hay không?",
      Marks: 1,
      AnswerId: 104742,
      Answers: [
        { Id: 104741, Text: "assertEqual" },
        { Id: 104742, Text: "assertEquals" },
        { Id: 104743, Text: "confirmEqual" },
        { Id: 104744, Text: "confirmEquals" },
      ],
    },
    {
      Id: 25270,
      Text: "Phương thức nào được chạy trước tất cả test case?",
      Marks: 1,
      AnswerId: 104746,
      Answers: [
        { Id: 104745, Text: "tearDown()" },
        { Id: 104746, Text: "setUp()" },
        { Id: 104747, Text: "settingUp()" },
        { Id: 104748, Text: "tearingDown()" },
      ],
    },
    {
      Id: 25271,
      Text: "Kiểm thử đơn vị được thực hiện bởi ai trong nhóm phát triển?",
      Marks: 1,
      AnswerId: 104751,
      Answers: [
        { Id: 104749, Text: "Tester" },
        { Id: 104750, Text: "QA" },
        { Id: 104751, Text: "Lập trình viên" },
        { Id: 104752, Text: "Product Owner" },
      ],
    },
    {
      Id: 25272,
      Text: "Đoạn code sau có ý nghĩa gì?SecondActivity startedActivity = (SecondActivity)monitor. waitForActivityWithTimeout(2000);",
      Marks: 1,
      AnswerId: 104755,
      Answers: [
        {
          Id: 104753,
          Text: "Khởi tạo SecondActivity. Nếu sau 2 milliseconds, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL",
        },
        {
          Id: 104754,
          Text: "Khởi tạo SecondActivity. Nếu sau 2 giờ, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL",
        },
        {
          Id: 104755,
          Text: "Khởi tạo SecondActivity. Nếu sau 2 giây, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL",
        },
        { Id: 104756, Text: "Khởi tạo SecondActivity" },
      ],
    },
    {
      Id: 25273,
      Text: "Lớp nào hỗ trợ để sinh ra các sự kiện touch event?",
      Marks: 1,
      AnswerId: 104760,
      Answers: [
        { Id: 104757, Text: "TouchLibraries" },
        { Id: 104758, Text: "TouchUtil" },
        { Id: 104759, Text: "TouchLibrary" },
        { Id: 104760, Text: "TouchUtils" },
      ],
    },
    {
      Id: 25274,
      Text: "Để gửi các sự kiện tới giao diện người dùng từ chương trình Android khi kiểm thử phải sử dụng công cụ nào?",
      Marks: 1,
      AnswerId: 104764,
      Answers: [
        { Id: 104761, Text: "JUnit" },
        { Id: 104762, Text: "Nunit" },
        { Id: 104763, Text: "Ant" },
        { Id: 104764, Text: "Instrumentation" },
      ],
    },
    {
      Id: 25275,
      Text: "Phương thức nào của ViewAsserts được dùng để kiểm tra xem View có nằm trên màn hình hay không?",
      Marks: 1,
      AnswerId: 104768,
      Answers: [
        { Id: 104765, Text: "assertOffScreenAbove" },
        { Id: 104766, Text: "assertOffScreenBelow" },
        { Id: 104767, Text: "assertOffScreen" },
        { Id: 104768, Text: "assertOnScreen" },
      ],
    },
    {
      Id: 25276,
      Text: "Đối với lớp kiểm thử SingleLaunchActivityTestCase, để lấy thông tin Activity sử dụng phương thức nào?",
      Marks: 1,
      AnswerId: 104770,
      Answers: [
        { Id: 104769, Text: "getActivities()" },
        { Id: 104770, Text: "getActivity()" },
        { Id: 104771, Text: "getCurrentActivitiy()" },
        { Id: 104772, Text: "getRecentActivitiy()" },
      ],
    },
    {
      Id: 25277,
      Text: "Trước khi xuất bản ứng dụng lên Google Play, chúng ta nên kiểm tra ứng dụng trên các loại thiết bị nào?",
      Marks: 1,
      AnswerId: 104774,
      Answers: [
        { Id: 104773, Text: "Chỉ cần kiểm tra ứng dụng trên Emulator" },
        {
          Id: 104774,
          Text: "Kiểm tra thiết bị trên mọi kích thước màn hình và trên các màn hình với mật độ điểm ảnh khác nhau",
        },
        { Id: 104775, Text: "Kiểm tra ứng dụng trên Galaxy S4" },
        { Id: 104776, Text: "Kiểm tra ứng dụng trên Galaxy Tab" },
      ],
    },
    {
      Id: 25278,
      Text: "Lớp kiểm thử nào chỉ cho phép gọi các phương thức setUp và tearDown một lần duy nhất, thay vì gọi 2 phương thức này trong các lần thực hiện gọi phương thức kiểm thử?",
      Marks: 1,
      AnswerId: 104777,
      Answers: [
        { Id: 104777, Text: "SingleLaunchActivityTestCase" },
        { Id: 104778, Text: "ActivityUnitTestCase" },
        { Id: 104779, Text: "ActivityUnitTestCase2" },
        { Id: 104780, Text: "SingleLaunchActivityTestCase2" },
      ],
    },
    {
      Id: 25279,
      Text: "Phương thức nào của ViewAsserts được dùng để kiểm tra xem view cụ thể có nằm trong một ViewGroup hay không?",
      Marks: 1,
      AnswerId: 104781,
      Answers: [
        { Id: 104781, Text: "assertGroupContains" },
        { Id: 104782, Text: "assertGroupContain" },
        { Id: 104783, Text: "assertViewContains" },
        { Id: 104784, Text: "assertViewContains" },
      ],
    },
    {
      Id: 25280,
      Text: "Phương thức nào của ActivityMonitor dùng để kiểm tra xem ActivityMonitor có cho phép Activity chạy không?",
      Marks: 1,
      AnswerId: 104785,
      Answers: [
        { Id: 104785, Text: "isBlocking" },
        { Id: 104786, Text: "isPreventing" },
        { Id: 104787, Text: "isStopping" },
        { Id: 104788, Text: "isLocking" },
      ],
    },
    {
      Id: 25281,
      Text: "Lớp nào được sử dụng để gửi Intent giả lập tới Activity khi kiểm thử?",
      Marks: 1,
      AnswerId: 104789,
      Answers: [
        { Id: 104789, Text: "ActivityInstrumentationTestcase2" },
        { Id: 104790, Text: "ActivityUnitTestCase" },
        { Id: 104791, Text: "ActivityInstrumentationTestcase" },
        { Id: 104792, Text: "ActivityUnitTestCase2" },
      ],
    },
    {
      Id: 25282,
      Text: "Thư viện nào hỗ trợ kiểm thử giao diện tự động?",
      Marks: 1,
      AnswerId: 104796,
      Answers: [
        { Id: 104793, Text: "uiautomation" },
        { Id: 104794, Text: "uiautomating" },
        { Id: 104795, Text: "uiautomate" },
        { Id: 104796, Text: "uiautomator" },
      ],
    },
    {
      Id: 25283,
      Text: "Công cụ uiautomatorviewer dùng để làm gì?",
      Marks: 1,
      AnswerId: 104797,
      Answers: [
        {
          Id: 104797,
          Text: "Hỗ trợ quét và phân tích giao diện của ứng dụng chạy trên thiết bị thật",
        },
        {
          Id: 104798,
          Text: "Hỗ trợ quét và phân tích giao diện của ứng dụng chạy trên máy ảo",
        },
        {
          Id: 104799,
          Text: "Hỗ trợ quét và phân tích các thành phần của ContentProvider",
        },
        {
          Id: 104800,
          Text: "Hỗ trợ quét và phân tích các thành phần của Service",
        },
      ],
    },
    {
      Id: 25284,
      Text: "Lớp nào không phải lớp có sẵn của uiautomator API?",
      Marks: 1,
      AnswerId: 104802,
      Answers: [
        { Id: 104801, Text: "UiScrollable" },
        { Id: 104802, Text: "UiSelectors" },
        { Id: 104803, Text: "UiObject" },
        { Id: 104804, Text: "UiDevice" },
      ],
    },
    {
      Id: 25285,
      Text: "Sử dụng lệnh nào để cài đặt file JAR vào thiết bị kiểm thử?",
      Marks: 1,
      AnswerId: 104808,
      Answers: [
        { Id: 104805, Text: "adb pull" },
        { Id: 104806, Text: "android push" },
        { Id: 104807, Text: "android pull" },
        { Id: 104808, Text: "adb push" },
      ],
    },
    {
      Id: 25286,
      Text: "Lệnh nào trong Window để thiết lập biến ANDROID_HOME?",
      Marks: 1,
      AnswerId: 104809,
      Answers: [
        { Id: 104809, Text: "set ANDROID_HOME=" },
        { Id: 104810, Text: "set path ANDROID_HOME=" },
        { Id: 104811, Text: "setting up ANDROID_HOME=" },
        { Id: 104812, Text: "set up ANDROID_HOME=" },
      ],
    },
    {
      Id: 25287,
      Text: "Ngoại lệ UiAutomatorObjectNotFoundException xuất hiện khi nào?",
      Marks: 1,
      AnswerId: 104814,
      Answers: [
        { Id: 104813, Text: "Có nhiều phần tử UI thỏa mãn điều kiện tìm kiếm" },
        {
          Id: 104814,
          Text: "Không có phần tử UI nào thỏa mãn điều kiện tìm kiếm",
        },
        {
          Id: 104815,
          Text: "Không có phần tử TextView nào thỏa mãn điều kiện tìm kiếm",
        },
        { Id: 104816, Text: "Có nhiều phần tử UI thỏa mãn điều kiện tìm kiếm" },
      ],
    },
    {
      Id: 25288,
      Text: "Phải bổ sung thư viện Junit nào để có thể kiểm thử được giao diện?",
      Marks: 1,
      AnswerId: 104820,
      Answers: [
        { Id: 104817, Text: "Junit1" },
        { Id: 104818, Text: "Junit5" },
        { Id: 104819, Text: "Junit2" },
        { Id: 104820, Text: "Junit3" },
      ],
    },
    {
      Id: 25289,
      Text: 'Lệnh sau dùng để làm gì?UiObject cancelButton = new UiObject(new UiSelector().text("Cancel") .className("android.widget.Button"));',
      Marks: 1,
      AnswerId: 104822,
      Answers: [
        {
          Id: 104821,
          Text: "Tìm kiếm Button có giá trị description là Cancel",
        },
        { Id: 104822, Text: "Tìm kiếm Button có giá trị text là Cancel" },
        {
          Id: 104823,
          Text: "Tìm kiếm tất cả control có giá trị text là Cancel",
        },
        {
          Id: 104824,
          Text: "Tìm kiếm Button có giá trị resource-id là Cancel",
        },
      ],
    },
    {
      Id: 25290,
      Text: "Để kiểm thử giao diện trên Android sử dụng uiautomator, phải tạo project kiểu gì?",
      Marks: 1,
      AnswerId: 104826,
      Answers: [
        { Id: 104825, Text: "Android Project" },
        { Id: 104826, Text: "Java Project" },
        { Id: 104827, Text: "Java Testing Project" },
        { Id: 104828, Text: "Android Testing Project" },
      ],
    },
    {
      Id: 25291,
      Text: "Đối với EditText nên cung cấp thuộc tính nào để phục vụ kiểm thử giao diện?",
      Marks: 1,
      AnswerId: 104831,
      Answers: [
        { Id: 104829, Text: "android:key" },
        { Id: 104830, Text: "android:caption" },
        { Id: 104831, Text: "android:hint" },
        { Id: 104832, Text: "android:id" },
      ],
    },
    {
      Id: 25292,
      Text: "Khi kiểm thử Service, nếu override phương thức tearDown, phải gọi phương thức nào ở cuối phương thức tearDown?",
      Marks: 1,
      AnswerId: 104835,
      Answers: [
        { Id: 104833, Text: "super.tearUp()" },
        { Id: 104834, Text: "super.settingUp()" },
        { Id: 104835, Text: "super.tearDown()" },
        { Id: 104836, Text: "super.setUp()" },
      ],
    },
    {
      Id: 25293,
      Text: "Lớp nào cung cấp đối tượng giả lập Application?",
      Marks: 1,
      AnswerId: 104840,
      Answers: [
        { Id: 104837, Text: "ApplicationMock" },
        { Id: 104838, Text: "Application" },
        { Id: 104839, Text: "MockApplications" },
        { Id: 104840, Text: "MockApplication" },
      ],
    },
    {
      Id: 25294,
      Text: "Khi kiểm thử Service, người phát triển nên lưu ý điều gì?",
      Marks: 1,
      AnswerId: 104842,
      Answers: [
        { Id: 104841, Text: "Không được kiểm thử các logic nghiệp vụ" },
        { Id: 104842, Text: "Nên kiểm thử lời gọi dừng Service" },
        { Id: 104843, Text: "Không được kiểm thử lời gọi dừng Service" },
        { Id: 104844, Text: "Không nên sử dụng MockApplication khi kiểm thử" },
      ],
    },
    {
      Id: 25295,
      Text: "Khi kiểm thử IntentService, phải sử dụng phương thức nào để kích hoạt gọi phương thức onHandleIntent?",
      Marks: 1,
      AnswerId: 104845,
      Answers: [
        { Id: 104845, Text: "TimeUnit.Seconds.sleep" },
        { Id: 104846, Text: "TimeUnit.Seconds.waiting" },
        { Id: 104847, Text: "TimeUnit.Seconds.toHours" },
        { Id: 104848, Text: "TimeUnit.Seconds.valueOf" },
      ],
    },
    {
      Id: 25296,
      Text: "Phương thức nào được sử dụng để truyền đối tượng giả lập MockContext vào Service",
      Marks: 1,
      AnswerId: 104849,
      Answers: [
        { Id: 104849, Text: "setContext" },
        { Id: 104850, Text: "setContextObjects" },
        { Id: 104851, Text: "setContextObject" },
        { Id: 104852, Text: "setContexts" },
      ],
    },
    {
      Id: 25297,
      Text: "Lớp ProviderTestCase2 kế thừa lớp nào?",
      Marks: 1,
      AnswerId: 104855,
      Answers: [
        { Id: 104853, Text: "AndroidTestCase2" },
        { Id: 104854, Text: "AndroidTestCase3" },
        { Id: 104855, Text: "AndroidTestCase" },
        { Id: 104856, Text: "AndroidTestCase1" },
      ],
    },
    {
      Id: 25298,
      Text: "Khởi tạo lớp kiểm thử được thực hiện trong hàm nào?",
      Marks: 1,
      AnswerId: 104858,
      Answers: [
        { Id: 104857, Text: "Hàm IsolatedContext của ProviderTestCase2" },
        { Id: 104858, Text: "Hàm tạo của ProviderTestCase2" },
        { Id: 104859, Text: "Hàm MockContentResolver của ProviderTestCase2" },
        { Id: 104860, Text: "Hàm MockContentResolver của ProviderTestCase2" },
      ],
    },
    {
      Id: 25299,
      Text: "Phương thức ServiceTestCase.bindService() trả về đối tượng kiểu gì?",
      Marks: 1,
      AnswerId: 104864,
      Answers: [
        { Id: 104861, Text: "int" },
        { Id: 104862, Text: "String" },
        { Id: 104863, Text: "Boolean" },
        { Id: 104864, Text: "iBinder" },
      ],
    },
    {
      Id: 25300,
      Text: "Lớp nào cung cấp các phương thức kiểm thử ContentProvider?",
      Marks: 1,
      AnswerId: 104866,
      Answers: [
        { Id: 104865, Text: "ContentProviderTestCase" },
        { Id: 104866, Text: "ProviderTestCase2" },
        { Id: 104867, Text: "ProviderTestCase" },
        { Id: 104868, Text: "ContentProviderTestCase2" },
      ],
    },
    {
      Id: 25301,
      Text: "Điều gì nên làm khi kiểm thử ContentProvider?",
      Marks: 1,
      AnswerId: 104871,
      Answers: [
        { Id: 104869, Text: "Không nên kiểm thử URI không hợp lệ" },
        {
          Id: 104870,
          Text: "Không nên kiểm thử hằng số mà ContentProvider cung cấp",
        },
        { Id: 104871, Text: "Kiểm thử tất cả URI mà ContentProvider cung cấp" },
        { Id: 104872, Text: "Kiểm thử URI truy vấn và URI cập nhật" },
      ],
    },
    {
      Id: 25302,
      Text: "Làm thế nào để gửi sự kiện click vào nút BACK?",
      Marks: 1,
      AnswerId: 104875,
      Answers: [
        { Id: 104873, Text: "Gọi phương thức goBackButton của lớp Solo2" },
        { Id: 104874, Text: "Gọi phương thức goBackButton của lớp Solo" },
        { Id: 104875, Text: "Gọi phương thức goBack của lớp Solo" },
        { Id: 104876, Text: "Gọi phương thức goBack của lớp Solo2" },
      ],
    },
    {
      Id: 25303,
      Text: "Phương thức nào được sử dụng để tìm kiếm Fragment theo ID?",
      Marks: 1,
      AnswerId: 104880,
      Answers: [
        {
          Id: 104877,
          Text: "getCurrentActivity().getFragment() .findFragmentById",
        },
        { Id: 104878, Text: "getCurrentActivity().findFragmentById" },
        {
          Id: 104879,
          Text: "getActivity().getFragmentManager() .findFragmentById",
        },
        {
          Id: 104880,
          Text: "getCurrentActivity().getFragmentManager() .findFragmentById",
        },
      ],
    },
    {
      Id: 25304,
      Text: "Làm thế nào để sử dụng Robotium để kiểm thử ứng dụng Android?",
      Marks: 1,
      AnswerId: 104881,
      Answers: [
        {
          Id: 104881,
          Text: "Sử dụng file JAR robotium tải trên trang http://code.google.com/p/robotium/",
        },
        {
          Id: 104882,
          Text: "Sử dụng file JAR robotium tải trên trang android.google.com/robotium",
        },
        { Id: 104883, Text: "Chỉ cần sử dụng android testing framework" },
        { Id: 104884, Text: "Chỉ cần sử dụng KitKat SDK" },
      ],
    },
    {
      Id: 25305,
      Text: "Làm thế nào để gửi sự kiện click vào nút MENU trên thiết bị?",
      Marks: 1,
      AnswerId: 104888,
      Answers: [
        { Id: 104885, Text: "Gọi hàm sendKeys(Solo.MENU)" },
        { Id: 104886, Text: "Gọi hàm sendMenus(Solo.MENU)" },
        { Id: 104887, Text: "Gọi hàm sendMenu(Solo.MENU)" },
        { Id: 104888, Text: "Gọi hàm sendKey(Solo.MENU)" },
      ],
    },
    {
      Id: 25306,
      Text: "Làm thế nào để kiểm tra activity hiện tại có phải là Activity SecondActivity hay không?",
      Marks: 1,
      AnswerId: 104890,
      Answers: [
        {
          Id: 104889,
          Text: 'Gọi phương thức assertCurrentActivity("wrong activity", SecondActivity) của lớp Solo',
        },
        {
          Id: 104890,
          Text: 'Gọi phương thức assertCurrentActivity("wrong activity", SecondActivity.class) của lớp Solo',
        },
        {
          Id: 104891,
          Text: 'Gọi phương thức assertActivity("wrong activity", Activity.class) của lớp Solo',
        },
        {
          Id: 104892,
          Text: 'Gọi phương thức assertCurrentActivity("wrong activity", Activity.class) của lớp Solo',
        },
      ],
    },
    {
      Id: 25307,
      Text: "Chọn chức năng nào của Robotium Recorder để ghi lại tọa độ màn hình khi kiểm thử?",
      Marks: 1,
      AnswerId: 104896,
      Answers: [
        { Id: 104893, Text: "Click and drag" },
        { Id: 104894, Text: "sleep" },
        { Id: 104895, Text: "Identify class over string" },
        { Id: 104896, Text: "Click and drag coordinate" },
      ],
    },
    {
      Id: 25308,
      Text: "Để kiểm tra xem checkbox có được click hay không, phải sử dụng phương thức gì của lớp Solo?",
      Marks: 1,
      AnswerId: 104900,
      Answers: [
        { Id: 104897, Text: "isCheckBoxesCheck" },
        { Id: 104898, Text: "isCheckBoxCheck" },
        { Id: 104899, Text: "isCheckBoxesChecked" },
        { Id: 104900, Text: "isCheckBoxChecked" },
      ],
    },
    {
      Id: 25309,
      Text: "Lợi ích của Robotium là gì?",
      Marks: 1,
      AnswerId: 104902,
      Answers: [
        { Id: 104901, Text: "Kiểm thử các ứng dụng game trên Android" },
        {
          Id: 104902,
          Text: "Kiểm thử các ứng dụng Android với tốc độ kiểm thử cao",
        },
        { Id: 104903, Text: "Kiểm thử các ứng dụng Window Phone" },
        { Id: 104904, Text: "Kiểm thử các ứng dụng iOS" },
      ],
    },
    {
      Id: 25310,
      Text: "Sử dụng lớp nào của Robotium để kiểm thử giao diện?",
      Marks: 1,
      AnswerId: 104907,
      Answers: [
        { Id: 104905, Text: "Solo2" },
        { Id: 104906, Text: "RobotiumTestCase" },
        { Id: 104907, Text: "Solo" },
        { Id: 104908, Text: "RobotiumTestCase2" },
      ],
    },
    {
      Id: 25311,
      Text: "Để có thể ghi thông tin screenshot vào sdcard từ robotium, phải thêm quyền gì vào AndroidManifest?",
      Marks: 1,
      AnswerId: 104912,
      Answers: [
        { Id: 104909, Text: "android.permission.WRITE_GSERVICES" },
        { Id: 104910, Text: "android.permission.WRITE_SECURE_SETTINGS" },
        { Id: 104911, Text: "android.permission.WRITE_SMS" },
        { Id: 104912, Text: "android.permission.WRITE_EXTERNAL_STORAGE" },
      ],
    },
    {
      Id: 25312,
      Text: "Giá trị nào không phải giá trị của robolectric.logging?",
      Marks: 1,
      AnswerId: 104914,
      Answers: [
        { Id: 104913, Text: "tên file" },
        { Id: 104914, Text: "stdin" },
        { Id: 104915, Text: "stdout" },
        { Id: 104916, Text: "stderr" },
      ],
    },
    {
      Id: 25313,
      Text: "Trong các phương thức kiểm thử của Robolectric, phải sử dụng test annotation nào?",
      Marks: 1,
      AnswerId: 104918,
      Answers: [
        { Id: 104917, Text: "@RunWithRobolectric" },
        { Id: 104918, Text: "@RunWith" },
        { Id: 104919, Text: "@With" },
        { Id: 104920, Text: "@Run" },
      ],
    },
    {
      Id: 25314,
      Text: "Phải sử dụng file jar nào khi kiểm thử bằng Robolectric?",
      Marks: 1,
      AnswerId: 104923,
      Answers: [
        { Id: 104921, Text: "androidjunit.jar" },
        { Id: 104922, Text: "junit2.jar" },
        { Id: 104923, Text: "android.jar" },
        { Id: 104924, Text: "junit1.jar" },
      ],
    },
    {
      Id: 25315,
      Text: "Để thiết lập giá trị mặc định cho các item trong đối tượng Config, phải thiết lập trong file nào?",
      Marks: 1,
      AnswerId: 104928,
      Answers: [
        { Id: 104925, Text: "org.Config.properties" },
        { Id: 104926, Text: "robolectric.Config.properties" },
        { Id: 104927, Text: "org.robolectric.Config.property" },
        { Id: 104928, Text: "org.robolectric.Config.properties" },
      ],
    },
    {
      Id: 25316,
      Text: "Câu nào là đúng khi nói về Robolectric?",
      Marks: 1,
      AnswerId: 104930,
      Answers: [
        { Id: 104929, Text: "Robolectric chỉ cho phép kiểm thử trên emulator" },
        {
          Id: 104930,
          Text: "Robolectric cho phép kiểm thử không cần thiết bị thật và emulator",
        },
        {
          Id: 104931,
          Text: "Robolectric chỉ cho phép kiểm thử trên thiết bị thật",
        },
        { Id: 104932, Text: "Robolectric cho phép kiểm thử thiết bị iOS" },
      ],
    },
    {
      Id: 25317,
      Text: "Phải sử dụng test annotation nào trước phương thức kiểm thử để có thể sử dụng file AndroidManifest tùy biến tên là ModifiedAndroidManifest?",
      Marks: 1,
      AnswerId: 104936,
      Answers: [
        {
          Id: 104933,
          Text: '@Configs(manifest = "ModifiedAndroidManifest.xml")',
        },
        {
          Id: 104934,
          Text: '@Configuration(manifest = "ModifiedAndroidManifest.xml")',
        },
        { Id: 104935, Text: '@Config(manifest = "ModifiedAndroidManifest")' },
        {
          Id: 104936,
          Text: '@Config(manifest = "ModifiedAndroidManifest.xml")',
        },
      ],
    },
    {
      Id: 25318,
      Text: "File project.properties phải nằm ở đâu trong project?",
      Marks: 1,
      AnswerId: 104940,
      Answers: [
        { Id: 104937, Text: "thư mục image" },
        { Id: 104938, Text: "thư mục lib" },
        { Id: 104939, Text: "thư mục test" },
        { Id: 104940, Text: "thư mục gốc" },
      ],
    },
    {
      Id: 25319,
      Text: "Sử dụng đối tượng nào trong Robolectric để có thể truy xuất thông tin của ImageView?",
      Marks: 1,
      AnswerId: 104944,
      Answers: [
        { Id: 104941, Text: "ShadowImage" },
        { Id: 104942, Text: "ImageView" },
        { Id: 104943, Text: "Image" },
        { Id: 104944, Text: "ShadowImageView" },
      ],
    },
    {
      Id: 25320,
      Text: "Robolectric sử dụng JUnit phiên bản nào?",
      Marks: 1,
      AnswerId: 104945,
      Answers: [
        { Id: 104945, Text: "JUnit4" },
        { Id: 104946, Text: "JUnit3" },
        { Id: 104947, Text: "JUnit2" },
        { Id: 104948, Text: "JUnit1" },
      ],
    },
    {
      Id: 25321,
      Text: "Đối tượng nào trong Robolectric hoạt động tương tự như các đối tượng của Android SDK?",
      Marks: 1,
      AnswerId: 104950,
      Answers: [
        { Id: 104949, Text: "junit object" },
        { Id: 104950, Text: "Shadow object" },
        { Id: 104951, Text: "hidden object" },
        { Id: 104952, Text: "android object" },
      ],
    },
    {
      Id: 25322,
      Text: "Lệnh nào dùng để tạo Activity MyActivity, sau đó khởi tạo Activty, cuối cùng sẽ trả lại một đối tượng Activity?",
      Marks: 1,
      AnswerId: 104954,
      Answers: [
        {
          Id: 104953,
          Text: "Robolectric.buildActivity(MyActivity.class).onCreate().start().get()",
        },
        {
          Id: 104954,
          Text: "Robolectric.buildActivity(MyActivity.class).create().start().get()",
        },
        {
          Id: 104955,
          Text: "Robolectric.createActivity(MyActivity.class).create().start().get()",
        },
        {
          Id: 104956,
          Text: "Robolectric.buildActivity(MyActivity).create().start().get()",
        },
      ],
    },
    {
      Id: 25323,
      Text: "Trong roboguide, để khai báo một resource có id là app_desc, phải sử dụng lệnh nào?",
      Marks: 1,
      AnswerId: 104957,
      Answers: [
        { Id: 104957, Text: "@InjectResources(R.id.app_desc) String app_mota" },
        { Id: 104958, Text: "@InjectView(R.id.app_desc) String app_mota" },
        { Id: 104959, Text: "@InjectResource(R.id.editText1) String app_mota" },
        { Id: 104960, Text: "@InjectView(app_desc) String app_mota" },
      ],
    },
    {
      Id: 25324,
      Text: "RoboGuide có thể sử dụng với framework kiểm thử nào?",
      Marks: 1,
      AnswerId: 104962,
      Answers: [
        { Id: 104961, Text: "Mockito" },
        { Id: 104962, Text: "Robolectric" },
        { Id: 104963, Text: "Robotium" },
        { Id: 104964, Text: "Android testing framework" },
      ],
    },
    {
      Id: 25325,
      Text: "Trong Robolectric từ version 2.2, lớp nào hỗ trợ quản lý vòng đời Activity giống với Android SDK?",
      Marks: 1,
      AnswerId: 104965,
      Answers: [
        { Id: 104965, Text: "Activities" },
        { Id: 104966, Text: "ActivityControlling" },
        { Id: 104967, Text: "ActivityController" },
        { Id: 104968, Text: "Actiivty" },
      ],
    },
    {
      Id: 25326,
      Text: "Câu nào là đúng đối với việc quản lý tài nguyên trong Robolectric?",
      Marks: 1,
      AnswerId: 104971,
      Answers: [
        {
          Id: 104969,
          Text: "Chỉ cho phép thay đổi cách tài nguyên được nạp dựa trên yếu tố thiết bị",
        },
        {
          Id: 104970,
          Text: "Chỉ cho phép thay đổi cách tài nguyên được nạp dựa trên các yếu tố thiết bị, cỡ màn hình",
        },
        {
          Id: 104971,
          Text: "Cho phép thay đổi cách tài nguyên được nạp dựa trên các yếu tố thiết bị, cỡ màn hình,ngôn ngữ",
        },
        { Id: 104972, Text: "Không cho phép thay đổi tài nguyên" },
      ],
    },
    {
      Id: 25327,
      Text: "Để xác định tài nguyên cho phương thức kiểm thử cụ thể, phải sử dụng từ khóa nào trước phương thức đó?",
      Marks: 1,
      AnswerId: 104974,
      Answers: [
        { Id: 104973, Text: "@Configurtor" },
        { Id: 104974, Text: "@Config" },
        { Id: 104975, Text: "@Configs" },
        { Id: 104976, Text: "@Configuration" },
      ],
    },
    {
      Id: 25328,
      Text: "Để xác định tài nguyên cho cả phương thức cụ thể, phải dùng từ khóa @Config ở đâu?",
      Marks: 1,
      AnswerId: 104978,
      Answers: [
        { Id: 104977, Text: "Trong file resource" },
        { Id: 104978, Text: "Trong từng test case" },
        { Id: 104979, Text: "Trong file values.xml" },
        { Id: 104980, Text: "Trong file test" },
      ],
    },
    {
      Id: 25329,
      Text: "Trong Robolectric từ version 2.2, phương thức nào được sử dụng để quản lý Activity?",
      Marks: 1,
      AnswerId: 104982,
      Answers: [
        { Id: 104981, Text: "Robolectric.onCreateAcitivity" },
        { Id: 104982, Text: "Robolectric.buildActivity" },
        { Id: 104983, Text: "Robolectric.startActivity" },
        { Id: 104984, Text: "Robolectric.createActivity" },
      ],
    },
    {
      Id: 25330,
      Text: "Trong roboguide, để khai báo một EditText có id là editText1, phải sử dụng lệnh nào?",
      Marks: 1,
      AnswerId: 104988,
      Answers: [
        { Id: 104985, Text: "@InjectView(editText1) EditText name" },
        { Id: 104986, Text: "@InjectResource(R.id.editText1) EditText name" },
        { Id: 104987, Text: "@Inject(R.id.editText1) EditText name" },
        { Id: 104988, Text: "@InjectView(R.id.editText1) EditText name" },
      ],
    },
    {
      Id: 25331,
      Text: "Roboguice không thể chạy trên IDE nào?",
      Marks: 1,
      AnswerId: 104989,
      Answers: [
        { Id: 104989, Text: "Net Bean" },
        { Id: 104990, Text: "Android Studio" },
        { Id: 104991, Text: "IntelliJ" },
        { Id: 104992, Text: "Eclipse" },
      ],
    },
    {
      Id: 25332,
      Text: "Thực thể key.store được lưu trữ ở đâu?",
      Marks: 1,
      AnswerId: 104996,
      Answers: [
        { Id: 104993, Text: "ant.prop" },
        { Id: 104994, Text: "apk.properties" },
        { Id: 104995, Text: "apk.prop" },
        { Id: 104996, Text: "ant.properties" },
      ],
    },
    {
      Id: 25333,
      Text: "Khi kiểm tra và cập nhật file manifest trước khi phát hành, ta cần kiểm tra các thành phần nào?",
      Marks: 1,
      AnswerId: 105000,
      Answers: [
        { Id: 104997, Text: ", android:CodeLabel, android:versionName" },
        { Id: 104998, Text: ", android:versionCode, android:versionLabel" },
        { Id: 104999, Text: ", android:labelCode, android:versionName" },
        { Id: 105000, Text: ", android:versionCode, android:versionName" },
      ],
    },
    {
      Id: 25334,
      Text: "Để xóa các tài nguyên không cần thiết khỏi ứng dụng, ta cần vào các thư mục nào?",
      Marks: 1,
      AnswerId: 105001,
      Answers: [
        { Id: 105001, Text: "jni/, lib/, và src/" },
        { Id: 105002, Text: "jni/, lib/, src/ và code/" },
        { Id: 105003, Text: "jni/, lib/, src/, code/ và img/" },
        { Id: 105004, Text: "code/ và img/" },
      ],
    },
    {
      Id: 25335,
      Text: "Google Play là gì?",
      Marks: 1,
      AnswerId: 105005,
      Answers: [
        { Id: 105005, Text: "Chợ ứng dụng android" },
        { Id: 105006, Text: "Thư viện android" },
        { Id: 105007, Text: "Chợ phần cứng mobile" },
        { Id: 105008, Text: "Thư viện .net" },
      ],
    },
    {
      Id: 25336,
      Text: "Để ứng dụng có thể phát hành, bạn cần làm gì?",
      Marks: 1,
      AnswerId: 105010,
      Answers: [
        {
          Id: 105009,
          Text: "Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói jdk",
        },
        {
          Id: 105010,
          Text: "Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk",
        },
        {
          Id: 105011,
          Text: "Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk và gói jdk",
        },
        {
          Id: 105012,
          Text: "Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk, gói jar và gói jdk",
        },
      ],
    },
    {
      Id: 25337,
      Text: "Để xây dựng ứng dụng phát hành bằng dòng lệnh, ta dùng lệnh nào?",
      Marks: 1,
      AnswerId: 105013,
      Answers: [
        { Id: 105013, Text: "ant release" },
        { Id: 105014, Text: "ant debug" },
        { Id: 105015, Text: "apk debug" },
        { Id: 105016, Text: "apk release" },
      ],
    },
    {
      Id: 25338,
      Text: "Lệnh adb dùng để làm gì?",
      Marks: 1,
      AnswerId: 105018,
      Answers: [
        { Id: 105017, Text: "Cài đặt file jdk" },
        { Id: 105018, Text: "Cài đặt file apk" },
        { Id: 105019, Text: "Ẩn file apk" },
        { Id: 105020, Text: "Ẩn file jdk" },
      ],
    },
    {
      Id: 25339,
      Text: "Để chạy ứng dụng trên thiết bị thật, chúng ta cần làm gì?",
      Marks: 1,
      AnswerId: 105021,
      Answers: [
        { Id: 105021, Text: "Enable USB debugging" },
        { Id: 105022, Text: "Disable USB debugging" },
        { Id: 105023, Text: "Enable Apache debugging" },
        { Id: 105024, Text: "Enable USB debuger" },
      ],
    },
    {
      Id: 25340,
      Text: "Lệnh jarsigner dùng để làm gì?",
      Marks: 1,
      AnswerId: 105028,
      Answers: [
        { Id: 105025, Text: "Xóa ứng dụng" },
        { Id: 105026, Text: "Đăng nhập ứng dụng" },
        { Id: 105027, Text: "Đăng xuất ứng dụng" },
        { Id: 105028, Text: "Đăng ký ứng dụng với khóa riêng" },
      ],
    },
    {
      Id: 25341,
      Text: "Tham số validity của keytool có ý nghĩa gì?",
      Marks: 1,
      AnswerId: 105029,
      Answers: [
        { Id: 105029, Text: "Thời gian hiệu lực" },
        { Id: 105030, Text: "Thời gian upload ứng dụng" },
        { Id: 105031, Text: "Thuật toán mã hóa" },
        { Id: 105032, Text: "Bí danh ứng dụng" },
      ],
    },
  ];
});
