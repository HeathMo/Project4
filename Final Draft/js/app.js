$(document).ready(function () {
  //   console.log("ready to work?");
  //   $("#next-search").hide();
});

function resetForm() {
  // $("#results, #next-search").hide();
  // $(
  //   "#predict-rating, #rating-selection, #predict-location, #location-selection, #predict-size, #size-selection, #predict-type, #type-selection, #predict-industry, #industry-selection, #predict-sector, #sector-selection, #predict-revenue, #revenue-selection, #predict"
  // ).show();
}

function showNextSearch() {
  // $("#results, #next-search").show();
  // $("#user-details, #predict").hide();
}

// Submit Info - Selection Function
$("#predict").click(function (event) {
  event.preventDefault();
  const livingselection = $("#livingselection option:selected").val();
  const sizeselection = $("#sizeselection option:selected").val();
  const typeselection = $("#typeselection option:selected").val();
  const industryselection = $("#industryselection option:selected").val();
  const sectorselection = $("#sectorselection option:selected").val();
  const revenueselection = $("#revenueselection option:selected").val();

  const arrayElements = [
    livingselection,
    sizeselection,
    typeselection,
    industryselection,
    sectorselection,
    revenueselection,
  ];
  console.log({ arrayElements });

  /**
   * Step 1. get all the selected values
   * Step 2. put them  in an array
   * step 3. serialize
   */
  const config = {
    type: "POST",
    url: "/endpoint",
    data: {
      "data[]": arrayElements,
    },
  };

  $.ajax(config)
    .done(({ results, message }) => {
      if (results) {
        console.log("we finally have ", results);
        $("#user-details, #predict").css({ display: "none" });

        $("#next-search, #results").css({ display: "block", margin: "0 auto" });

        $("#results").html("You Can Expect A Starting Salary Of :" + message);
        // show search again
        // showNextSearch();
      } else {
        $("#results").html("No results, please try again by changing values on the select boxes");
        // do nothing, allow the user to change values
        // showNextSearch();
      }
    })
    .fail((error) => {
      console.log({ error });
    });
});

// Reset
$("#next-search").on("click", function (predict) {
  $("#user-details, #predict").css({ display: "block", margin: "0 auto" });
  $("#user-details").trigger("reset");
  $("#next-search, #results").css({ display: "none" });
  predict.preventDefault();
});

// Javascript instructions to spit out data
// template of a webpage - before the final steps
// generate some visual - create a user interface where the user the things that are going to be fed into the model
// 1. the dropdowns are the going to have to be the exact things from the correspoding unique locations from model
// 2. you have to convert the categories, into 00000 and 1s the same count as the items and it has to be in the same order (locations, size, etc.)
// reorder the columms so that they will be in the order that drop downs will be in
// count by the column
// in the categories results == the category number (on flask)
// category result can be " " (blank in quotes)
///
