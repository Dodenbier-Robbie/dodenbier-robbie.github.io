$(document).ready(function(){
    var URL = $(location).attr('pathname');
    if (URL == '/index.php'){
        $('.flexItem1 a').addClass('active');
    }
    if (URL == '/rafting.php'){
        $('.flexItem2 a').addClass('active');
        $('.flexItem10 a').addClass('active');
        $('.flexItem3 a').removeClass('active');
        $('.flexItem4 a').removeClass('active');
    }
    if (URL == '/fishing.php'){
        $('.flexItem3 a').addClass('active');
        $('.flexItem10 a').addClass('active');
        $('.flexItem2 a').removeClass('active');
        $('.flexItem4 a').removeClass('active');
    }
    if (URL == '/paddleboard.php'){
        $('.flexItem4 a').addClass('active');
        $('.flexItem10 a').addClass('active');
        $('.flexItem2 a').removeClass('active');
        $('.flexItem3 a').removeClass('active');
    }
    if (URL == '/river_guides.php'){
        $('.flexItem5 a').addClass('active');
    }
    if (URL == '/reservations.php'){
        $('.flexItem6 a').addClass('active');
    }
    if (URL == '/contact_us.php'){
    $('.flexItem7 a').addClass('active');
    }
});