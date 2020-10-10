/* Declaring all the variables needed later in the program*/

let playerScore = 0, computerScore = 0, rounds = 3; 

/*This part sets up how many rounds there will be as well as 
resets the score*/

function r3() {
    rounds = 3;
    playerScore = 0, computerScore =0;
    console.log("Yay, 3 rounds." + playerScore + " " + computerScore);
    return;
}

function r5() {
    rounds = 5;
    playerScore = 0, computerScore =0;
    console.log("Yay, 5 rounds." + playerScore + " " + computerScore);
    return;
}

function r7() {
    rounds = 7;
    playerScore = 0, computerScore =0;
    console.log("Yay, 7 rounds." + rounds);
    return;
}

document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);

function match(rounds){
    
}

function compare(playerInput, computerInput){
    if (playerInput === computerInput) return "tie";

    if (playerInput === "rock" && computerInput === "paper") return "loss";
    else if (playerInput === "rock" && computerInput === "scissors") return "win";
    
    if (playerInput === "scissors" && computerInput === "rock") return "loss";
    else if (playerInput === "scissors" && computerInput === "paper") return "win";

    if (playerInput === "paper" && computerInput === "scissors") return "loss"
    else if (playerInput === "paper" && computerInput === "rock") return "win"
}



