let decision;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let userSect = playerSelection.toLowerCase();

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

function game() {
    let maxRounds = 5;
    let computerScore = 0;
    let userScore = 0;

    for (let i = 0; i < maxRounds; i++) {
        let computerChoice = getComputerChoice();
        let userChoice = prompt("Rock, paper or scissors?", "");
        playRound(userChoice, computerChoice);
        let roundResult = decision;

        if (roundResult.includes('computer is the victor!')) {
            computerScore = ++computerScore;
            console.log('Computer wins this round.')
        } else if (roundResult.includes('You win')) {
            userScore = ++userScore;
            console.log('You win this round');
        } else {
            console.log("It's a tie")
        };
    };

    if (computerScore == userScore) {
        console.log('Nobody wins, try again!')
    } else if (computerScore > userScore) {
        console.log('Computer wins the game!')
    } else {
        console.log('You win the game!');
    };
};
