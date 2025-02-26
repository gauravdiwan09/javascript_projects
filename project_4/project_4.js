let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [] //a list to store previous gases!
let numGuess = 1;

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        Validation(guess); //to validate the guess whether it is empty, nan etc.
    })
}

function Validation(guess){
    if (isNaN(guess)) {
        alert('enter a valid number!')
    }
    else if (guess < 1) {
        alert('enter number should be greater than 1')
    } 
    else if(guess > 100){
        alert('enter number should be lesser than 100')
    }
    else {
        prevGuess.push(guess);
        if (numGuess>10) {
            displayGuess(guess) //just to show that the your guess has reached the mark!
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess) //check and tell whether your guess is lesser or higher?
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
      displayMessage(`Number is TOOO High`);
    }
  }

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}  

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';  // Clears the input field
    userInput.setAttribute('disabled', '');  // Disables the input field
    p.classList.add('button');  // Adds a class "button" to a paragraph element (for styling)
    p.innerHTML = `<h2 id="newGame" type="submit">Start new Game</h2>`;  // Creates a new heading inside the paragraph
    startOver.appendChild(p);  // Adds the paragraph to the "startOver" section (to display the button)
    playGame = false;  // Stops the game
    newGame();  // Calls newGame() to set up the reset functionality
  }
  

function newGame() {
    const newGameButton = document.querySelector('#newGame');  // Selects the "Start New Game" button
    newGameButton.addEventListener('click', function (e) {  // Adds a click event listener
      randomNumber = parseInt(Math.random() * 100 + 1);  // Generates a new random number
      prevGuess = [];  // Resets previous guesses
      numGuess = 1;  // Resets the number of guesses
      guessSlot.innerHTML = '';  // Clears previous guesses displayed on the page
      remaining.innerHTML = `${11 - numGuess} `;  // Resets remaining guesses
      userInput.removeAttribute('disabled');  // Enables the input field again
      startOver.removeChild(p);  // Removes the "Start New Game" button
  
      playGame = true;  // Allows the game to be played again
    });
  }
  