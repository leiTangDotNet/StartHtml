/**
 * Created by wendy on 15/6/2.
 */

$(document).ready(function(){
   $("#fadein").bind("click",function(){
       $("#div1").fadeIn(1000);
       $("#div2").fadeIn(1000);
       $("#div3").fadeIn(1000);
   });

    $("#fadeout").bind("click",function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });
    $("#fadeto").bind("click",function(){
        $("#div1").fadeTo(1000,0);
        $("#div2").fadeTo(1000,0.5);
        $("#div3").fadeTo(1000,1);
    });
});