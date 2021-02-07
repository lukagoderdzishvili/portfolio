$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        document.getElementById("header_shadow").style.opacity = "0.8";
    } else {
        document.getElementById("header_shadow").style.opacity = "0.6";
    }
});

var height = window.innerHeight;

$(window).on("scroll", function() {
    if($(window).scrollTop() >= 0 && $(window).scrollTop() < height){
        document.getElementById("first").style.color = "#339beb";
    }else{
        document.getElementById("first").style.color = "#fff";
    }

    if($(window).scrollTop() >= height && $(window).scrollTop() < height * 2){
        document.getElementById("second").style.color = "#339beb";
    }else{
        document.getElementById("second").style.color = "#fff";
    }

    if($(window).scrollTop() >= height * 2 && $(window).scrollTop() < height * 3){
        document.getElementById("third").style.color = "#339beb";
    }else{
        document.getElementById("third").style.color = "#fff";
    }

    if($(window).scrollTop() >= height * 3 && $(window).scrollTop() < height * 4){
        document.getElementById("last").style.color = "#339beb";
    }else{
        document.getElementById("last").style.color = "#fff";
    }
});