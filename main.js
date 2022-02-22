var mybutton = document.querySelector(".backTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
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

// countdown cr:stackoverflow:))
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  const myTimer = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds || "00:00";

    if (--timer < 0) {
      timer = duration;
    }

    if (display.textContent == "00:00") {
      alert("Hết giờ");
      clearInterval(myTimer);
    }
  }, 1000);
}

window.onload = function() {
  let fifteenMinutes = 60 * 15,
   display = document.querySelector("#mytime");
  startTimer(fifteenMinutes, display);
};

