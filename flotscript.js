$(document).ready(function () {
    $("#ybutton").bind("click", onButtonClick);
});

function onButtonClick() {
    var y = document.getElementsByName('yvalue');
    y = y++;
    $('p').html("yvalue", y);
}