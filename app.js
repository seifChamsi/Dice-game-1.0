var scores, roundScore,activePlayer,dice;

scores =[0,0];
roundScore = 0;
activePlayer = 0;
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
        //Next player
       nextPlayer();
    }
});

function nextPlayer() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = "0"
    document.getElementById('current-1').textContent = "0"

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';        
}

document.querySelector('.btn-hold').addEventListener('click', function(){
    //1.add the current score to global score 
    scores[activePlayer] += roundScore;
    //2. update the User interface
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]
    //check if the player won the game 
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-'+activePlayer).innerHTML='<strong>'+"You win :D"+'</strong>';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }
    else{            
        nextPlayer();
    }
    
})  