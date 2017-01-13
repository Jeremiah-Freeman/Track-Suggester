$(document).ready(function() {
  $("form#questionsOne").submit(function(event) {
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

$(document).ready(function() {
  $("form#questionsTwo").submit(function(event) {
    event.preventDefault();
    var q1 = $("input#question2").val();
    var q2 = "no"

  if (q1 === "no") {
    $('#q2no').show();
  } else {
    $('#q2yes').show();
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
  } else {
    $('#q3yes').show();
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
  } else {
    $('#q4yes').show();
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
  } else {
    $('#q5yes').show();
  }

  });
});
