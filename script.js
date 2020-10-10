/* Declaring all the variables needed later in the program*/

let playerScore = 0, computerScore = 0, rounds = 3; 

/*This part sets up how many rounds there will be as well as 
resets the score. Default number is BO3*/

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

//This initially displays the score

document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);

// random number generator to decide the computer's move
function getCompInput(){
    var temp = Math.ceil(Math.random()*3);
    console.log(temp);
    if (temp === 1) return "rock";
    else if (temp === 2) return "paper";
    else return "scissors";
}


//retturns weather the player won or lost

function compare(playerInput, computerInput){
    if (playerInput === computerInput) return "tie";

    if (playerInput === "rock" && computerInput === "paper") return "loss";
    else if (playerInput === "rock" && computerInput === "scissors") return "win";
    
    if (playerInput === "scissors" && computerInput === "rock") return "loss";
    else if (playerInput === "scissors" && computerInput === "paper") return "win";

    if (playerInput === "paper" && computerInput === "scissors") return "loss"
    else if (playerInput === "paper" && computerInput === "rock") return "win"
}

function game(input){
    
    if (compare(input, getCompInput()) == "win"){
        playerScore++;
        document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);
        
    }
    else if(compare(input, getCompInput()) == "loss"){
        computerScore++;
        document.getElementById("scoreDisplay").innerHTML = (playerScore + " - " + computerScore);
        
    }
    else if(compare(input, getCompInput()) == "tie"){
        
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



