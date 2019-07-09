$(document).ready(function(){
     var clock = $('#time-counter').FlipClock({
        clockFace: "MinuteCounter",
        countdown: true,
        autoStart: false,
        autoPlay: true,
        callbacks: {
            stop: function(){
                $('.container--second').removeClass('hidden');
                $('.button').hide();
                $('.button-2').addClass('active'); 
            }
        }
    });
    clock.setTime(120);
    
    
    $('.button').on('click', function(){
      $('.container--second').toggleClass('hidden');
      clock.start(); 
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
       
    // console.log(cards);
    var clickedCard = false;
    var firstCard;
    var secondCard;

    $('.game__card').on('click', function(){
        counter++;
        $("#time").html("Your clicks = " + counter);
        $(this).addClass('switch');
      
     

    //  function defineCards (){
            if (!clickedCard) {
            clickedCard = true;
            firstCard = $(this);
            $(this).find('.card__back').html('<div>'+$(this).data('cardId')+'</div');
            // console.log(firstCard);
                    
        } else {
            clickedCard = false;
            secondCard = $(this);
            $(this).find('.card__back').html('<div>'+$(this).data('cardId')+'</div');
            // console.log(secondCard);
            matching(firstCard, secondCard);
        }
        // };
        
        // console.log(firstCard.data('cardId'), secondCard.data('cardId'));
        function matching (){
            if(firstCard.data('cardId') == secondCard.data('cardId')) {
               $(firstCard).off('click');
               $(secondCard).off('click');
               firstCard = null;
               secondCard = null;
                                                       
           } else {
             setTimeout(function(){
             $(firstCard).removeClass('switch');
             $(secondCard).removeClass('switch');
             firstCard = null;
             secondCard = null;             
      
             },1000);   

            };
        };
            
      if($('.switch').length == 20)
      {
         clock.stop();
         $('.container--second').removeClass('hidden');
         $('.button').hide();
         $('.button-2').addClass('active'); 
        
     } else {
         console.log('not yet');
     };

    });

    
        $('.button-2').on('click', function (){
         
        $('.game__card').removeClass('switch');
        $('.container--second').addClass('hidden');
        $(this).hide();
        saveResult(counter);
       // location.reload();
       });
       
    //  console.log($('.game__cards').length, $('.switch').length);
         
                           
    // });
    

     function saveResult (result){
            var oldResult = localStorage.getItem('result');
            var resultArr = [];
             var position = null;
            if (oldResult) {
                try{
                  resultArr = JSON.parse(oldResult).sort((a, b) => a - b);
                } catch(err){
                  console.log('Error with results', err);
                }
              }
              for (var i = 0; i < resultArr.length; i++){
                if (result < resultArr[i]) {
                  position = i;
                  break;
                }
              }
              if (position === null) {
                resultArr.push(result);
              } else {
                resultArr.splice( position, 0, result );
              }
              localStorage.setItem('result', JSON.stringify(resultArr));
      
              setTimeout(()=> {
            console.log(`Game is over. You spent ${counter} clicks to finish the game. Your position is ${position + 1} from ${resultArr.length} results with the time of ${120 - clock.getTime()} seconds`);
            }, 1000);   
            
        };
    
});

