/**
 * Created by Lázaro on 7/29/15.
 */

$(document).ready(function(){
    $("#dropMessages, #dropAlerts, #dropTask").dropdown({
        constrain_width: false,
        belowOrigin: true,
    });

    $('#dropProfile').dropdown();


    $(".button-collapse").sideNav();
});