
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

//function to take data from input field and return feedback 
const submitWord = () => {
    playerGuess = inputWord.value.toLowerCase();
    letters = playerGuess.split("");
    console.log(playerGuess)
    console.log(letters)
    console.log(rightWord)
    inputWord.value="";

for (var i = 0; i < table.rows.length-1 ; i++)
{
    // let cell = table.rows[Guess].cells[i]
    cell = document.getElementById(`col${i}row${Guess}`)
    cell.innerHTML = `${letters[i]}` ;
    checkWord()
}
}

const checkWord = () => {

    if ( playerGuess == rightWord ){
        message.textContent = "congratulations! you found the right word ;)"
        table.rows[Guess].style.backgroundColor='green'
        inputWord.style.display="none";
        submit.style.display="none";
        next.style.display="block";
        nextRound()
}

}

const nextRound = () => {
    for (let row of table.rows) {
        // Loop through all cells in the row
        for (let cell of row.cells) {
          // Clear the content of each cell
          cell.innerHTML = "";
          cell.style.backgroundColor = ""; 
        }
      }
    message.textContent = "Guess the 5-letters word"
    round++;
    rightWord = wordList[round];
    
}
next.addEventListener("click" , nextRound);



