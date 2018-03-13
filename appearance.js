$(document).ready(function() {
  $("#styleButton").bind("click", onButtonClick);
  $("#colorPicker").val("#FFFFFF");
});

function onButtonClick() {
  var radios = document.getElementsByName('pStyle');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      changeP(i);
      $('p').css("color", $('#colorPicker').val());
      break;
    }
  }
}

function changeP(i) {
  switch (i) {
    case 0:
      //change text to normal
      $('p').css("font-style", "normal");
      $('p').css("font-weight", "normal");
      break;
    case 1:
      //change text to italic
      $('p').css("font-style", "italic");
      $('p').css("font-weight", "normal");
      break;
    case 2:
      //change text to bold
      $('p').css("font-weight", "bold");
      $('p').css("font-style", "normal");
      break;
  }
}
