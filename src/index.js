/**
 * Created by Administrator on 2018/11/19 0019.
 */
let index=0;
let timer=null;
$(function(){
    $(".wrap").eq(index).addClass("now");
    function next(){
        index++;
        if (index>$(".wrap").length-1){
            index=0;
        }
        $(".wrap").removeClass("now");
        $(".wrap").eq(index).addClass("now");
    }
    timer=setInterval(function (){
        index++;
        if (index>$(".wrap").length-1){
            index=0;
        }
        $(".wrap").removeClass("now");
        $(".wrap").eq(index).addClass("now");
    },3000);
    $(".next").click(next);
    $(".prev").click(function(){
        index--;
        if (index<0){
            index=$(".wrap").length-1;
        }
        $(".wrap").removeClass("now");
        $(".wrap").eq(index).addClass("now");
    })
    $(".banner").mouseenter(function () {
        clearInterval(timer);
    })
    $(".banner").mouseleave(function () {
        timer=setInterval(function (){
            index++;
            if (index>$(".wrap").length-1){
                index=0;
            }
            $(".wrap").removeClass("now");
            $(".wrap").eq(index).addClass("now");
        },3000);
    })
});