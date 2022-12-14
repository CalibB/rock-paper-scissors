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
    let scores = getScores();
    let computerScore = scores[0];
    let userScore = scores[1];

    if (computerScore == userScore) {
        console.log("Nobody wins, it's a tie! Try again!")
    } else if (computerScore > userScore) {
        console.log('Computer wins the game!')
    } else {
        console.log('You win the game!');
    };
};

function getScores() {
    let maxRounds = 5;
    let scoreResults = [0, 0];

    for (let i = 0; i < maxRounds; i++) {
        let computerChoice = getComputerChoice();
        let userChoice = prompt("Rock, paper or scissors?", "");
        playRound(userChoice, computerChoice);
        let roundResult = decision;

        if (roundResult.includes('computer is the victor!')) {
            scoreResults[0] = ++scoreResults[0];
            console.log('Computer wins this round.')
        } else if (roundResult.includes('You win')) {
            scoreResults[1] = ++scoreResults[1];
            console.log('You win this round');
        } else {
            console.log("It's a tie")
        };
    };

    return scoreResults;
}
