const quizJS = [
    {
        question: "01: Which type of JavaScript language is____?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    },
    {
        question: "02: The 'function' and 'var' are known as:",
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans: "ans1"

    },
    {
        question: "03: Which of the following variables takes precedence over the others if the names are the same?",
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
        ans: "ans2"

    },
    {
        question: "04: In the JavaScript, which one of the following is not considered as an error:",
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of Bracket",
        ans: "ans4"
    }
]

// Step-1: Start -  fetching all inuts
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3"); 
const option4 = document.querySelector("#option4"); 
const submit = document.querySelector("#submit");
const allAnswers = document.querySelectorAll(".answer");
const showScoreboard =  document.querySelector("#showScore");
// Step-1: End

let questionCount = 0;
let score = 0;

// Step-2: Start - Printing all text on screen by calling function
const loadQuestion = () => {
    const questionList = quizJS[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();

        const getCheckedAnswer = () => {
            let answer;

            allAnswers.forEach((CurrentEle) => {
                if(CurrentEle.checked){
                    answer = CurrentEle.id;
                } 
        });
            return answer;            
}

const deselectAll = () => {
    allAnswers.forEach((CurrentEle) => { CurrentEle.checked = false})
}

submit.addEventListener('click', () => {
       const CheckedAnswer = getCheckedAnswer();
        console.log(CheckedAnswer);
        if(CheckedAnswer == quizJS[questionCount].ans){
            score++;
        }
        questionCount++;
        deselectAll();
        if(questionCount<quizJS.length){
            loadQuestion();
        }
        else{
            showScoreboard.innerHTML = `<h3>Your Score is: <span class="got-score">${score}</span> out Of <span class="total-score">${quizJS.length}</span>  <button class="reload-btn" onclick="location.reload()">Play again</button>`;
            showScoreboard.classList.remove("ScoreArea");
        }
});