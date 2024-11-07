$(document).ready(function(){

    $("button").click(function(e){
        e.preventDefault();
    })

    $("#carousel-images").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $(".carousel-products").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $("#menu-hamburguer").click(function(){
        $("#menu-long").slideToggle();
    })

    $(".liAbout").click(function(){
        let destino = $("#about");

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $(".liProducts").click(function(){
        let destino = $("#products");

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })


})