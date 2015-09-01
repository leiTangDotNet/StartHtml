/**
 * Created by wendy on 15/6/6.
 */
$(document).ready(function () {
    $(window).bind("load",function(){
        imgLocation();
        var dataImg={"data":[{"src":"b3.png"},{"src":"b4.png"},{"src":"b5.png"},{"src":"b6.png"},{"src":"b7.png"},{"src":"b4.png"},{"src":"b4.png"},{"src":"b5.png"},{"src":"b6.png"},{"src":"b7.png"},{"src":"b4.png"},{"src":"b4.png"},{"src":"b5.png"},{"src":"b6.png"},{"src":"b7.png"},{"src":"b4.png"},{"src":"b5.png"},{"src":"b6.png"},{"src":"b7.png"},{"src":"b4.png"},{"src":"b5.png"},{"src":"b6.png"},{"src":"b7.png"},{"src":"b4.png"},{"src":"b5.png"},{"src":"b6.png"},{"src":"b7.png"}]};
        window.onscroll=function(){
            if(scrollSlid()){
               $.each(dataImg.data,function(index,value){
                    var box=$("<div>").addClass("box").appendTo($("#container"));
                    var content =$("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","img/"+value.src).appendTo(content);
                   imgLocation();
                });
            }
        }
    });
});

function imgLocation(){
    var box=$(".box");
    var boxWidth=box.eq(0).width();
    var num=Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function(index,value){
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;

        }else{
            var minHeight=Math.min.apply(null,boxArr);
            var minIndex= $.inArray(minHeight,boxArr);
            $(value).css({
                position:"absolute",
                top:minHeight,
                left:box.eq(minIndex).position().left
            });
            boxArr[minIndex]+=box.eq(index).height();
        }

    })
}


function scrollSlid(){
    var box=$(".box");
    var lastBoxHeight = box.last().get(0).offsetTop+ Math.floor(box.last().height()/2);
    var documentHeight=$(window).height();
    var scrollHeight=$(window).scrollTop();
    return (lastBoxHeight<scrollHeight+documentHeight)?true:false;
}
