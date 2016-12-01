$(function(){

    var $myNavItem = $("nav > ul > li");
    //var $myDropDown = $myNavItem.find("div");

    $myNavItem.on("mouseover", function(){
        $(this).find("div").animate(
            {opacity: 1}, 2000
        );
    }).on("mouseleave", function(){
        $(this).find("div").animate(
            {opacity: 0}, 2000
        );
    });
});
