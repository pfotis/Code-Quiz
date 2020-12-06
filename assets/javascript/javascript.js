var timeElement = document.querySelector("#time");
var headerElement = document.querySelector("#header");
var questionElement = document.querySelector("#question");
var textElement = document.querySelector("#text");
var listElement = document.getElementById("list");
var StartBtn = document.getElementById("startButton");
var resultElemant = document.querySelector("#prevResult");


localStorage.secondsLeft= 75;
var countQuestion = 0;
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

// set timer
function countDown() {
  var timerInterval = setInterval(function() {
    timeElement.textContent = "Time : " + localStorage.secondsLeft;
    localStorage.secondsLeft--;
  }, 1000);
}

// print the Question to browser
function printQuestion(count){
  questionElement.textContent = questions[count].title;
  for (var j=0; j<questions[count].choices.length; j++){
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = questions[count].choices[j];
    li.setAttribute("data-index", j);
    li.appendChild(button);
    listElement.appendChild(li);
  }
}
function printAnswer(result){
  var printTime = 2;
  var hr = document.createElement("hr");
  var div = document.createElement("div");
  var timerInterval = setInterval(function() {
    printTime--;
    console.log(printTime);
    div.textContent = result;
    resultElemant.appendChild(hr);
    resultElemant.appendChild(div);
    if(printTime == 0) {
      resultElemant.removeChild(list.childNodes[0]);
      resultElemant.removeChild(list.childNodes[0]);
    }

  }, 1000);
}

// Start Quiz disappear the the title , text and start button and coming uo the first question
function startQuiz() {
  textElement.innerHTML = "";
  headerElement.innerHTML = "";
  StartBtn.innerHTML = "";
  countDown();
  printQuestion(countQuestion); 
}



StartBtn.addEventListener("click", startQuiz);
listElement.addEventListener("click", function(event) {
  var element = event.target;
  var result = "";
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    if(questions[countQuestion].choices[index] == questions[countQuestion].answer){
      result = "Correct !";
      console.log(result);
    }
    else{
      result = "Wrong !";
      localStorage.secondsLeft = localStorage.secondsLeft - 10;
      console.log(result);
    }
    for(var j=0; j<questions[countQuestion].choices.length; j++)
      listElement.removeChild(list.childNodes[0]);
    countQuestion++;
    if(countQuestion != questions.length){
      printQuestion(countQuestion);
    }
    else{
      questionElement.textContent = "All done !";
    }
  }
});





