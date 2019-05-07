
/*
1. create a variable to hold the target number - TargetNum
2. generate a random number that lies within the bounds for the game and store it in the variable TargetNum 
3. run game loop (see below)
4. on game loop exit ask if they want to play again

Game Loop
1. Input - take the user's input
2. Update - 
    a. Determine whether the guessed number is high, lower or the same as the target number
    b. Create a message based on that relation
    c. If the number is a match 
3. Draw - Display the message


*/
// Set up globals
var TargetNum;
var submit = document.querySelector('button');
var reset = document.querySelector('#reset');

// Initialize globals
function Initialize() {
    getNewTarget();
    submit.addEventListener('click', Guess)
    reset.addEventListener('click', Reset);
}

// Take the user's guess
function Guess() {
    var guessField = document.querySelector('#guessField');
    var userGuess = guessField.value;
    handleGuess(userGuess);
}

// Handle the user's guess
function handleGuess(userGuess) {
    var guesses = document.querySelector('#guesses');
    var highLow = document.querySelector('#lowOrHi');
    var lastResult = document.querySelector('#lastResult');

    // Show the user's guess
    guesses.textContent = userGuess;
    // Remember whether their previous guess was high or low
    lastResult.textContent = highLow.textContent;

    // Check their new guess
    if (userGuess < TargetNum) {
        highLow.textContent = "Too Low";
        console.log("Low");
    } else if (userGuess > TargetNum) {
        highLow.textContent = "Too High";
        console.log("High");
    } else if (userGuess == TargetNum) {
        highLow.textContent = "A Winner Is You! Generating a new number...";
        console.log("Win");
        getNewTarget();
    }
}

// Resets the game
function Reset() {
    //Reset the field
    document.querySelector('#guessField').value = "";
    //Reset the feedback
    document.querySelector('#guesses').textContent = "";
    document.querySelector('#lowOrHi').textContent = "";
    document.querySelector('#lastResult').textContent = "";
    //Get a new number
    getNewTarget();
}

// Gets a new target number
function getNewTarget() {
    // Generate a radnom number between 1 and 100
    TargetNum = Math.floor((Math.random() * 100) + 1);
    console.log(TargetNum);
}