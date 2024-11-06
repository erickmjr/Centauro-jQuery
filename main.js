$(document).ready(function(){

    $("html").click(function(e){
        e.preventDefault();
    })

    $("#carousel-images").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $("")

})