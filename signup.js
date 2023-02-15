$(document).ready(function () {
  $(".ass").on({
    mouseleave: function () {
      $(".men").show();
    },
    mouseenter: function () {
      $(".men").hide(1700);
    },
  });
});
$(document).ready(function () {
  $("#fn").on({
    focus: function () {
      $(this).css("border-radius", 15 + "px");
      $(this).css("padding-left", 10 + "px");
    },
    blur: function () {
      $(this).css("border-radius", 5 + "px");
      $(this).css("padding-left", 0 + "px");
    },
  });
});
$(function () {
  $("#fn").data("holder", $("#fn").attr("placeholder"));
  $("#fn").focusin(function () {
    $(this).attr("placeholder", "");
  });
  $("#fn").focusout(function () {
    $(this).attr("placeholder", $(this).data("holder"));
  });
});
