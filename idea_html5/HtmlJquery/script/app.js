/**
 * Created by wendy on 15/6/2.
 */

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });

    $("button").click(function(){
        $("#pid").text("p is click");
        $(".pclass").text("p is click");

    });

    $("#hide").click(function(){
        //$("p").hide();
        $("p").hide(1000);
    });
    $("#show").click(function(){
        //$("p").hide();
        $("p").show(1000);
    });
    $("#toggle").click(function(){
        //$("p").hide();
        $("p").toggle(1000);
    })

});