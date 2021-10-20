
$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});

//script.js code :-
$(function () {
  $("#navbar").load("nav.html");
});

$(function () {
  $("#carousel").load("carousel.html");
});

$(function () {
  $("#1989").load("1989new.html");
});

$(function () {
  $("#lover").load("lover.html");
});

$(function () {
  $("#wall").load("wall.html");
});

$(function () {
  $("#footer").load("footer.html");
});

function loadVideo(v) {
  var e = document.getElementById("playerVideo");
  e.src = v;
  console.log(v);   
}