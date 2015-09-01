/**
 * Created by wendy on 15/6/6.
 */

var myjq=$.noConflict();
myjq(document).ready(function(){
    myjq("#btn").click(function(){
        $("div").text("new hello");
    })
})