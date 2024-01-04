// mobile navbar

$(document).ready(function(){
    $("#nav-hamburger").click(function(){
        $("#mobile_navbar").fadeToggle();
    })
})

//highlighting the text of the current page

const navItems = document.querySelectorAll('.nav-item');
console.log(navItems)