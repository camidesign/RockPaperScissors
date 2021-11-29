/* Rock, Paper, or Scissors

Classic rock paper scissors two player game. 

Possible results are:

- Rock destroys scissors
- Scissors cut paper
- Paper covers rock
- If there’s a tie, then the game ends in a draw
- Cheat: if user types 'bomb' they will win regardless of what computer chooses
*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if  (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
     return userInput;
    } else { 
      console.log('Error, please type: rock, paper or scissors.');
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'Congratulations, you won!'
    }
    if (userChoice === computerChoice) {
      return 'This game is a tie!'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!'
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!';
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice)
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()
  
  