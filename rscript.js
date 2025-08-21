let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];

};
const drawgame = () => {
    console.log("Game Draw between you and computer...");
    msg.innerText = "game draw";
};

const showwinner =(userwin, userChoice, compChoice)=>{
    if (userwin){
        // console.log();
        msg.innerText = `you win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
        
    }else {
        // console.log();
        msg.innerText = `you lose ${compChoice} beats ${userChoice}}`;
        msg.style.backgroundColor = "red";
        compScore++;
        document.querySelector("#comp-score").innerText = compScore;
    }
};

const playgame = (userChoice) => {
    // console.log("user's choice was:", userChoice);
    
    const compChoice = gencompchoice();
    // console.log("Comp's choice was:", compChoice);

    if (userChoice === compChoice){
        drawgame();
    }else{
        let userwin = true;
        if (userChoice == "rock"){
            userwin = compChoice == "paper"? false:true;
        }else if (userChoice == "paper"){
            userwin = compChoice == "scissors"? false:true;
        }else if(userChoice == "scissors"){
            userwin = compChoice == "rock"? false:true;
        }
        showwinner(userwin, userChoice, compChoice);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playgame(userChoice);
        
    })
});