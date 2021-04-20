$(".st0, .st1, .st2, .st3, .st4, .st5").hover(function (e) {
  $("#info-box").css("opacity", "100%");
  $("#info-box").html($(this).data("info"));
});

$(".st26").hover(function (e) {
  $("#info-box").css("opacity", "100%");
  $("#info-box").html($(this).data("info"));
});

$(".st0, .st1, .st2, .st3, .st4, .st5").mouseleave(function (e) {
  $("#info-box").css("opacity", "0%");
});

$(document)
  .mousemove(function (e) {
    $("#info-box").css("top", e.pageY - $("#info-box").height() - 30);
    $("#info-box").css("left", e.pageX - $("#info-box").width() / 2);
  })
  .mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (ios) {
  $("a").on("click touchend", function () {
    var link = $(this).attr("href");
    window.open(link, "_blank");
    return false;
  });
}
