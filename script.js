/* Declaring all the variables needed later in the program*/

let playerScore = 0, computerScore = 0, rounds = 3; 

/*This part sets up how many rounds there will be as well as 
resets the score. Default number is BO3.*/

function r3() {
    rounds = 3;
    playerScore = 0, computerScore =0;
    console.log("Yay, 3 rounds." + playerScore + " " + computerScore);
    document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);
    document.getElementById("scoreTitle").innerHTML = "Best of 3"
    return;
}

function r5() {
    rounds = 5;
    playerScore = 0, computerScore =0;
    console.log("Yay, 5 rounds." + playerScore + " " + computerScore);
    document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);
    document.getElementById("scoreTitle").innerHTML = "Best of 5";
    return;
}

function r7() {
    rounds = 7;
    playerScore = 0, computerScore =0;
    console.log("Yay, 7 rounds." + rounds);
    document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);
    document.getElementById("scoreTitle").innerHTML = "Best of 7"
    return;
}

//This probably should just be hardcoded in HTML

document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);

// random number generator to return the computer's move when called
function getCompInput(){
    var temp = Math.ceil(Math.random()*3);
    console.log(temp);
    if (temp === 1) return "rock";
    else if (temp === 2) return "paper";
    else return "scissors";
}


//returns whether the player won or lost, takes the arguments from the main function

function compare(playerInput, computerInput){
    if (playerInput === computerInput) return "tie";

    if (playerInput === "rock" && computerInput === "paper") return "loss";
    else if (playerInput === "rock" && computerInput === "scissors") return "win";
    
    if (playerInput === "scissors" && computerInput === "rock") return "loss";
    else if (playerInput === "scissors" && computerInput === "paper") return "win";

    if (playerInput === "paper" && computerInput === "scissors") return "loss"
    else if (playerInput === "paper" && computerInput === "rock") return "win"
}

/* This is the main function of the game - It triggers on click whenever the player picks rock paper or scissors
HTML passes an argument of input depending on which button is clicked, then this function calls the RNG function to get
the computer input, which is used to run the compare function to determain the winner */

function game(input){
    
    computerInput = getCompInput();
    if (compare(input, computerInput) == "win"){
        playerScore++;
        document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);
        document.getElementById("roundWinner").innerHTML = ("You choose " + input + ", and the opponent choose " + computerInput + ". You win!");
    }
    else if(compare(input, computerInput) == "loss"){
        computerScore++;
        document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);
        document.getElementById("roundWinner").innerHTML = ("You choose " + input + ", and the opponent choose " + computerInput + ". You lose.");
    }
    else if(compare(input, computerInput) == "tie"){
        document.getElementById("roundWinner").innerHTML = ("Both you and computer choose " + input + ", it's a tie!");
        return;
    }

    if(rounds == 3 && playerScore >= 2 || rounds == 5 && playerScore >= 3 || rounds == 7 && playerScore >=4) {
        alert("You won!\nPress one of the round buttons to restart the game!");
        return;
    }
    else if (rounds == 3 && computerScore >= 2 || rounds == 5 && computerScore >= 3 || rounds == 7 && computerScore >=4){
        alert("You lost :(\nPress one of the round buttons to restart the game!");
        return;
    }

}



