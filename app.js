
var scores, roundScore,activePlayer,gamePlaying;
init();
gamePlaying = true;
var diceDOM =document.querySelector('.dice');
var diceDOM2 =document.querySelector('.dice2');
document.querySelector('.btn-roll').addEventListener('click', function()
{
    if(gamePlaying){
         // Add a random number
    var diceValue = Math.floor(Math.random() * 6) + 1 ;
    var diceValueOther = Math.floor(Math.random() * 6) + 1 ;
    //Display the dice value
    
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' +diceValue +'.png';
        //  for other dice
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' +diceValueOther +'.png';
    // Update the result if the diceValue aint 1
    if(diceValue !== 1 && diceValueOther !==1)
    {
        roundScore += diceValue;
        roundScore +=diceValueOther;
        document.querySelector('#current-' +activePlayer).textContent = roundScore;
    }
    else
    {
        nextPlayer();
    }
    }
   

})




document.querySelector('.btn-hold').addEventListener('click', function()
{
    if(gamePlaying){
         // Add current score to global score
    scores[activePlayer] += roundScore;
    // Update the UI 
    document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];


   

    


    // Check if player won the game
    if(scores[activePlayer] >= 100)
    {
        document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
        diceDOM.style.display = 'none';
        diceDOM2.style.display = 'none';
        document.querySelector('.player-' +activePlayer  +'-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer  +'-panel').classList.remove('active');
        gamePlaying = false;
       
    }else
    {
        // next player
    nextPlayer();
    }
    }
   


    
})

function nextPlayer()
{
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //Hide the dice icon 
    diceDOM.style.display = 'none';
    diceDOM2.style.display = 'none';;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

// Start a new game
document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
     scores =[0,0];
 roundScore =0;
 activePlayer =0;





 document.querySelector('.dice2').style.display = 'none';
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}