
/*-------------------------------constant----------------------------------------------------*/
const wordList = ['pizza', 'quick', 'jerky', 'crazy', 'cozey', 'jocks']
const maxGuess = 6 

/*--------------------------------variables --------------------------------------------------*/
let Guess = 0;
let rightWord ="";
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

    restart.style.display="none"
    start.style.display="none";
    inputWord.style.display="block";
    submit.style.display="block";
    message.style.display="block"

    rightWord = wordList[round];
    message.textContent = `round ${round+1}- Guess the 5-letters word`;
}

start.addEventListener("click" , startGame);

//function to take data from input field 
const submitWord = () => {
    playerGuess = inputWord.value.toLowerCase();
    if (playerGuess.length < 5){
        message.textContent = `the word must be of 5 letters`;
        message.style.color='red'
    } else {
    letters = playerGuess.split("");
    inputWord.value="";
    message.style.color='white'

for (var i = 0; i < table.rows.length-1 ; i++)
{
  
    cell = document.getElementById(`col${i}row${Guess}`)
    cell.innerHTML = `${letters[i]}` ;
}   
checkWord()
}}

//check word function 
const checkWord = () => {

    if ( playerGuess === rightWord ){

        for (let i = 0; i < table.rows.length-1 ; i++) {
            cell = document.getElementById(`col${i}row${Guess}`)
            cell.style.backgroundColor='green'

        }
        
        message.style.display="block"
        message.textContent = "congratulations! you found the right word ;)";
        inputWord.style.display="none";
        submit.style.display="none";
        next.style.display="block";


        }
        
        if ( playerGuess !== rightWord){
        
        for (let i = 0; i < table.rows.length-1 ; i++) {
        let letter1 = playerGuess[i];
        let letter2 = rightWord[i];
        cell = document.getElementById(`col${i}row${Guess}`)
        // Check if the letter is the same in both words at the same position
        if (letter1 === letter2) {    
            cell.style.backgroundColor='green'
        } else if (rightWord.includes(letter1)){
            cell.style.backgroundColor='grey'  
        } else {
            cell.style.backgroundColor='red'
            
        } 
        }
        message.textContent = "Nice try, guess again!";
        nextGuess()
        }
             
    }
//next guess function 
const nextGuess = () => {
Guess++;

    if (Guess >= maxGuess) {
        message.textContent = "Game over! The correct word was " + rightWord;
        inputWord.style.display = "none";
        submit.style.display = "none";
        next.style.display = "none";
        restart.style.display="block";

    
    
        inputWord.value = '';
        return;


}}

//next round function 
const nextRound = () => {
    if( playerGuess == rightWord ){
    round = round +1;   
    message.textContent = `round ${round+1}- Guess the 5-letters word`;
    rightWord = wordList[round];
    Guess=0

    //clear the table 
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].innerHTML = '';
            table.rows[i].cells[j].style.backgroundColor = ''; 
        }
    }

    inputWord.style.display = "block";
    submit.style.display = "block";
    next.style.display = "none";}

    if ( round > 5) {
    inputWord.style.display = "none";
    submit.style.display = "none";
    next.style.display = "none";
    restart.style.display="block";
    message.textContent = `well done! you have completed all the rounds`;
    }
}
next.addEventListener("click", nextRound);

//restart function 
const endGame = () => { 
    Guess=0;
    round=0;
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].innerHTML = '';
            table.rows[i].cells[j].style.backgroundColor = ''; 
        }
    }
    message.textContent = `press start to play again`;
    restart.style.display="none";
    start.style.display="block";
}

restart.addEventListener("click" , endGame);




