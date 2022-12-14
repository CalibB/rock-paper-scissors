const computerChoice = getComputerChoice();
const userChoice = prompt("Rock, paper or scissors?", "");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let userSect = playerSelection.toLowerCase();
    let decision;

    if (userSect == computerSelection) {
        decision = "It's a tie! You both win!";
        return decision;
    } else if (userSect == 'rock' && computerSelection == 'paper') {
        decision = 'Paper swallows rock! You lose, computer is the victor!';
        return decision;
    } else if (userSect == 'rock' && computerSelection == 'scissors') {
        decision = 'Rock beats scissors! You win, computer is the loser!';
        return decision;
    } else if (userSect == 'paper' && computerSelection == 'rock') {
        decision = 'Paper swallows rock! You win, computer is the loser!';
        return decision;
    } else if (userSect == 'paper' && computerSelection == 'scissors') {
        decision = 'Scissors cut paper! You lose, computer is the victor!';
        return decision;
    } else if (userSect == 'scissors' && computerSelection == 'rock') {
        decision = 'Rock smashes scissors! You lose, computer is the victor!';
        return decision;
    } else if (userSect == 'scissors' && computerSelection == 'paper') {
        decision = 'Scissors cuts paper! You win, computer is the loser!';
        return decision;
    }
} 
