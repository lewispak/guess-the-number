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

1. Create window.onload funtion to execute functions once html has loaded - e.g. playGame etc - DONE
Get the game to generate a random number from 1 to 100 and save it to memory in a variable called randomNumber (correctNumber)
2. Create function (playGame) that gets the value from user's input and save it to a variable numberGuess - DONE
3. Generate a random number that can be used as the marker for all user guesses and inputs - DONE
4. Figure out whether the user's input is too high, too low or correct - if else statements inside playGame funtion - DONE
5. Move logic from playGame to another function so it does one thing - DONE
6. Display results on page - too high, too low, correct - many different steps to this...
    1. displayResults (insert functions here as opposed to being logged)
    2. tooHigh, tooLow, correct ---> uses getDialog
    3. getDialog = dialogType & text ---> which come from user input as arguments at the calling level e.g. getDialog('won', text) or getDialog('warning', text) - determines what's to be shown (warning or won message? = "Your guess is too high!" or "Your guess is too low" or "Awesome job, you got it!")
    4. Back to tooHigh, tooLow, correct
    5. Displays on page

Start there for now...

*/

// GLOBAL VARIABLES

let correctNumber = getRandomNumber()
console.log(correctNumber)

/*

Step 1: Create window.onload funtion to execute functions once html has loaded - e.g. playGame or initGame
function should get html element by ID and then add a click eventListener which executes function once executed
On load, two event listeners occur - 1 = playGame, 2 = startGame/initGame

*/

window.onload = function () {
    document.getElementById('number-submit').addEventListener('click', playGame)
    // getRandomNumber()
}

/*

Step 2: Create a function (playGame) that gets the value from user's input and saves it to a variable called numberGuess

*/

function playGame() {
    let numberGuess = document.getElementById('number-guess').value
    console.log(numberGuess)
    displayResult(numberGuess)

    // Step 4:

    // if (numberGuess > correctNumber) {
    //     console.log('too high')
    // } else if (numberGuess < correctNumber) {
    //     console.log('too low')
    // } else if (numberGuess == correctNumber) {
    //     console.log('correct!')
    // }
}

// Process = 1. listening to click, 2. Calling playGame function, 3. Getting value of user input, 4. Console.logging value of user input

// Step 5: Move logic from playGame to another function so that checking the result and displaying it is its own function

function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {
        showNumberAbove() // Step 6.1
        console.log('Your guess is too high!')
    } else if (numberGuess < correctNumber) {
        showNumberBelow() // Step 6.1
        console.log('Your guess is too low!')
    } else if (numberGuess == correctNumber) {
        showYouWon() // Step 6.1
        console.log('Sweet! Your guess is correct')
    }
}

/*

Step 3: Maybe this be the first step but this step is about the game generating a random number which is then saved and used as the marker for the user's guess

*/

// 1. Create getRandomNumber function that returns a random number

function getRandomNumber() {
    // 2. Have it return a random number
    // let randomNumber = Math.random()
    // console.log(randomNumber)

    // 3. randomNumber generates a floating number. We want an integer which means we need to x 100 and remove deciamls (Math.floor).
    // let randomNumber = Math.random() * 100
    // console.log(randomNumber)
    // let randomNumber = Math.floor(Math.random() * 100)
    // console.log(randomNumber)
    // 4. Because Math.random is exclusive of 1 (it will never be 1 but as max is .99999) we will never get a random number of 100. To fix this, simply +1
    let randomNumber = Math.floor(Math.random() * 100 + 1)
    return randomNumber
    // console.log(randomNumber)
    // 5. Now we need to save this somewhere because it's going to be used as the base of our game. Without it, we have no game. Save as a global variable at the top of this file.
}

// console.log(getRandomNumber)

// Step 6.3

function getDialog(dialogType, text) {
    let dialog
    switch (dialogType) {
        case 'warning':
            dialog = "<div class='alert alert-warning' role='alert'>"
            break
        case 'won':
            dialog = "<div class='alert alert-success' role='alert'>"
            break
    }
    dialog += text
    dialog += '</div>'
    return dialog
}

// Step 6.2

function showNumberAbove() {
    const text = 'Your guess is too high!'

    // Step 6.4
    let dialog = getDialog('warning', text)

    // Step 6.5
    document.getElementById('result').innerHTML = dialog
}

// Step 6.2

function showNumberBelow() {
    const text = 'Your guess is too low!'

    // Step 6.4
    let dialog = getDialog('warning', text)

    // Step 6.5
    document.getElementById('result').innerHTML = dialog
}

// Step 6.2

function showYouWon() {
    const text = 'Sweet! Your guess is correct'

    // Step 6.4
    let dialog = getDialog('won', text)

    // Step 6.5
    document.getElementById('result').innerHTML = dialog
}
