let question = document.getElementById("question");
// create array of choices
let choices = Array.from(document.getElementsByClassName("textChoice"));

let currentQuestion= {};
let accept = true;
let score = 0;
let count = 0;
let timerEl = document.querySelector('.timer');
let feedback = 'correct';

//create an array of question objects
let questions = [
    {
        question: "Commonly used data types do NOT include:",
        choice1:"Alerts",
        choice2:"Booleans",
        choice3:"Numbers",
        choice4:"Strings",
        answer: "1"
    },
    {
        question: "The condition of an if/else statement is enclosed by:",
        choice1:"Quotes",
        choice2:"Curly Brackets",
        choice3:"Brackes",
        choice4:"Parentheses",
        answer: "4"
    },
    {
        question: "Which of the following commands prints output to the console?",
        choice1:"print()",
        choice2:"Console.log()",
        choice3:"Console.print()",
        choice4:"return()",
        answer: "2"
    },
    {
        question: "How would you declare css colors so you can easily refrence and change them throughout code",
        choice1:"var(--colorName) =",
        choice2:"let colorName = ",
        choice3:"--colorName:",
        choice4:"#colorHexNumber",
        answer: "3"
    },
    {
        question: "How do you comment out code in JavaScript?",
        choice1:"//",
        choice2:"/* */",
        choice3:"<-- -->",
        choice4:"**",
        answer: "1"
    }
];

let totalTime = questions.length*10;

function game(){
    setTime();
    count =0;
    score=0;
    newQuestion();
}

//create timer function
function setTime() {
    var timerInterval = setInterval(function() {
        totalTime--;
        timerEl.textContent = "Time Left: " + totalTime;
        if(totalTime === 0) {
            clearInterval(timerInterval);
            return window.location.assign("./endgame.html");
        }
    }, 1000)
}

function newQuestion() {
    // Check counter to ensure dont run out of questions
    if(count >= questions.length){
        //save score and jump to end of game
       
        return window.location.assign("./endgame.html");
    }
    
    //select next question and populate in the correct HTML location
    currentQuestion = questions[count];
    question.innerText = currentQuestion.question;
    count++;

// populate all the choices into the webpage
    choices.forEach(function(choice){
        let dataNumber = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + dataNumber];  
    });

}

//listen to and log answer choice
choices.forEach(function(choice){
        choice.addEventListener("click", function(event){
        let userChoice = event.target
        let selectedAnswer = userChoice.dataset['number'];

        //if statement to change apperance based on correct incorect... and track score
        if (selectedAnswer == currentQuestion.answer){
            userChoice.setAttribute("style", "background-color: var(--pale); font-weight: bolder; color: #32a852");
            score += 10;
        }
        else{
            userChoice.setAttribute("style", "background-color: var(--pale); font-weight: bolder; color: #c91916");
            //remove time from timer!!!!
        }
        localStorage.setItem('lastScore', score);
        //remove correct/incorrect symbology before moving on
        setTimeout(function(){
            userChoice.setAttribute("style", "background-color: var(--light); font-weight: normal; color: var(--dark)");
            newQuestion();
        }, 1000);



        });
    });

game();