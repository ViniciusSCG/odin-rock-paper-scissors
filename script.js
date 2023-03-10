

function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

var playerChoice;



var computerChoice = getComputerChoice();
function playRound(playerChoice, computerChoice){
    if (playerChoice == computerChoice) {
        return("draw");
    }else if(playerChoice == "rock" && computerChoice == "paper"){
        return(`You louse ${computerChoice} beats ${playerChoice}`);
    }else if(playerChoice == "paper" && computerChoice == "scissors"){
        return(`You louse ${computerChoice} beats ${playerChoice}`);
    }else if(playerChoice == "scissors" && computerChoice == "rock"){
        return(`You louse ${computerChoice} beats ${playerChoice}`);
    }else{
        return(`You win! ${playerChoice} beats ${computerChoice}`)
    }
}

function game() {
    for( let i = 0; i <5; i++){
        playerChoice = prompt('Rock, Paper or Scissors ?')
        playerChoice.toLowerCase();
        console.log(playRound(playerChoice.toLowerCase(), computerChoice))
    }
}

console.log(game())
