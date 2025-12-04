document.addEventListener('DOMContentLoaded', () => {
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const playerDisplay = document.getElementById('player-display');
    const cpuDisplay = document.getElementById('cpu-display');
    const resultMessage = document.getElementById('result-message');
    const ruleApplied = document.getElementById('rule-applied');
    const playAgainBtn = document.getElementById('play-again-btn');

    const options = {
        1: "✊ Rock",
        2: "🖐️ Paper",
        3: "✌️ Scissors",
        4: "🦎 Lizard",
        5: "🖖 Spock"
    };

    const winCases = {
        "1,3": "✊ breaks ✌️", // Rock breaks Scissors
        "3,2": "✌️ cuts 🖐️", // Scissors cuts Paper
        "2,1": "🖐️ covers ✊", // Paper covers Rock
        "1,4": "✊ crushes 🦎", // Rock crushes Lizard
        "4,5": "🦎 poisons 🖖", // Lizard poisons Spock
        "5,3": "🖖 smashes ✌️", // Spock smashes Scissors
        "3,4": "✌️ decapitates 🦎", // Scissors decapitates Lizard (using common RPSLS rule)
        "4,2": "🦎 eats 🖐️", // Lizard eats Paper
        "2,5": "🖐️ disproves 🖖", // Paper disproves Spock
        "5,1": "🖖 vaporizes ✊" // Spock vaporizes Rock
    };
function playGame(playerChoice) {
    choiceButtons.forEach(btn => btn.disabled = true);
    
    resultMessage.textContent = 'CPU is deciding...';
    resultMessage.style.color = 'beige';
    ruleApplied.textContent = '';
    
    const cpuChoice = Math.floor(Math.random() * 5) + 1; 

    playerDisplay.textContent = `You chose: ${options[playerChoice]}`;
    cpuDisplay.textContent = `CPU chose: ???`; 
    setTimeout(() => {
        
        cpuDisplay.textContent = `CPU chose: ${options[cpuChoice]}`;

        let result = "";
        let rule = "";

        if (playerChoice === cpuChoice) {
            result = "Tie!";
            rule = "It's a draw.";
            resultMessage.style.color = 'white';
        } else if (winCases[`${playerChoice},${cpuChoice}`]) {
            result = "Player wins!";
            rule = winCases[`${playerChoice},${cpuChoice}`];
            resultMessage.style.color = 'lightgreen';
        } else {
            rule = winCases[`${cpuChoice},${playerChoice}`];
            result = "CPU wins!";
            resultMessage.style.color = 'tomato';
        }
        
        resultMessage.textContent = result;
        ruleApplied.textContent = rule;
        
        playAgainBtn.style.display = 'block';

    }, 1500); 

}

    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = parseInt(button.getAttribute('data-choice'));
            playGame(playerChoice);
        });
    });

    playAgainBtn.addEventListener('click', () => {
        
        playerDisplay.textContent = 'You chose: -';
        cpuDisplay.textContent = 'CPU chose: -';
        resultMessage.textContent = 'Select an option to start!';
        resultMessage.style.color = '';
        ruleApplied.textContent = '';
        playAgainBtn.style.display = 'none';

        
        choiceButtons.forEach(btn => btn.disabled = false);
    });
});