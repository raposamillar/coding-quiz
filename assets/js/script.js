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