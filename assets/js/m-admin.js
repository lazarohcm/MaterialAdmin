/**
 * Created by Lázaro on 7/29/15.
 */

$(document).ready(function(){
    $("#dropMessages, #dropAlerts, #dropTask").dropdown({
        constrain_width: false,
        belowOrigin: true,
    });


    $('.nav li').textfill({maxFontPixels: 16});

    $('#dropProfile').dropdown();


    $(".button-collapse").sideNav();
});