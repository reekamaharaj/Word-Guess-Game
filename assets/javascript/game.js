// variables

// Store the user's guess
let userGuess;

// Keep track of guesses
let guesses = [ ];

// Keep track of the correct guesses
let correctGuesses = [ ];

// Keep track of number of wins
let win = 0;

// To keep track of guesses avaliable, undefined right now, See if this is a fixed value or if it changes depending on the word
let guessCount = 10;

// Keep track of loss
let loss = 0;

//randomly chosen word
let word; 

//container for answer, needed for visual representation
let solution = [ ];

//length of word
let wordLength;

//is the game started
let gameStarted = false;

// Array of the possible options that are acceptable guesses
const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Array of possible words 

const words = ['ANGORA' , 'ALLEY' , 'TIGER' , 'BOBCAT' , 'BURMESE' , 'CALICO' , 'TABBY' , 'LEOPARD' , 'CHEETAH' , 'COUGAR' , 'GINGER' , 'FELINE' , 'HIMALAYAN' , 'JAGUAR' , 'KITTEN' , 'LION' , 'LYNX' , 'MANX' , 'WEDGIE', 'OCELOT' , 'PANTHER' , 'PERSIAN' , 'PUMA' , 'SIAMESE' , 'TOM' , 'TIGER']

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/javascript/catsound.mp3");

//Set up for what will happen when a key is pressed0 (General keys)

document.onkeyup = function(event){
        userGuess = event.key;
        userGuess = userGuess.toUpperCase();

        if (!gameStarted) {
            if (userGuess == " ") {
                gameStarted = true;
            } else {
                return;
            }
        }

        gameStart();
            //creates an onscreen visual that shows how many letters are in the word

        if (userGuess != 0){

            //checks to see if the guess is valid
            if (abc.includes(userGuess)){
                //if the guess is valid, checks to see if the guess is in the word
                if (word.includes(userGuess) === true ){
                    //if the guess has already been guessed it will say so
                    if (correctGuesses.includes(userGuess)){
                        alert('Already guessed');
                    }
                    //the guess will be added into an array so that the correct guess cant be guessed again
                    else {
                    correctGuesses.push(userGuess);
                        // Will check where the letter is in the array and change the _ to the letter
                        letterCorrect();
                        checkIfWin();

                    }
                }

                else {
                    //checks if the letter has already been guessed
                    if (guesses.includes(userGuess)){
                        alert('Already guessed');
                    }
                    //if the guess is new and wrong then it will reduce the guessCout
                    else {
                        guessCount--;
                        guesses.push(userGuess);
                        document.getElementById("guessesLeft").innerText = guessCount;
                        document.getElementById("guesses").innerText = guesses;
                    }
                }
            }

            else {
                alert('Enter a letter');
            }

        }

            // If the guessCount get to zero, then the game is over, the guesses are erased, guessCount is reset and a new word is generated. Game starts over
            if (guessCount === 0) {
                loss++;
                alert("Sorry, you didn't guess the word.");
                reset();
                gameStart()
            }

}

    
//functions

function letterCorrect() {
    for (var x = 0; x < word.length; x++) {
        if (word[x] === userGuess) {
            solution[x] = userGuess;
            document.getElementById("word").innerText = solution.join('  ');
            wordLength--;
        }
    }
}

function checkIfWin() {
    if (wordLength === 0) {
        win++;
        document.getElementById("word").innerText = solution.join('  ');
        reset();
        audioElement.play();
        setTimeout(function () {
            alert('You win!');
        }, 0);
    }
}



function gameStart() {
    if (word === undefined) {
        word = words[Math.floor(Math.random() * words.length)];
        console.log(word);
        for (var i = 0; i < word.length; i++) {
            solution[i] = "_ ";
        }
        wordLength = word.length;
        document.getElementById("word").innerText = solution.join('  ');
    }
    return i;
}

    function reset() {
        userGuess = undefined;
        guessCount =  10;
        guesses = [ ];
        correctGuesses = [ ];
        word = undefined;
        wordLength = undefined;
        document.getElementById("loss").innerText = loss;
        document.getElementById("guessesLeft").innerText = guessCount;
        document.getElementById("win").innerText = win;
        document.getElementById("guesses").innerText = guesses;
        gameStarted = false;
    }

/*  Word guess game
TODO:
- [x] event key to listen for letter the player guesses -> same as the previous one. 

- [x] make an array for the words the computer can choose from
- [x] random choice will be picked from the array of words
- [x] Set up a visual that shows how many letters are in the word
- [x] When letter is guessed correctly, the letter will be shown in the location it is in the word
- [x] Check to see if userGuess is in the word
- [x] if yes, then get another guess, 
- [x] if no then the guesses count will go down by one. 
- [x] if userGuess is in word multiple times, account for that
- [x] User will be notifed if they have guessed the same thing already

- [x] example of visual if the word is 'madonna' display it like:
_ _ _ _ _ _ _ when the game starts and fill it in as the game progresses
'm a d o _ _ a'

-- extra --

- [x] Play a sound or song when the user guesses the word
- [ ]Design to match the game, set a game theme
- [x] Add homeworks to portfolio with linkes to the github pages

*/