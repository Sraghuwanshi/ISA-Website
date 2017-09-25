$(document).ready(function(){
    "use strict;"
 
 $("[rel='tooltip']").tooltip(); 
 
 $('.col-md-4 .thumbnail').hover(
 function(){
 $(this).find('.caption').slideDown(250); //.fadeIn(250)
 },
 function(){
 $(this).find('.caption').slideUp(250); //.fadeOut(205)
 }
 ); 
 
});