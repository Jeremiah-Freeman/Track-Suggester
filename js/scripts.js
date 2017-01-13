$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var q1 = $("input#question1").val();
    var q2 = "no"

  if (q1 === "no") {
    $('#q1no').show();
  } else {
    $('#q1yes').show();

  }

  });
});
