
const creatTable =((rows,cols) => {
    const table = document.getElementById('myTable')
    for (let i=0 ; i< rows ; i++)
    {
        const row = document.createElement('tr');
        for (j=0; j<cols; j++) {
        const cell = document.createElement('td')
        row.appendChild(cell);
        }
       table.appendChild(row)
    }
})
creatTable(6,5)

/*--------------------------------constant--------------------------------------------------*/

const wordList = []
const maxGuess = 6 

/*--------------------------------variables --------------------------------------------------*/

let rightWord
let playerGuess = []
let feedback 

/*--------------------------------cached element refrence -----------------------------------*/

const inputWord = document.getElementById('dataInput');
const submit = document.getElementById('submitBtn');

/*----------------------------------functions--------------------------------------------------*/

submit.addEventListener('click' , () => {
const inputData = inputWord.value.trim();
if (inputData) {
playerGuess.push(inputData);

inputWord.value =''; 
}
})
 
playerGuess.forEach((Guess) => {
const listItem = document.createElement('li');
listItem.textContent = dataItem;
inputWord.appendChild(listItem);
})