var child = results.data.children

// console.log("results", child.data.url);

// this functions runs when the document is loaded.
$(function() {
  $("#submit").on("click",search);
  $("#clear").on("click",clearSearchResults);
});


function search(event) {
  event.preventDefault();
  var url = "http://api.giphy.com/v1/gifs/search";
  var key = "dc6zaTOxFJmzC";
  var search = $("#query").val() || $("#query").attr('placeholder');
  var params = {q: search,api_key:"dc6zaTOxFJmzC"};

  clearSearchResults();

  $.get(url, params).done(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      addSearchResult(data.data[i]);
    }

    if (data.Error) {
      $("#results").text(data.Error);
      return;
    }

  }); // end get function
}

// Clear previous search results.
function clearSearchResults() {
  $("#results").empty();
}

// adds a single search result to the page.
function addSearchResult(addImage) {
  var newImage = $("<img>").attr("src",addImage.images.fixed_height.url);
  newImage.appendTo("#results");
  console.log(addImage.images.fixed_height.url);
}
