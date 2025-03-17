// Categories Data with Flag Images in the "public/flags" folder
const categories = {
    "Ballon d'Or 2015": [
        { name: "Lionel Messi", flag: "public/flags/argentina.png" },
        { name: "Cristiano Ronaldo", flag: "public/flags/portugal.png" },
        { name: "Neymar", flag: "public/flags/brazil.png" },
        { name: "Luis Suárez", flag: "public/flags/uruguay.png" },
        { name: "Andrés Iniesta", flag: "public/flags/spain.png" },
        { name: "Thomas Müller", flag: "public/flags/germany.png" },
        { name: "Arjen Robben", flag: "public/flags/netherlands.png" },
        { name: "Manuel Neuer", flag: "public/flags/germany.png" },
        { name: "Sergio Agüero", flag: "public/flags/argentina.png" },
        { name: "Paul Pogba", flag: "public/flags/france.png" },
        { name: "Zlatan Ibrahimović", flag: "public/flags/sweden.png" },
    ],
    "World Cup 2014 Teams": [
        { name: "Germany", flag: "public/flags/germany.png" },
        { name: "Brazil", flag: "public/flags/brazil.png" },
        { name: "Argentina", flag: "public/flags/argentina.png" },
        { name: "France", flag: "public/flags/france.png" },
        { name: "Netherlands", flag: "public/flags/netherlands.png" },
        { name: "Spain", flag: "public/flags/spain.png" },
        { name: "Italy", flag: "public/flags/italy.png" },
        { name: "Portugal", flag: "public/flags/portugal.png" },
        { name: "Chile", flag: "public/flags/chile.png" },
        { name: "Belgium", flag: "public/flags/belgium.png" },
        { name: "Colombia", flag: "public/flags/colombia.png" },
    ],
};

// Game state variables
let currentCategory = "";
let currentQuestionIndex = 0;
let currentScore = 0;

// Start Game Function
function startGame() {
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    showCategory("Ballon d'Or 2015");
}

// Display Category
function showCategory(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    currentScore = 0;
    document.getElementById("score").innerText = "Score: " + currentScore;
    document.getElementById("categoryTitle").innerText = category;
    showQuestion();
}

// Show Current Question
function showQuestion() {
    const currentQuestion = categories[currentCategory][currentQuestionIndex];
    const flagContainer = document.getElementById("flagContainer");
    flagContainer.innerHTML = `<img src="${currentQuestion.flag}" alt="Flag" style="width: 100px;">`;
    document.getElementById("guessInput").value = "";
    document.getElementById("guessFeedback").innerText = "";
}

// Submit Guess
function submitGuess() {
    const guess = document.getElementById("guessInput").value.trim();
    const correctAnswer = categories[currentCategory][currentQuestionIndex].name;
    
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
        currentScore++;
        document.getElementById("guessFeedback").innerText = "Correct!";
    } else {
        document.getElementById("guessFeedback").innerText = `Wrong! The correct answer was ${correctAnswer}.`;
    }
    
    document.getElementById("score").innerText = "Score: " + currentScore;
    document.querySelector("button").style.display = "none";  // Hide the submit button after guess
    document.querySelector("button + button").style.display = "inline";  // Show the next button
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < categories[currentCategory].length) {
        showQuestion();
    } else {
        document.getElementById("gameArea").innerHTML = `<h2>Game Over! Final Score: ${currentScore}</h2><button onclick="restartGame()">Play Again</button>`;
    }
}

// Restart the Game
function restartGame() {
    showCategory(currentCategory);
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
}
