/**
 * Created by wendy on 15/6/2.
 */

var clickMeBtn;

$(document).ready(function(){
    clickMeBtn=$("#ClickMeBtn");
    clickMeBtn.click(function(){
        var e=jQuery.Event("MyEvent");
        clickMeBtn.trigger(e);
    });

    clickMeBtn.bind("MyEvent",function(event){
        console.log(event);
    })
});