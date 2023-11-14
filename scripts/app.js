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