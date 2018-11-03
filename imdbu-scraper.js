var cheerio = require("cheerio");
var request = require("request");

// First, tell the console what server2.js is doing
console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the filmmaking-net website:" +
            "\n******************************************\n");

// Making a request for  homepage
request("https://www.filmmaking.net/film-schools/4/United-States/", function(error, response, html) {

  // Load the body of the HTML into cheerio
  var $ = cheerio.load(html);

  // Empty array to save our scraped data
  var results = [];

  // the below does NOT work //
  // With cheerio, find each h4-tag with the class "***" and loop thrsough the results
  $("a.fslist-item").each(function(i, element) {

    // Save the text of the h4-tag as "title"
    var title = $(element).attr("href");
    // var link = $(element).siblings("href");
    // Find the h4 tag's parent a-tag, and save it's href value as "link"
    // var link = $(element).children().attr("href");

    // Make an object with data we scraped for this h4 and push it to the results array
    results.push({
      title: title,
      link: link
    });
  });

//   After looping through each h4.headline-link, log the results
  console.log(results);
});
