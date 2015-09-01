/**
 * Created by wendy on 15/5/28.
 */

//var person={
//    name:"wendy",
//    age:24,
//    eat:function(){
//        alert("eat");
//    }
//}
//
//person.eat();
//
//function person(){
//
//}
//
//person.prototype={
//    name:"wendy",
//    age:24,
//    eat:function(){
//        alert("eat");
//    }
//}
//
//var p=new person();
//p.eat();


//bibao
(function(){
    var n="ime";
    function People(name){
        this._name=name;
    }

    People.prototype.say=function(){
        alert("say:"+this._name+n);
    }
    window.People= People;
}());


(function(){
    function Student(name){
        this._name=name;
    }
    Student.prototype=new People();
    var supperSay =Student.prototype.say;
    Student.prototype.say=function(){
        supperSay.call(this);
        alert("student say:"+this._name);
    }
    window.Student =Student;
}());


var s=new Student("wendy");
s.say();
