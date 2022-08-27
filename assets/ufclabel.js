var array =  [
          "- Round 1",
          "- Round 2",
          "- Round 3",
          "- Rounds 1-2",
          "- Rounds 3-Decision",
          "by KO, TKO or DQ - Round 1",
          "by KO, TKO or DQ - Round 2",
          "by KO, TKO or DQ - Round 3",
          "by Submission - Round 1",
          "by Submission - Round 2",
          "by Submission - Round 3",
          "by Decision",
          "by KO, TKO or DQ",
          "by Submission",
              ]
var array2 =  [
          "- Round 1",
          "- Round 2",
          "- Round 3",
          "- Round 4",
          "- Round 5",
          "- Rounds 1-2",
          "- Rounds 3-4",
          "- Rounds 5-Decision",
          "by KO, TKO or DQ - Round 1",
          "by KO, TKO or DQ - Round 2",
          "by KO, TKO or DQ - Round 3",
          "by KO, TKO or D - Round 4",
          "by KO, TKO or D - Round 5",
          "by Submission - Round 1",
          "by Submission - Round 2",
          "by Submission - Round 3",
          "by Submission - Round 4",
         "by Submission - Round 5",
          "by Decision",
          "by KO, TKO or DQ",
          "by Submission",
							]



document.getElementById("result").innerHTML = '';

var threeRounds = document.getElementById("threeRounds");
threeRounds.onclick = function() {
  var value = document.getElementById("string").value;
  for (var i=array.length; i--;) {
    array[i] = value + " " + array[i]+ "<br>";
}

var finalArray = array.join("");
document.getElementById("result").innerHTML = finalArray;

};


var fiveRounds = document.getElementById("fiveRounds");
fiveRounds.onclick = function() {
  var value = document.getElementById("string").value;
  for (var i=array2.length; i--;) {
    array2[i] = value + " " + array2[i]+ "<br>";
}

var finalArray2 = array2.join("");
document.getElementById("result").innerHTML = finalArray2;

};




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


var $button = $("button");
$button.prop("disabled", true);

$("#string").keyup(function(){
  $button.prop("disabled", (this.value === "")? true : false);
});