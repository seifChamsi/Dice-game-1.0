var scores, roundScore,activePlayer,dice;

scores =[0,0];
roundScore = 0;
activePlayer = 1;
           // Initializing the scores
document.getElementById('score-0').textContent = 0 ;
document.getElementById('score-1').textContent = 0 ;
document.getElementById('current-0').textContent = 0 ;
document.getElementById('current-1').textContent = 0 ;

           //hide the Dice in the beginning 
document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function(){
    //1.Random Number
    var dice = Math.floor(Math.random()*6)+1;console.log(dice);
    //2.Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice+'.png';
    //3. update the round score if the rolled number was not a 1 
    if (dice !== 1) {
        //Add Score
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent= roundScore;
    }

    else{
        //Change the player if the dice in (1)
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }
});
