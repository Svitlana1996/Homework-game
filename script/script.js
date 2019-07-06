$(document).ready(function(){
    
    $('.button').on('click', function(){
      $('.container--second').toggleClass('hidden');
     });
     var counter = 0;     
    var number = 10;
    var cards = [];
    var randomCards = [];
    for(var i = 1; i <= number; i++){
        cards.push(i, i);
      };
      randomCards = cards.sort(() => 0.5 - Math.random());
     console.log(randomCards);
     assignCards();
  function assignCards () {
      $('.game__card').each(function(index){
          $(this).attr('data-card-id', randomCards[index]);
      });
  };
       
    console.log(cards);
    var clickedCard = false;
    var firstCard;
    var secondCard;

    $('.game__card').on('click', function(){
        counter++;
        $("#time").html("Your clicks = " + counter);
        $(this).addClass('flip');
      
        if (!clickedCard) {
            clickedCard = true;
            firstCard = $(this);
            $(this).find('.card__back').html('<div>'+$(this).data('cardId')+'</div');
            console.log(firstCard);
                    
        } else {
            clickedCard = false;
            secondCard = $(this);
            $(this).find('.card__back').html('<div>'+$(this).data('cardId')+'</div');
            console.log(secondCard);
        }
        console.log(firstCard.data('cardId'), secondCard.data('cardId'));
            if(firstCard.data('cardId') == secondCard.data('cardId')) {
               $(firstCard).off('click');
               $(secondCard).off('click');
               firstCard = null;
               secondCard = null;
                                                       
           } else {
             setTimeout(function(){
             $(firstCard).removeClass('flip');
             $(secondCard).removeClass('flip');
             firstCard = null;
             secondCard = null;             
      
             },1000);   

      };

      if($('.flip').length == 20) 
      {
        $('.container--second').removeClass('hidden');
         $('.button').hide();
         $('.button-2').addClass('active'); 
        
     } else {
         console.log('not yet');
     }; 
     $('.button-2').on('click', function (){
        $('.game__card').removeClass('flip');
        $('.container--second').addClass('hidden');
        $(this).hide();
      
        location.reload();
       })

     console.log($('.game__cards').length, $('.flip').length);
         
                           
    });
    
});

