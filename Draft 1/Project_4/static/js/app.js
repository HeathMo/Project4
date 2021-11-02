$(document).ready(function () {
  //   console.log("ready to work?");
  //   $("#next-search").hide();

  // Submit Info - Selection Function
  $("#user-details").change(function (predict) {
    var userData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var earnings = document.getElementById("predict-selection").value;
    var location = document.getElementById("living-selection").value;
    userData[earnings] = 1;
    userData[location] = 1;

    $.post("/results", { userData: userData }).done(function (data) {
      $("#results").empty();
      $("#results").append(data);
    });

    $("#user-details").trigger("reset");

    $(
      "#predict-selection, #predict-earnings, #predict-location, #living-selection, #predict"
    ).hide();
    $("#results, #next-search").show();

    predict.preventDefault();
  });

  // Reset
  $("#next-search").click(function (predict) {
    predict.preventDefault();
  });
});

// Start Prediction - Earnings Function
// $("#predict-button").on("click", function (predict) {
//   console.log("what will I make?");
//   $("#phrase, #predict-button").hide();
//   $("predict-earnings, #predict-selection, #earnings-submit").show();
// });

// // Start Prediction - Location Function
// $("#earnings-submit").on("click", function (predict) {
//   console.log("this is where I want to work");
//   $("predict-earnings, #predict-selection, #earnings-submit").hide();
//   $("#predict-location, #living-selection, #location-submit").show();
// });
