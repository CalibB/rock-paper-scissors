let decision;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let userSect = playerSelection.toLowerCase();

    if (userSect == computerSelection) {
        decision = "";
        alert(`***Computer's answer: ${computerSelection}***`);
        alert(`***Your answer: ${userSect}***`);
        alert(`It's a tie! No winners. `);
        return decision;
    } else if (userSect == 'rock' && computerSelection == 'paper') {
        decision = 'computer';
        alert(`***Computer's answer: ${computerSelection}***`);
        alert(`***Your answer: ${userSect}***`);
        alert('Paper swallows rock! You lose, computer is the victor!');
        return decision;
    } else if (userSect == 'rock' && computerSelection == 'scissors') {
        decision = 'user';
        alert(`***Computer's answer: ${computerSelection}***`);
        alert(`***Your answer: ${userSect}***`);
        alert('Rock beats scissors! You win, computer is the loser!');
        return decision;
    } else if (userSect == 'paper' && computerSelection == 'rock') {
        decision = 'user';
        alert(`***Computer's answer: ${computerSelection}***`);
        alert(`***Your answer: ${userSect}***`);
        alert('Paper swallows rock! You win, computer is the loser!');
        return decision;
    } else if (userSect == 'paper' && computerSelection == 'scissors') {
        decision = 'computer';
        alert(`***Computer's answer: ${computerSelection}***`);
        alert(`***Your answer: ${userSect}***`);
        alert('Scissors cut paper! You lose, computer is the victor!');
        return decision;
    } else if (userSect == 'scissors' && computerSelection == 'rock') {
        decision = 'computer';
        alert(`***Computer's answer: ${computerSelection}***`);
        alert(`***Your answer: ${userSect}***`);
        alert('Rock smashes scissors! You lose, computer is the victor!');
        return decision;
    } else if (userSect == 'scissors' && computerSelection == 'paper') {
        decision = 'user';
        alert(`***Computer's answer: ${computerSelection}***`);
        alert(`***Your answer: ${userSect}***`);
        alert('Scissors cuts paper! You win, computer is the loser!');
        return decision;
    } else {
        decision = null;
        alert('Oops!! It seems you entered an incorrect value! Please try again.');
    };
};

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
        playRound(humanChoice, computerChoice);
        let roundResult = decision;

        if (roundResult == 'computer') {
            scoreResults[0] = ++scoreResults[0];
            console.log(`Computer wins (round ${i})`)
        } else if (roundResult == 'user') {
            scoreResults[1] = ++scoreResults[1];
            console.log(`You win this (round ${i})`);
        } else {
            console.log(`It's a tie. (round ${i})`);
        };
    };

    return scoreResults;
}

const greeting = document.querySelector('.greeting');
const greetingBtn = document.querySelector('.greeting-yes__btn');
const greetingBtn2 = document.querySelector('.greeting-no__btn');
const gameDiv = document.querySelector('.main__selection')

greetingBtn.addEventListener('click', () => {
    greeting.style.display = "none";
    gameDiv.style.display = "block";
});

greetingBtn2.addEventListener('click', () => alert("Get outta here then!"));

const rockBtn = document.querySelector(".rock__btn");
const paperBtn = document.querySelector(".paper__btn");
const scissorsBtn = document.querySelector(".scissors__btn");

let humanChoice = '';

rockBtn.addEventListener('click', () => humanChoice = "rock")
paperBtn.addEventListener('click', () => humanChoice = "paper");
scissorsBtn.addEventListener('click', () => humanChoice = "scissors");
