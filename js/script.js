$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 100){
        $('.navbar').addClass('.sticky_header');
    }
    else {
         $('.navbar').removeClass('.sticky_header');
    }
    }); 




// counter up start



// counter up end 