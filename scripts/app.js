// Start button
// Someone thinks of a word and we keep it secret from the other players
// We will display a series of underscores depending on the length of the word
// Each turn, the player will guess one letter from the word 
// If guess if correct, we will display the letter(s) in the length of the word
// If incorrect, we draw a piece of the hangman OR tell the user they have x amount of guesses
// Add incorrect guess to a div.
// Replay button

// We'll be using ids for: start button, replay button, secret word, wrong guesses, hangman, user guesses/inputs

// ID section

let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");
let secretWord = document.getElementById("secretWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let hangMan = document.getElementById("hangMan");
let userInput = document.getElementById("userInput");

// Variables
// randomword will be for our API call
// wrongGuess will be user's incorrect input
// displayedWord will be for their correct input
let randomWord = "";
let wrongGuess = "";
let displayedWord = [];
let guesses = 0;
let maxGuesses = 5;

startBtn.addEventListener('click', function(e){
    // We will call our API function
    ApiCall();
});

function ApiCall(){
    // initiate the fetch request from out random word api
    fetch('https://random-word-api.herokuapp.com/word')
        .then((response) => {
            return response.json();
    })
        .then((data) => {
            console.log(data[0]);
            StartGame(data[0]);
    })
}

function StartGame(word){
    randomWord = word;
    // now we have to change our displayed to have _ for the length of our random word

    for(let i = 0; i < randomWord.length; i++){
        displayedWord[i] = "_";
    }
    // We will update our "game state"
    UpdateGameState();
}

function UpdateGameState(){
    secretWord.textContent = displayedWord.join(" ");
    hangMan.textContent = `Guesses left ${guesses} / ${maxGuesses}`;
}