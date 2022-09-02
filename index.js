var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hey there! Can you tell us your Name? " )
console.log("Welcome! " + userName + " let's play a game 'Do you know Manan?'")
var score = 0;

function qna(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You're Right!");
    score = score + 1;
  } else {
    console.log("You're Wrong!");
  }

  console.log("Your score: " + score);
}

questionOne = {
  question: "Who is Manan's favorite superhero? ",
  answer: "thor",
}

questionTwo = {
  question: "Which is Manan's favorite Movie? ",
  answer: "la la land",
}

questionThree = {
  question: "Which is Manan's favorite food? ",
  answer: "pasta",
}

questionFour = {
  question: "Which is Manan's favorite book? ",
  answer: "atomic habit",
}

questionFive = {
  question: "Which city does Manan live in? ",
  answer: "surat",
}


var quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive]

for (i=0; i < quiz.length; i++){
  var currentq = quiz[i];
  qna(currentq.question, currentq.answer);
}

