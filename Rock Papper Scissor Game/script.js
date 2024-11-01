let userScore = 0
let compScore = 0

const resetBtn = document.querySelector(".resetbtn");
let uScore = document.querySelector(".you0")
let cScore = document.querySelector(".comp0")
let scoreBox = document.querySelector(".innerMsgBox")
let scoreBox2 = document.querySelector(".outerMsgBox")

let choices = document.querySelectorAll(".images")

const randomcompid = () => {
    return Math.floor(Math.random() * 3)
}

const playGame = (computerChoice, getID) => {
    if (computerChoice === getID) {
        console.log("match is draw");
        scoreBox.innerHTML = "Match is Draw";
        scoreBox2.innerHTML=""
    }
    else if (computerChoice === "Rock" && getID === "Paper") {
        console.log(`${getID} beats ${computerChoice}`);
        scoreBox.innerHTML = `${getID} beats ${computerChoice}`;
        scoreBox2.innerHTML = "You Win";
        console.log("You win");
        userScore++;

    }
    else if (computerChoice === "Paper" && getID === "Rock") {
        console.log(`${computerChoice} beats ${getID}`);
        scoreBox.innerHTML = `${computerChoice} beats ${getID}`;
        scoreBox2.innerHTML = "You Loose";
        console.log("You loose");
        compScore++;
    }
    else if (computerChoice === "Rock" && getID === "Scissor") {
        console.log(`${computerChoice} beats ${getID}`);
        scoreBox.innerHTML = `${computerChoice} beats ${getID}`;
        scoreBox2.innerHTML = "You Loose";
        console.log("You loose");
        compScore++;
    }
    else if (computerChoice === "Paper" && getID === "Scissor") {
        console.log(`${getID} beats ${computerChoice}`);
        scoreBox.innerHTML = `${getID} beats ${computerChoice}`;
        scoreBox2.innerHTML = "You Win";
        console.log("You win");
        userScore++;
    }
    else if (computerChoice === "Scissor" && getID === "Rock") {
        console.log(`${getID} beats ${computerChoice}`);
        scoreBox.innerHTML = `${getID} beats ${computerChoice}`;
        scoreBox2.innerHTML = "You Win";
        console.log("You win");
        userScore++;
    }
    else if (computerChoice === "Scissor" && getID === "Paper") {
        console.log(`${computerChoice} beats ${getID}`);
        scoreBox.innerHTML = `${computerChoice} beats ${getID}`;
        scoreBox2.innerHTML = "You Loose";
        console.log("You loose");
        compScore++;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let getID = choice.getAttribute("id")
        console.log(getID);
        if (randomcompid() === 0) {
            computerChoice = "Rock"
            console.log(computerChoice);
        }
        else if (randomcompid() === 1) {
            computerChoice = "Paper"
            console.log(computerChoice);
        }
        else {
            computerChoice = "Scissor"
            console.log(computerChoice);
        }
        playGame(computerChoice, getID)
        uScore.innerHTML = userScore
        cScore.innerHTML = compScore
    })
})

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    uScore.innerHTML = userScore;
    cScore.innerHTML = compScore;
    scoreBox.innerHTML = "";
    scoreBox2.innerHTML = "";
});