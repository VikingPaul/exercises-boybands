var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var currentBand = "";
var currentVeggie = "";

var band = document.getElementById("boy-bands")
var vegetable = document.getElementById("vegetables")

for (var loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {
  // Add the band names into the correct <div>
  currentBand = bands[loopTracker]
  band.innerHTML += "<p>" + currentBand + "</p>"
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  vegetable.innerHTML += "<p>" + currentVeggie + "</p>"
}
















// // The number of loops to perform (what if the array changes?)
// var loopCount = 5;

// // Keep track of which band we're on in the loop
// var currentBand = "";

// // Keep track of which veggie we're on in the loop
// var currentVeggie = "";

// // Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById(???);

// // Get a reference to the appropriate DOM element for vegetables
// var veggieElement = ???;

// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

//   // Add the band names into the correct <div>
//   currentBand = ???;


//   // Add the veggie names into the correct <div>
//   currentVeggie = ???;

// }