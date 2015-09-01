/**
 * Created by wendy on 15/5/31.
 */
var countNum=0;
function count(){
    postMessage(countNum);
    countNum++;

    setTimeout(count,1000);
}


this.onmessage=function(event){
    countNum=event.data;
    count();
}

//Init();