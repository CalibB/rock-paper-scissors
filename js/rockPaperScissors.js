let decision;
let round = 0;

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

function getScores() {

    if (decision == 'computer') {
        ++computerScore;
    } else if (decision == 'user') {
        ++humanScore;
    }
}

function game() {

    if (computerScore === 5) {
        alert("Computer has won the game!")
    } else if (humanScore === 5) {
        alert("You have won the game!")
    };
}

function roundIncrement() {
    return ++round;
}

const greeting = document.querySelector('.greeting');
const greetingBtn = document.querySelector('.greeting-yes__btn');
const greetingBtn2 = document.querySelector('.greeting-no__btn');
const gameDiv = document.querySelector('.main__selection');
const gameInfoDiv = document.querySelector('.game-info');
const gameBeginBtn = document.querySelector('.game-begin__btn');
const roundPara = document.querySelector('.current__round');

greetingBtn.addEventListener('click', () => {
    greeting.style.display = "none";
    gameInfoDiv.style.display = "block";
});

greetingBtn2.addEventListener('click', () => alert("Get outta here then!"));

gameBeginBtn.addEventListener('click', () => {
    gameInfoDiv.style.display = "none";
    gameDiv.style.display = "block";
});

const rockBtn = document.querySelector(".rock__btn");
const paperBtn = document.querySelector(".paper__btn");
const scissorsBtn = document.querySelector(".scissors__btn");
const computerScorePara = document.querySelector(".computer__score");
const humanScorePara = document.querySelector(".your__score");
let computerScore = 0;
let humanScore = 0;


rockBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
    getScores(); 
    computerScorePara.textContent = `Computer score: ${computerScore}`;
    humanScorePara.textContent = `Your score: ${humanScore}`;
    roundIncrement();
    roundPara.textContent = `Current round: ${round}.`;
    game();
})
paperBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
    getScores();
    computerScorePara.textContent = `Computer score: ${computerScore}`;
    humanScorePara.textContent = `Your score: ${humanScore}`;
    roundIncrement();
    roundPara.textContent = `Current round: ${round}.`;
    game();
    
});
scissorsBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
    getScores();
    computerScorePara.textContent = `Computer score: ${computerScore}`;
    humanScorePara.textContent = `Your score: ${humanScore}`;
    roundIncrement();
    roundPara.textContent = `Current round: ${round}.`;
    game();
});
