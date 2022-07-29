// Variable containing the array of questions, choices, and answers
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within __________.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store __________.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
  },
  {
    question: "String values must be enclosed within __________ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var mainEl = document.querySelector("main");

var startQuiz = function(e) {
  if (e.target.matches("#quiz-start")) {
    document.querySelector("#start-frame").remove ();
    
    var sectionEl = document.createElement("section");
    sectionEl.className = "questions";
    sectionEl.setAttribute("id", "question-frame");
    
    var questionTitle = document.createElement("h1");
    questionTitle.textContent = questions[0].question;
    sectionEl.appendChild(questionTitle);
    mainEl.appendChild(sectionEl);
  
    var choicesPossible = document.createElement("ol");

    var choicesPossible = document.createElement("li");
    choicesPossible.textContent = questions[0].choices[0];
    sectionEl.className = "questions";
    sectionEl.setAttribute("id", "choices");
    sectionEl.appendChild(choicesPossible);
    mainEl.appendChild(sectionEl);

    console.log(sectionEl);
    console.log(questionTitle);
    console.log(choicesPossible);

  }
};
mainEl.addEventListener("click", startQuiz)