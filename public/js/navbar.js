// mobile navbar

$(document).ready(function(){
    $("#nav-hamburger").click(function(){
        console.log("clicked");
        $("#mobile_navbar").fadeToggle();
    })

    $("#close-mobile-navbar").click(function(){
        $('#mobile_navbar').hide();
    })
})

//highlighting the text of the current page

