/**
 * Created by wendy on 15/5/28.
 */



(function(){
    var n="ime"
    function Person(name){
        var _this={};
        _this._name =name;
        _this.sayHello =function(){
            alert("Phello:"+_this._name+","+n);
        }
        return _this;

    }
    window.Person=Person;
}());

function TeaCher(name){
    var _this=Person(name);
    var supperSayHello=_this.sayHello;
    _this.sayHello= function () {
        supperSayHello.call(this);
        alert("Thello:"+this._name);
    }
    return _this;
}

var t= TeaCher("wendy");
t.sayHello();