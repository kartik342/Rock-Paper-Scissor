let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice img");
const result_ref = document.querySelector("#result");

function genCompChoice(){
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function showDraw(){
    result_ref.style.cssText = "background-color: #cec9c9ff; color: #808080";
    result_ref.innerHTML = "DRAW";
}

function showWinner(userWin){
    const result = userWin ? "win" : "lose";
    switch(result){
        case 'win':
            result_ref.style.cssText = "background-color:rgb(160, 241, 160); color:rgb(55, 110, 7)";
            result_ref.innerHTML = "YOU WIN";
            userScore++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            compScore++;
            break;
        default:
            break;
    }
}

function playGame(userChoice){
    const compChoice = genCompChoice();
    console.log(typeof(compChoice));
    console.log(typeof(userChoice));

    document.getElementById("comp-choice").innerHTML = 
    ` Computer choose <strong>${compChoice.toUpperCase()}</strong>`;
    document.getElementById("user-choice").innerHTML = 
    ` You choose <strong>${userChoice.toUpperCase()}</strong>`;

    // checking winner

    if(compChoice === userChoice){
        showDraw();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true; 
        }
        else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        document.getElementById("comp-score").innerHTML = `<strong>${compScore}</strong>`;
        document.getElementById("user-score").innerHTML = `<strong>${userScore}</strong>`;
    })
})

