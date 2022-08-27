var array =  [
          "- Round 1",
          "- Round 2",
          "- Round 3",
          "- Round 4",
          "- Round 5",
          "- Round 6",
          "- Round 7",
          "- Round 8",
          "- Rounds 1-2",
          "- Rounds 3-4",
          "- Rounds 5-6",
          "- Rounds 7-8",
          "by KO, TKO or DQ",
          "by Points (after 8 rounds)",
              ]
var array2 =  [
          "- Round 1",
          "- Round 2",
          "- Round 3",
          "- Round 4",
          "- Round 5",
          "- Round 6",
          "- Round 7",
          "- Round 8",
          "- Round 9",
          "- Round 10",
          "- Rounds 1-2",
          "- Rounds 3-4",
          "- Rounds 5-6",
          "- Rounds 7-8",
          "- Rounds 9-10",
          "by KO, TKO or DQ",
          "by Points (after 10 rounds)",
							]
var array3 =  [
          "- Round 1",
          "- Round 2",
          "- Round 3",
          "- Round 4",
          "- Round 5",
          "- Round 6",
          "- Round 7",
          "- Round 8",
          "- Round 9",
          "- Round 10",
          "- Round 11",
          "- Round 12",
          "- Rounds 1-3",
          "- Rounds 4-6",
          "- Rounds 7-9",
          "- Rounds 10-12",
          "- Rounds 1-6",
          "- Rounds 7-12",
          "by KO, TKO or DQ",
          "by Points (after 12 rounds)",
						]


document.getElementById("result").innerHTML = '';

var eightRounds = document.getElementById("eightRounds");
eightRounds.onclick = function() {
  var value = document.getElementById("string").value;
  for (var i=array.length; i--;) {
    array[i] = value + " " + array[i]+ "<br>";
}

var finalArray = array.join("");
document.getElementById("result").innerHTML = finalArray;

};



var tenRounds = document.getElementById("tenRounds");
tenRounds.onclick = function() {
  var value = document.getElementById("string").value;
  for (var i=array2.length; i--;) {
    array2[i] = value + " " + array2[i]+ "<br>";
}

var finalArray2 = array2.join("");
document.getElementById("result").innerHTML = finalArray2;

};


var twelveRounds = document.getElementById("twelveRounds");
twelveRounds.onclick = function() {
  var value = document.getElementById("string").value;
  for (var i=array3.length; i--;) {
    array3[i] = value + " " + array3[i]+ "<br>";
}

var finalArray3 = array3.join("");
document.getElementById("result").innerHTML = finalArray3;

};




// const input = document.querySelector("#string");
// const clear = document.querySelector("#clear");

// clear.addEventListener("click", () => {
//     input.value = "";
//     input.focus();
//   });



function ClearFields() {
     document.getElementById("string").value = "";
     document.getElementById("result").innerHTML = "";
}

  function copyToClipboard(id) {
    var from = document.getElementById(id);
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

// var $button = $("button");
// $button.prop("disabled", true);

// $("#string").keyup(function(){
//   $button.prop("disabled", (this.value === "")? true : false);
// });