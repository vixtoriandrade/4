let ScoreList = document.getElementById('ScoreList');
let highScores = JSON.parse(localStorage.getItem("highScores")) ||[];

highScores.forEach(scoreObj => {
    let li = document.createElement("li");
    li.textContent = scoreObj.score + ".............................................." + scoreObj.user;
    ScoreList.appendChild(li);
});