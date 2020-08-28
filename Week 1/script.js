document.addEventListener('DOMContentLoaded', () =>{
  cardGrid();

})
  const cards = [
    {
      name: 'black',
      img: 'images/black.jpg'
    },
    {
      name: 'blue',
      img: 'images/blue.jpg'
    },
    {
      name: 'gray',
      img: 'images/gray.png'
    },
    {
      name: 'green',
      img: 'images/green.jpg'
    },
    {
      name: 'pink',
      img: 'images/pink.jpg'
    },
    {
      name: 'yellow',
      img: 'images/yellow.jpg'
    },
    {
      name: 'black',
      img: 'images/black.jpg'
    },
    {
      name: 'blue',
      img: 'images/blue.jpg'
    },
    {
      name: 'gray',
      img: 'images/gray.png'
    },
    {
      name: 'green',
      img: 'images/green.jpg'
    },
    {
      name: 'pink',
      img: 'images/pink.jpg'
    },
    {
      name: 'yellow',
      img: 'images/yellow.jpg'
    }
  ]

  
  for(var i = cards.length - 1; i>0; i--){
    const x = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[x];
    cards[x] = temp;
  }

  var selectedCards = [];
  var selectedCardsId = [];
  var score = 0;
  var correctMatch = 0;
  

  function cardGrid(){
    
    for(var i = 0; i < cards.length; i++ ){
      var card = document.createElement('img');
      card.setAttribute('src', 'images/question.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      document.querySelector('.grid').appendChild(card);
    }
  }

  function flipCard(){
    var id = this.getAttribute('data-id');
    selectedCards.push(cards[id].name);
    selectedCardsId.push(id);
    this.setAttribute('src', cards[id].img);
    if(selectedCards.length === 2){
      setTimeout(match, 500);
    }
  }

  function match(){
    var allCards = document.querySelectorAll('img'); 
    const firstCard = selectedCards[0]; 
    const secondCard = selectedCards[1]; 
    const firstID = selectedCardsId[0];
    const secondID = selectedCardsId[1];

    if(firstCard === secondCard){
      allCards[firstID].removeEventListener('click', flipCard);
      allCards[secondID].removeEventListener('click', flipCard);
      score = score + 4;
      correctMatch++;
    }
    else{
      allCards[firstID].setAttribute('src', 'images/question.jpg');
      allCards[secondID].setAttribute('src', 'images/question.jpg');
      score--;
    }
    selectedCards = [];
    selectedCardsId = [];

    document.getElementById('score').innerHTML = "Score: " + score;

    if(correctMatch === 6){
      console.log(score);
      document.getElementById('score').innerHTML = "Your final score is " + score + "!";
      // restart();
    }


  }

  // function restart(){
    
  //   var button = document.createElement('button');
  //   button.innerHTML = "<button type='button' onclick=' document.querySelector('.grid').removeChild(card);'>Restart</button>"
  //   // button.setAttribute('type', 'button');
  //   // button.setAttribute('onclick', document.parentNode.removeChild(card));
  //   button.addEventListener('click', cardGrid);
  //   document.getElementById('score').appendChild(button);
  //   score = 0;
  //   correctMatch = 0;
    
  // }
  

