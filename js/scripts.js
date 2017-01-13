$(document).ready(function() {
  $("form#questionsOne").submit(function(event) {
    event.preventDefault();
    var q1 = $("input#question1").val();
    var q2 = "no"

  if (q1 === "no") {
    $('#q1no').show();
    $("input#question1").hide("slow");
  } else {
    $('#q1yes').show();
    $("input#question1").hide("slow");
  }

  });
});

$(document).ready(function() {
  $("form#questionsTwo").submit(function(event) {
    event.preventDefault();
    var q1 = $("input#question2").val();
    var q2 = "no"

  if (q1 === "no") {
    $('#q2no').show();
    $("input#question2").hide("slow");
  } else {
    $('#q2yes').show();
    $("input#question2").hide("slow");
  }

  });
});

$(document).ready(function() {
  $("form#questionsThree").submit(function(event) {
    event.preventDefault();
    var q1 = $("input#question3").val();
    var q2 = "no"

  if (q1 === "no") {
    $('#q3no').show();
    $("input#question3").hide("slow");
  } else {
    $('#q3yes').show();
    $("input#question3").hide("slow");
  }

  });
});

$(document).ready(function() {
  $("form#questionsFour").submit(function(event) {
    event.preventDefault();
    var q1 = $("input#question4").val();
    var q2 = "no"

  if (q1 === "no") {
    $('#q4no').show();
    $("input#question4").hide("slow");
  } else {
    $('#q4yes').show();
    $("input#question4").hide("slow");
  }

  });
});

$(document).ready(function() {
  $("form#questionsFive").submit(function(event) {
    event.preventDefault();
    var q1 = $("input#question5").val();
    var q2 = "no"

  if (q1 === "no") {
    $('#q5no').show();
    $("input#question5").hide("slow");
  } else {
    $('#q5yes').show();
    $("input#question5").hide("slow");
  }

  });
});
