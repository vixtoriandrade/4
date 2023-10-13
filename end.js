let username = document.getElementById('name');
let submitBtn = document.getElementById('submitBtn');
let fin = document.getElementById('fin');
let lastScore = localStorage.getItem('lastScore');

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
fin.innerText = 'Final Score: ' + lastScore;

// store and add highscores to storage array and then sort and splice array for top scorers
function saveScore(event) {
    event.preventDefault();

    let scoreObj = {
        score: lastScore,
        user: username.value
    }

    highScores.push(scoreObj);

    highScores.sort(function (a,b){
        return b.score - a.score;
    });

    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    console.log(highScores);
}