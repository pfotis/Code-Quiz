var highscoresListElement = document.getElementById("highscoresList");
var cleanHistoryElement = document.getElementById("cleanHistory");

var user = new Array;
var score = new Array;

// restore all prev highscores and inital from the local storage
function open() {
    var storedUser = JSON.parse(localStorage.getItem("user"));
    var storedScore = JSON.parse(localStorage.getItem("score"));
    if (storedUser !== null && storedScore !== null) {
      user = storedUser;
      score = storedScore ;
    }
    for(var i=0; i<user.length; i++){
      console.log("print user + score : "+ user[i] + "   " + score[i]);
    }
  }

function scoreBoard() {
    //highscoresListElement.innerHTML = "";
    for (var i = 0; i < user.length; i++) {
        var li = document.createElement("li");
        var text = ((i+1)+". "+user[i].toUpperCase()+"  -  "+score[i]); 
        li.textContent = text;
        highscoresListElement.appendChild(li);
    }
  }
function myFunction() {
    location.replace("./index.html")
}

function deleteItems() {
    localStorage.clear();
}

open();
scoreBoard();
