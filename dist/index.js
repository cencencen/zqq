/**
 * Created by Administrator on 2018/11/19 0019.
 */
let index = 0;
let timer = null;
$(function () {
    $(".wrap").eq(index).addClass("now");
    function next() {
        index++;
        if (index > $(".wrap").length - 1) {
            index = 0;
        }
        $(".wrap").removeClass("now");
        $(".wrap").eq(index).addClass("now");
    }
    timer = setInterval(function () {
        index++;
        if (index > $(".wrap").length - 1) {
            index = 0;
        }
        $(".wrap").removeClass("now");
        $(".wrap").eq(index).addClass("now");
    }, 3000);
    $(".next").click(next);
    $(".prev").click(function () {
        index--;
        if (index < 0) {
            index = $(".wrap").length - 1;
        }
        $(".wrap").removeClass("now");
        $(".wrap").eq(index).addClass("now");
    });
    $(".banner").mouseenter(function () {
        clearInterval(timer);
    });
    $(".banner").mouseleave(function () {
        timer = setInterval(function () {
            index++;
            if (index > $(".wrap").length - 1) {
                index = 0;
            }
            $(".wrap").removeClass("now");
            $(".wrap").eq(index).addClass("now");
        }, 3000);
    });
    let index1=0;
    let timer1=null;
    $(".lb1 ul li").eq(index1).addClass("now");
    $(".lb1 ol li").eq(index1).addClass("now");
    timer1 = setInterval(function () {
        index1++;
        if (index1 > $(".lb1 ul li").length - 1) {
            index1 = 0;
        }
        $(".lb1 ul li").removeClass("now");
        $(".lb1 ul li").eq(index1).addClass("now");
        $(".lb1 ol li").removeClass("now");
        $(".lb1 ol li").eq(index1).addClass("now");
    }, 2000);
    $(".lb1 ol li").hover(function () {
        index1=$(this).index();
        $(".lb1 ul li").removeClass("now");
        $(".lb1 ul li").eq(index1).addClass("now");
        $(".lb1 ol li").removeClass("now");
        $(this).addClass("now");
    })
    $(".lb1").mouseenter(function () {
        clearInterval(timer1);
    })
    $(".lb1").mouseleave(function () {
        timer1 = setInterval(function () {
            index1++;
            if (index1 > $(".lb1 ul li").length - 1) {
                index1 = 0;
            }
            $(".lb1 ul li").removeClass("now");
            $(".lb1 ul li").eq(index1).addClass("now");
            $(".lb1 ol li").removeClass("now");
            $(".lb1 ol li").eq(index1).addClass("now");
        }, 2000);
    })
    let index2=0;
    let timer2=null;
    $(".lb2 ul li").eq(index2).addClass("now");
    $(".lb2 ol li").eq(index2).addClass("now");
    timer2 = setInterval(function () {
        index2++;
        if (index2 > $(".lb2 ul li").length - 1) {
            index2 = 0;
        }
        $(".lb2 ul li").removeClass("now");
        $(".lb2 ul li").eq(index2).addClass("now");
        $(".lb2 ol li").removeClass("now");
        $(".lb2 ol li").eq(index2).addClass("now");
    }, 2000);
    $(".lb2 ol li").hover(function () {
        index2=$(this).index();
        $(".lb2 ul li").removeClass("now");
        $(".lb2 ul li").eq(index2).addClass("now");
        $(".lb2 ol li").removeClass("now");
        $(this).addClass("now");
    })
    $(".lb2").mouseenter(function () {
        clearInterval(timer2);
    })
    $(".lb2").mouseleave(function () {
        timer2 = setInterval(function () {
            index2++;
            if (index2 > $(".lb2 ul li").length - 1) {
                index2 = 0;
            }
            $(".lb2 ul li").removeClass("now");
            $(".lb2 ul li").eq(index2).addClass("now");
            $(".lb2 ol li").removeClass("now");
            $(".lb2 ol li").eq(index2).addClass("now");
        }, 2000);
    })
    $(".xuan").click(function(){
        $(".box2").removeClass("now");
        $(".box2").eq($(this).index()).addClass("now");
        $(".xuan").removeClass("now");
        $(this).addClass("now");
    })
    $(".tj ol li").click(function(){
        $(".tj ul").removeClass("now");
        $(".tj ul").eq($(this).index()).addClass("now");
        $(".tj ol li").removeClass("now");
        $(this).addClass("now")
    })
    $(".cont2-title ol li").hover(function(){
        $(".cont2-cont ul").removeClass("now");
        $(".cont2-cont ul").eq($(this).index()).addClass("now");
        $(".cont2-title ol li").removeClass("now");
        $(this).addClass("now")
    })
    let left1=1;
    setInterval(function(){
        $(".xianshi ul").css({"left":$(".xianshi ul").position().left-left1});
    },30)
    $(".ul3 li").click(function () {
        $(".ul14>li").removeClass("now");
        console.log($(".ul14>li"));
        console.log($(".ul14>li").eq($(this).index()));
        $(".ul14>li").eq($(this).index()).addClass("now");
        $(".ul3 li").removeClass("now");
        $(this).addClass("now")
    })
});
$(function () {
    let tIndex1 = 0;
    let bIndex1 = 0;
    $(".bannerBox .ul2 li:first-child").clone(true).appendTo($(".bannerBox ul"))

    function next() {
        tIndex1++
        bIndex1++
        if (tIndex1 > $(".bannerBox .ul2 li").length - 1) {
            tIndex1 = 1
            $(".bannerBox ul").css("left", 0).stop().animate({
                "left": -545
            })
        }
        if (tIndex1 == $(".bannerBox .ul2 li").length - 1) {
            bIndex1 = 0
        }
        $(".bannerBox  .ul2").stop().animate({
            "left": -tIndex1 * 545
        })
    }

    $(".zy1 .btnLeft").click(function () {
        tIndex1--;
        bIndex1--;
        if (tIndex1 < 0) {
            tIndex1 = $(".bannerBox  .ul2  li").length - 2
            $(".bannerBox  .ul2").css("left", -545*6).stop().animate({
                "left": -545*5
            })
        }
        if (bIndex1 < 0) {
            bIndex1 = $(".bannerBox  .ul2 li").length - 2
        }
        $(".bannerBox .ul1").stop().animate({
            "left": -tIndex1 * 545
        })
    })
    $(".zy1 .btnRight").click(function () {
        next()
    })

})
