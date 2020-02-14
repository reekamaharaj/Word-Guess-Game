// variables

// Store the user's guess
let userGuess = 0;

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

// Array of the possible options that are acceptable guesses
const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];



//Array of possible words 

const words = ['ANGORA' , 'ALLEY' , 'TIGER' , 'BOBCAT' , 'BURMESE' , 'CALICO' , 'TABBY' , 'LEOPARD' , 'CHEETAH' , 'COUGAR' , 'GINGER' , 'FELINE' , 'HIMALAYAN' , 'JAGUAR' , 'KITTEN' , 'LION' , 'LYNX' , 'MANX' , 'WEDGIE', 'OCELOT' , 'PANTHER' , 'PERSIAN' , 'PUMA' , 'SIAMESE' , 'TOM' , 'TIGER']

//Set up for what will happen when a key is pressed
document.onkeyup = function(event){
    userGuess = event.key;
    userGuess = userGuess.toUpperCase();

    if (word === undefined){

        word = words[Math.floor(Math.random()*words.length)];
        console.log(word);
        //creates an onscreen visual that shows how many letters are in the word
        var solution = [ ];
        for (var i=0; i < word.length; i++){
            solution[i] = "_ ";
        }
        wordlength = word.length;
        document.getElementById("word").innerText = solution.join('  ');

    }

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
                    for(var x=0; i < word.length; x++){
                        if (word[x] === userGuess) {
                            solution[x] = userGuess;
                            document.getElementById("word").innerText = solution.join("  ");
                        }
                        else {
                            solution[i] = "_  ";
                            document.getElementById("word").innerText = solution.join("  ");
                        }

                    }

                }

                //will need to put in what happens after finding the letter is in the word
            }

            else {

                if (guesses.includes(userGuess)){
                    alert('Already guessed');
                }

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
            guessCount = 10; //Or whatever it is suppoed to be...
            guesses = [ ];
            correctGuesses = [ ];
            document.getElementById("loss").innerText = loss;
            document.getElementById("guessesLeft").innerText = guessCount;
            document.getElementById("win").innerText = win;
            word = undefined;
            alert("Sorry, you didn't guess the word.");
        }

    }

/*  Word guess game
TODO:
[x] event key to listen for letter the player guesses -> same as the previous one. 

[x] make an array for the words the computer can choose from
[x] random choice will be picked from the array of words

- Set up a visual that shows how many letters are in the word
- When letter is guessed correctly, the letter will be shown in the location it is in the word

[x] Check to see if userGuess is in the word
[x] if yes, then get another guess, 
[x] if no then the guesses count will go down by one. 
- if userGuess is in word multiple times, account for that
[x] User will be notifed if they have guessed the same thing already

- example of visual if the word is 'madonna' display it like:
_ _ _ _ _ _ _ when the game starts and fill it in as the game progresses
'm a d o _ _ a'

-- extra --

- Play a sound or song when the user guesses the word
- Design to match the game, set a game theme
- Make game code an object.
- Save game and its properties in an object
- Save game functions as methods, call them under object declaration using event listeners
- Add homeworks to portfolio with linkes to the github pages

*/