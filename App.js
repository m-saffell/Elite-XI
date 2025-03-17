// Category Data
const categories = {
    "Ballon d'Or 2015": [
        { name: "Lionel Messi", flag: "argentina.png" },
        { name: "Cristiano Ronaldo", flag: "portugal.png" },
        { name: "Neymar", flag: "brazil.png" },
        { name: "Luis Suárez", flag: "uruguay.png" },
        { name: "Andrés Iniesta", flag: "spain.png" },
        { name: "Thomas Müller", flag: "germany.png" },
        { name: "Arjen Robben", flag: "netherlands.png" },
        { name: "Manuel Neuer", flag: "germany.png" },
        { name: "Sergio Agüero", flag: "argentina.png" },
        { name: "Paul Pogba", flag: "france.png" },
        { name: "Zlatan Ibrahimović", flag: "sweden.png" },
    ]
};

let selectedCategory = "";
let currentScore = 0;
let currentGuesses = 0;

// Start Game
document.getElementById("startGame").addEventListener("click", function() {
    selectedCategory = "Ballon d'Or 2015"; // Example category
    startGame(selectedCategory);
});

// Start Game Function
function startGame(category) {
    document.getElementById("gameStatus").textContent = "Guess the players!";
    let players = categories[category];
    let slotsHTML = "";
    
    // Create the player slots with flags
    players.forEach((player, index) => {
        slotsHTML += `
            <div class="playerSlot">
                <img src="flags/${player.flag}" alt="Flag of ${player.name}">
                <input type="text" id="input-${index}" placeholder="Player ${index + 1}">
            </div>
        `;
    });

    document.getElementById("playerSlots").innerHTML = slotsHTML;
    document.getElementById("gameBoard").style.display = "block";
    document.getElementById("guess").style.display = "none"; // Hide guess input
    document.getElementById("submitGuess").style.display = "none"; // Hide submit button
    document.getElementById("category").textContent = category;
}

// Submit Guess
document.getElementById("submitGuess").addEventListener("click", function() {
    let correctGuesses = 0;
    categories[selectedCategory].forEach((player, index) => {
        const guess = document.getElementById(`input-${index}`).value.toLowerCase();
        if (guess === player.name.toLowerCase()) {
            correctGuesses++;
        }
    });
    
    currentScore = correctGuesses;
    document.getElementById("score").textContent = `Score: ${currentScore}`;
    document.getElementById("gameStatus").textContent = `Game Over! You guessed ${currentScore} players correctly.`;
});
