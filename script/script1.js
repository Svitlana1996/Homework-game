$(document).ready(function(){
var number = 10;
var cards = [];
var randomCards = [];
var clickedCard = false;
var firstCard;
var secondCard;

for(var i = 1; i <= number; i++){
    cards.push(i, i);
  };
  console.log(cards);
  randomCards = cards.sort(() => 0.5 - Math.random());
  console.log(randomCards);
  assignCards();
  function assignCards () {
      $('.game__card').each(function(index){
          $(this).attr('data-card-id', randomCards[index]);
      });
  };
  clickHandler();
  function clickHandler () {
      $('.game__card').on('click', function(){
        
        $(this).addClass('flip');
        // $(this).addClass('active');
        $(this).find('.card__back').html('<div>'+$(this).data('cardId')+'</div');
        matchCard(); 
     });
  };
  function matchCard(){
     
        if($('.flip').first().data('cardId') == $('.flip').last().data('cardId')) {
            $('.flip').each(function(){
                $(this).off('click');
            });
            $('.flip').each(function(){
                $(this).removeClass('flip');
            });

        } else {
            setTimeout(function(){
            
                $('.flip').each(function(){
                $(this).removeClass('flip');
            });
            
                        
        },1000); 
         
          };
     
  };

})

            
     
                       
                        
    

    
    
