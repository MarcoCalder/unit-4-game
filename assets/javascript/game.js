// A random number needs to be generated as the number to reach for each game. 
// Each crystal holds a specific value that adds to the players score each time it is clicked. 
// When a crystal is clicked, no value shows up for that crystal, only a total score for the user.
// User wins when the total score matches the random number from the beginning. 
var targetNum
var score
var blueCrystal
var orangeCrystal
var purpleCrystal
var redCrystal


// random number generator that gets displayed on the screen
Math.floor(Math.random() * 121) + 19
// assign hidden values to each crystal 
for(var i = 0; i < $("crystals").length; i++) {
    var crystalNum = getRandomInt(1, 13);
    $("#crystals"+i).val(gemNum);
}
function resetGame() {
    // reset the game
    // pick any new target number between 1-100
targetNum = getRandomInt(19, 120);
// display to page
$("#target-num").text(targetNum);
score = 0;
$("#score-num").text(score);
for(var i = 0; i < $("crystals").length; i++) {
    var crystalNum = getRandomInt(1, 13);
    $("#crystals"+i).val(crystalNum);
}

