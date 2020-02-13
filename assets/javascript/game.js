// variables

// Store the user's guess
let userGuess = 0;

// Keep track of guesses
let guesses = [ ];

// Keep track of the correct guesses
let correctguesses = [ ];

// Keep track of number of wins
let win = 0;

// To keep track of guesses avaliable, undefined right now, See if this is a fixed value or if it changes depending on the word
let guessCount;

// Keep track of loss
let loss = 0;

// Array of the possible options that are acceptable guesses
const abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Array of possible words

//Set up for what will happen when a key is pressed
document.onkeyup = function(event){
    userGuess = event.key;
    userGuess = userGuess.toLowerCase();

    if(userGuess != 0){

        // Check to see that the userGuess is valid. If it isn't, then an alert will ask for a letter
        if (abc.includes(userGuess){

            if(guesses.includes(userGuess)){
                alert('Already guessed');
            }

        })

        else {
            alert('Enter a letter');
        }

        // If the guessCount get to zero, then the game is over, the guesses are erased, guessCount is reset and a new word is generated. Game starts over
        if (guessCount === 0) {
            loss++;
            guessCount = 10; //Or whatever it is suppoed to be...
            guesses = [ ];

            alert("Sorry, you didn't guess the word.");
        }

    }
}

// below, this will add the number of guesses left to the HTML page
// document.getElementById("guessesLeft").innerText = guessCount;


// below, this will add the number of losses to the HTML page
// document.getElementById("loss").innerText = loss;


/*  Word guess game
key events to listen for letter the player guesses -> same as the previous one. 

make an array for the words the computer can choose from, random choice will be picked from the array, that word will be saved in a variable and then split up into single variables. 

Set up a visual that shows how many letters are in the word, when word is guessed correctly, the letter will be shown.

Check to see if userGuess is in the word
if yes, then get another guess, will display where they letter was correct, if no then the guesses count will go down by one. if userGuess is in word multiple times, take note. 

if the word is 'madonna' display it like:
_ _ _ _ _ _ _ when the game starts and fill it in as the game progresses
'm a d o _ _ a'

-- extra --

Play a sound or song when the user guesses the word
Design to match the game, set a game theme
Make game code an object.
Save game and its properties in an object
Save game functions as methods, call them under object declaration using event listeners

-- Add homeworks to portfolio with linkes to the github pages

*/