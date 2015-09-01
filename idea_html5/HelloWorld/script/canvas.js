/**
 * Created by wendy on 15/5/31.
 */
var canvas;
var stage;
var sprite;
var a=1;

window.onload=function(){

    canvas =document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    stage.addEventListener("stagemousedown",clickCanvas);
    stage.addEventListener("stagemousemove",moveCanvas);
    var data = {
        images: ["image/s1.png"],
        frames: {width:32, height:32,regX: 10, regY:10}
    };
    sprite= new createjs.Sprite(new createjs.SpriteSheet(data));
    /*sprite.x=50;
    sprite.y=100;

    sprite.alpha=0.8;
    sprite.scaleX = 1.6;
    sprite.scaleY=1.6;
    stage.addChild(sprite);
*/

    createjs.Ticker.setFPS(20);
    createjs.Ticker.addEventListener("tick",tick);
}

function clickCanvas(e){
    addSprite(Math.random()* 100+100,stage.mouseX,stage.mouseY,2);
}
function moveCanvas(e){
    addSprite(Math.random()* 10+2,stage.mouseX,stage.mouseY,1);
}

function tick(e){
    var count = stage.numChildren;

    for(var i=count-1;i>=0;i--) {
        var s = stage.getChildAt(i);

        s.vX += 1;
        s.vY += 2;


        s.x += s.vX;
        s.y += s.vY;

        s.scaleX = s.scaleY = s.scaleX + s.vS;
        s.alpha += s.Va;

        if (s.alpha <= 0 || s.y > stage.height) {
            stage.removeChildAt(i);
        }
    }
    stage.update(e);
}

function addSprite(count,x,y,speed){
    for(var i=0;i<count;i++){
        var s= sprite.clone();
        s.x=x;
        s.y=y;
        s.alpha=Math.random()*0.5+0.5;
        s.scaleX= s.scaleY= Math.random()+0.3;
        var a=Math.PI*2*Math.random();
        var v=(Math.random()-0.5)*30*speed;

        s.vX=Math.cos(a)*v;
        s.vY=Math.sin(a)*v;
        s.vS=(Math.random()-0.5)*0.2;
        s.Va=-(Math.random()*0.05)-0.01;
        stage.addChild(s);
    }
}