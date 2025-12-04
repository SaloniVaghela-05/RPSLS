# RPSLS
If you have seen "The Big Bang Theory," you know the rules.
# 🖖 Rock, Paper, Scissors, Lizard, Spock! (RPSLS)


This is a classic command-line game of RPSLS translated into a simple, interactive web application using HTML, CSS, and pure JavaScri

The rules follow the standard Rock, Paper, Scissors, Lizard, Spock variations:

| Action | Example Rule |
| :--- | :--- |
| **Rock** | breaks Scissors, crushes Lizard |
| **Paper** | covers Rock, disproves Spock |
| **Scissors** | cuts Paper, decapitates Lizard |
| **Lizard** | poisons Spock, eats Paper |
| **Spock** | vaporizes Rock, smashes Scissors |

1.  **Make a Choice:** Click on one of the five buttons (✊, 🖐️, ✌️, 🦎, or 🖖).
2.  **Waiting Period:** A brief **1.5-second delay** is introduced while the message "CPU is deciding..." is displayed, simulating the computer's thinking process.
3.  **View Results:** The CPU's choice, the specific rule applied (e.g., "🖖 vaporizes ✊"), and the winner are revealed.
4.  **Play Again:** Click the "Play Again" button to clear the board and start a new round.

---

## 💻 Code Structure

The game logic is entirely self-contained within the three files:

### 1. `index.html`
Defines the user interface, including the title, the five choice buttons (using `data-choice` attributes to pass values to JavaScript), and the display areas for results.

### 2. `style.css`
Handles the visual design, including the dark background, the styling of the buttons, and the **boxed look for the main title**.

### 3. `script.js`
Contains the core game logic:
* **Mappings:** Defines the numerical value to emoji/text conversion (e.g., `1` maps to `✊ Rock`).
* **Win Conditions:** Uses a dictionary-like object (`winCases`) to map the winning player-CPU combinations to the associated rule text.
* **`setTimeout`:** Implements the **1.5-second waiting delay** before displaying the CPU's choice and the final result.

---

## 📝 Future Improvements

* Adding a score tracker for the player and CPU.
* Implementing local storage to save high scores.
* Enhancing mobile responsiveness.
