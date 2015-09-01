/**
 * Created by wendy on 15/5/28.
 */

window.onload= function () {
    imgLocation("div_container","box");

    var imgData={"data":[{"src":"b2.png"},{"src":"b3.png"},{"src":"b1.png"},{"src":"b3.png"},{"src":"b1.png"}]};
    window.onscroll= function () {
        if(checkFlag("div_container","box")){

            var cparent =document.getElementById("div_container");
            for(var i=0;i<imgData.data.length;i++){
                var ccontent=document.createElement("div");
                ccontent.className="box";
                cparent.appendChild(ccontent);
                var boxImg=document.createElement("div");
                boxImg.className="img_box";
                ccontent.appendChild(boxImg);
                var img=document.createElement("img");
                img.src="image/"+imgData.data[i].src;
                boxImg.appendChild(img);

                imgLocation("div_container","box");
            }
        }
    }
}

function checkFlag(parent,content){
    var cparent =document.getElementById(parent);
    var ccontent=getChildElement(cparent,content);
    var lastContentHeight=ccontent[ccontent.length-1].offsetTop;

    var scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight =document.documentElement.clientHeight|| document.body.clientHeight;

    var scrollHeight =scrollTop+pageHeight;

    if(lastContentHeight<scrollHeight){
        return true;
    }
}

function imgLocation(parent,content){
    var cparent =document.getElementById(parent);
    var ccontent=getChildElement(cparent,content);
    var imgWidth=ccontent[0].offsetWidth;
    var browseWidth =document.documentElement.clientWidth;
    var num =Math.floor(browseWidth/imgWidth);

    cparent.style.cssText="width:"+imgWidth*num+"px;";


    var BoxHeightArr=[];
    for(var i=0;i<ccontent.length;i++){
        if(i<num){
            BoxHeightArr[i]=ccontent[i].offsetHeight;
        }
        else{
            var minHeight =Math.min.apply(null,BoxHeightArr);
            var minIndex= getMinHeightLocation(BoxHeightArr,minHeight);
            ccontent[i].style.position= "absolute";
            ccontent[i].style.top=minHeight+"px";
            ccontent[i].style.left= ccontent[minIndex].offsetLeft +"px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
        }
    }
}

function getMinHeightLocation(BoxHeightArr,minHeight){
    for(var i=0;i<BoxHeightArr.length;i++){
        if(BoxHeightArr[i] == minHeight){
            return i;
        }
    }
    return 0;
}

function getChildElement(parent,content){
    var contentArr=[];
    var allcotent=parent.getElementsByTagName("*");
    for(var i=0;i<allcotent.length;i++){
        if(allcotent[i].className==content){
            contentArr.push(allcotent[i]);
        }
    }
    return contentArr;
}