var timeElement = document.querySelector("#time");
var headerElement = document.querySelector("#header");
var questionElement = document.querySelector("#question");
var textElement = document.querySelector("#text");
var listElement = document.getElementById("list");
var StartBtn = document.getElementById("startButton");
var resultElemant = document.querySelector("#prevResult");
var submitElement = document.getElementById("submit");
var highscoresListElement = document.getElementById("highscoresList");


localStorage.countQuestion = 0;

var user = new Array;
var score = new Array;

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
  localStorage.secondsLeft= 75;
  var timerInterval = setInterval(function() {
    timeElement.textContent = "Time : " + localStorage.secondsLeft;
    if(localStorage.countQuestion != questions.length)
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
  open();
  countDown();
  textElement.innerHTML = "";
  headerElement.innerHTML = "";
  StartBtn.innerHTML = "";
  printQuestion(localStorage.countQuestion); 
}

function open() {
  
  var storedUser = JSON.parse(localStorage.getItem("user"));
  var storedScore = JSON.parse(localStorage.getItem("score"));

  if (storedUser !== null && storedScore !== null) {
    user = storedUser;
    score = storedScore ;
  }
}

function save() {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("score", JSON.stringify(score));
}

StartBtn.addEventListener("click", startQuiz);

listElement.addEventListener("click", function(event) {
  var element = event.target;
  var result = "";
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    if(questions[localStorage.countQuestion].choices[index] == questions[localStorage.countQuestion].answer){
      result = "Correct !";
      console.log(result);
    }
    else{
      result = "Wrong !";
      localStorage.secondsLeft = localStorage.secondsLeft - 10;
      console.log(result);
    }
    for(var j=0; j<questions[localStorage.countQuestion].choices.length; j++)
      listElement.removeChild(list.childNodes[0]);
      localStorage.countQuestion++;
    if(localStorage.countQuestion != questions.length){
      printQuestion( localStorage.countQuestion);
    }
    else{
      questionElement.textContent = "All done !";
      textElement.innerHTML = "Your final score is : " + localStorage.secondsLeft;
      var label = document.createElement("label");
      var input = document.createElement("input");
      input.type = "text";
      var button = document.createElement("button");
      submitElement.textContent = "Enter initials: ";
      button.innerHTML= "Submit";
      submitElement.appendChild(label);
      submitElement.appendChild(input);
      submitElement.appendChild(button);
      input.setAttribute("class", "inputClass");
      var inputElement =document.querySelector(".inputClass");
      console.log('input element = ' + inputElement);
      submitElement.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("button") === true) {
          var userInput = inputElement.value;
          var scoreInput = localStorage.secondsLeft;
          console.log(userInput);
          console.log(scoreInput);
        }
        if(userInput != null){
          user.push(userInput);        
          score.push(scoreInput);
          inputElement.value = "";
          save();
        }
      });
    }
  }
});





