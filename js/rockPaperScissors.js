const computerChoice = getComputerChoice();
const userChoice = prompt("Rock, paper or scissors?", "");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}
