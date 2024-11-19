
/*--------------------------------constant--------------------------------------------------*/

const wordList = ['pizza', 'quick', 'jerky', 'crazy', 'cozey', 'jocks']
const maxGuess = 6 

/*--------------------------------variables --------------------------------------------------*/
let Guess = 0;
let rightWord ="";
let feedback 
let letters
let round = 0;
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

//function to take data from input field and split it 
const submitWord = () => {
    const playerGuess = inputWord.value.toLowerCase();
    letters = playerGuess.split("");
    console.log(playerGuess)
    console.log(letters)
    console.log(rightWord)
    inputWord.value="";
//table.rows.length-1

for (var i = 0; i < table.rows.length-1 ; i++)
{
    // let cell = table.rows[Guess].cells[i]
    //let cell = document.getElementById(`col${i}row${Guess}`)
    table.rows[Guess].cells[i].innerHTML = letters[i]  
}   
    //check the word 
    /*
    if ( playerGuess == rightWord ){
      let cell = document.getElementById(`col${i}row${Guess}`)
      message.textContent = "congratulations! you found the right word ;)"
      cell.style.backgroundColor='green'
      inputWord.style.display="none";
      submit.style.display="none";
      next.style.display="block";
    }
    */
// check the player guess 
  
    //the cells of the word will turn to green 
    
   // nextround()
}
submit.addEventListener("click" , submitWord);
/*
const nextround = () => {
    round++;
    rightWord = wordList[round];
    next.style.display="none";
    inputWord.style.display="block";
    submit.style.display="block";
    message.style.display="block"
    submitWord()
}
next.addEventListener("click" , nextround)
}
*/

