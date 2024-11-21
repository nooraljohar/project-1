***wordle game***

Wordle is guessing game where the player must guess a word of 5 letters in 6 attempts.
The game will help player to reach to the right word by changing the cells color. 

•Green indicates that a letter is correct and in the right position.
•grey means the letter is in the word but in the wrong position.
•red indicates the letter is not in the word at all.

I chose this game because I think it will develop my programming skills, as I do not have much experience and may face many difficulties, so this game will be a good choice for me.

Game instruction :
1. press start playing button to start the game.
2. after you start the game you are required to 
          guess a five letter word and write it.
3. if your word match the game word you will 
        win , otherwise you will either have a letters
        similar to the correct word or a completely
        wrong  word.
4. if you get a similar letters for the correct 
        word, the color of the boxes of similar letters 
        will change based on the place of letters:

        green boxes : it indicates similar letters that 
        are in the same plac of correct word 
        grey boxes : it indicates similar letters that 
        are in wrong place.


        you can play the game through the deployed link  (http://wordle-game.surge.sh) 

- PSEUDOCODE : 
 1) ***variables used to track the state of the game***
-	Right word: this the word that the computer will choose it from the word list in order to compare the player word with it. 
-	Player Guess: this represent the word written by the player which then will compare it with the chosen word.
-	Feedback : this will represent the change in color of the boxes based of the comparison between the right word and the player word :
1. If the tow words same: the row boxes of the word will turn into green, congratulatory message and next button will appear.
2. if the tow words different  : then the program will check if there is similar letters in the tow words 

- No similar letters : the boxes of the player word will turn to red 

- there is similar letters : it  will change the color of similar letter depend on the place of letter :
1. If the similar letters in the same place of the right word then the box of the similar letters will turn into green.
2. If the similar letters in the wrong place of the right word then the box of the similar letters will turn into yellow.
2) ***Required constant:***
-  Word list: this represent the words that will store for each round, computer will choose the right word from this list.
-	Max Guess   : this represent the number of words that the player can write in each round.

 3) ***Player clicking buttons***
- Start button: this button will make the user start the game, after the user click this button:
1. A massage will appear stating that the game has started.
2. The input button will wait for player to type a word. 
- Restart button: this button will appear after the player complete his chances, so that he can restart the game and play it again.
- Next button: this button will appear after the player get the right word to move to next round.
- Input feild: this button will be always there, where the player can enter the guessed word after he start the game.
4) ***Selection from the word list***

- It could be Random selection technique: the program should randomly select word from the word list using random math function which will generate random index to pick a word from the words list or just go through the word list , word after word.
Or just the program go through the words in an orderly manner.
5) ***Functions:***
1. Start game function: this function will allow the player to start the game by press the start button, then it will select the word from the words list and it will send message: “the game has started, type a word “
2. Input function: which should receive player word and distributed it to array, where the array will put the word letters in the boxes. 
3. Compare function: which will compare the written word (in the array) with the right word:
- If the words are same, call a function that will send a congratulatory message and show the next button, after the player press the next button the program will cleared the boxes and select new word and start the game directly.
- If the words are different, call a function that will check if there are a similar letters or not:
1. no similar letters function: if there is no similar letters then this function will convert the boxes of wrong word to red and will go to next row of boxes, will call input function again to receive new word 
2. there is similar letters : this Feedback function which will check the place of the similar letters to decide which feedback return: 

•	Feedback 1: if the place of the similar letter same the right word then the function will turn the boxes of similar letters to green.

•	feedback 2: if the place of the similar letter not same place of the right word then this function will convert the boxes of similar letters to yellow 

4. restart function: If the player has made all chances this function will show restart button and call the function of start game so he can play again.


Technologies used : JavaScript, HTML, CSS, README.

Planned future enhancements:
- Add different levels to words.
- Add a timer to add some excitement to the game.
- Improve design and other things.