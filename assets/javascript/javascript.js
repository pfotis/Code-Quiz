var time = document.querySelector("#time");


var secondsLeft = 75;

function countDown() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = "Time : " + secondsLeft;
  }, 1000);
}

countDown();