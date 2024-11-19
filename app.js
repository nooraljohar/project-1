
/*--------------------------------constant--------------------------------------------------*/

const wordList = ['pizza', 'quick', 'jerky', 'crazy', 'cozey', 'jocks']
const maxGuess = 6 

/*--------------------------------variables --------------------------------------------------*/
let Guess = 0;
let rightWord ="";
let feedback 
let letters
let round = 0
let playerGuess 
let cell 
/*--------------------------------cached element refrence -----------------------------------*/

const start = document.getElementById('start game');
const inputWord = document.getElementById('guessInput');
const submit = document.getElementById('submit');
const restart = document.getElementById('restart');
const next = document.getElementById('next');
const message = document.getElementById('message')
const table = document.getElementById('myTable')
/*----------------------------------functions--------------------------------------------------*/

inputWord.style.display="none";
submit.style.display="none";
restart.style.display="none";
next.style.display="none";
message.style.display="none";

// function to start the game 
const startGame = () => {
    
    start.style.display="none";
    inputWord.style.display="block";
    submit.style.display="block";
    message.style.display="block"

    rightWord = wordList[round];
    message.textContent = "Guess the 5-letters word"
}

start.addEventListener("click" , startGame);

//function to take data from input field 
const submitWord = () => {
    playerGuess = inputWord.value.toLowerCase();
    letters = playerGuess.split("");
    inputWord.value="";

for (var i = 0; i < table.rows.length-1 ; i++)
{
    // let cell = table.rows[Guess].cells[i]
    cell = document.getElementById(`col${i}row${Guess}`)
    cell.innerHTML = `${letters[i]}` ;
}   
checkWord()
}

//check word function 
const checkWord = () => {
    if ( playerGuess === rightWord ){
        for (let i = 0; i < table.rows.length-1 ; i++) {
            cell = document.getElementById(`col${i}row${Guess}`)
            cell.style.backgroundColor='green'
        }
        //table.rows[Guess].style.backgroundColor='green';
        message.style.display="block"
        message.textContent = "congratulations! you found the right word ;)";
        inputWord.style.display="none";
        submit.style.display="none";
        next.style.display="block";
        }

    if (playerGuess !== rightWord){
        let commonLetters =[];
        for (let i = 0; i < table.rows.length-1 ; i++) {
        let letter1 = playerGuess[i];
        let letter2 = rightWord[i];
        cell = document.getElementById(`col${i}row${Guess}`)
        // Check if the letter is the same in both words at the same position
        if (letter1 === letter2) {    
            cell.style.backgroundColor='green'
        } else if (rightWord.includes(letter1)){
            cell.style.backgroundColor='yellow'  
        } else {
            cell.style.backgroundColor='red'
        }
        }
        message.textContent = "Nice try, guess again!";
        }
             
    }

//next round function




