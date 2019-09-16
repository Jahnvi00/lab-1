const validOptions = ['rock', 'paper', 'scissors'];

let playerOption = null;

let computerOption = null;

let playerScore = {

  wins: 0,

  loses: 0,

  ties: 0

};

const chooseButton = document.querySelector('button#jahnvi');



chooseButton.addEventListener('click', function(event) {

  playerOption = getPlayer();

  computerIndex = randomInt(0, 2); 

  computerOption = validOptions[computerIndex];



  

  document.querySelector(

    '#player'

  ).innerHTML = `You choose: ${playerOption}`;



 
  document.querySelector(

    '#computer'

  ).innerHTML = `Computer : ${computerOption}`;



  findWinnerOfGame();

});



function findWinnerOfGame() {

  let result = 'Computer wins, try again!';

  if (playerOption === computerOption) {

    result = 'You both tied, play well';

    playerScore.ties += 1;

  } else if (

    (playerOption === 'rock' && computerOption === 'scissors') ||

    (playerOption === 'scissors' && computerOption === 'paper') ||

    (playerOption === 'paper' && computerOption === 'rock')

  ) {

    result = 'you wins, great job!';

    playerScore.wins += 1;

  } else {

    playerScore.loses += 1;

  }



  updateScore();

  document.querySelector('#result').innerHTML = result;

}



function updateScore() {

  const { wins, loses, ties } = playerScore;

  document.querySelector(

    '#score'

  ).innerHTML = `Wins: ${wins} - Loses: ${loses} - Ties: ${ties}`;

}



function getPlayer() {

  const nodelist = document.querySelectorAll('input[name="option"]');

  const elements = Array.from(nodelist);

  const selectedOption = elements.find(({ checked = false }) => checked);

  return selectedOption.value;

}



function randomInt(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);

}
