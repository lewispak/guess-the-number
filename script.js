/*

My Plan:

1. Get game to generate random number
2. Figure out user's input
3. Check whether it's too high, low, or correct?
4. Too high = "Too high"
5. Too low = "Too low"
6. Correct = "Correct"
7. Display guesses below buttons - not sure how?
8. Restart = Restarts game to state BEFORE guesses

*/

/*

How to do:

1. Create window.onload funtion to execute functions once html has loaded - e.g. playGame or initGame
Get the game to generate a random number from 1 to 100 and save it to memory in a variable called randomNumber (correctNumber)
2. Create function (playGame) that gets the value from user's input and save it to a variable numberGuess
3. Figure out whether the user's input is too high, too low or correct - function called playGame

Start there for now...

*/

/*

Step 1: Create window.onload funtion to execute functions once html has loaded - e.g. playGame or initGame
function should get html element by ID and then add a click eventListener which executes function once executed
On load, two event listeners occur - 1 = playGame, 2 = startGame/initGame

*/

window.onload = function () {
    document.getElementById('number-submit').addEventListener('click', playGame)
}

/*

Step 2: Create a function (playGame) that gets the value from user's input and saves it to a variable called numberGuess

*/

function playGame() {
    let numberGuess = document.getElementById('number-guess').value
    console.log(numberGuess)
}

// Process = 1. listening to click, 2. Calling playGame function, 3. Getting value of user input, 4. Console.logging value of user input

/*

Step 3: Maybe this be the first step but this step is about the game generating a random number which is then saved and used as the marker for the user's guess

*/

// 1. Create getRandomNumber function that returns a random number

function getRandomNumber() {
    // 2. Have it return a random number
    let randomNumber = Math.random()
    console.log(randomNumber)
}

getRandomNumber()
