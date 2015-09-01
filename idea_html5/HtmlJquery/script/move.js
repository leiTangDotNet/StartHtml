/**
 * Created by wendy on 15/6/2.
 */

$(document).ready(function(){
    $("#divshow").click(function(){
        $("#divcontent").slideDown(1000);
    });
    $("#divhide").click(function(){
        $("#divcontent").slideUp(1000);
    });
    $("#divtoggle").click(function(){
        $("#divcontent").slideToggle(1000);
    });
});