var splitName = document.getElementById("splitName");
splitName.onclick = function() {
  document.getElementById("result").innerHTML = '';
  document.getElementById("result2").innerHTML = '';
  var value = document.getElementById("fullName").value;

  //CASE CONVERT//
      var value2 = value.toLowerCase();
      // value2 = value2.replace(/\b./g, function(m){ return m.toUpperCase(); });
    value2 = value2.replace(/(^\w|\s\w)/g, function(m){ return m.toUpperCase(); });
      value2.split('\n').forEach(fullname => {

    var spaceIndex = fullname.indexOf(" ");
    var firstname;
    var lastname;


    if (spaceIndex == -1) {
      lastname = fullname;
      lastname = "";
    } else {
      firstname = fullname.substring(0, spaceIndex);
      lastname = fullname.substr(spaceIndex + 1);       
    }



 			// document.getElementById("result").innerHTML += lastname + ", " + firstname[0] + " / "; 
    let str = document.getElementById("result").innerHTML += [lastname, firstname[0]].filter(Boolean).join(", ") + " / ";
  
      str = str.slice(0, -3); 
      document.getElementById("result2").innerHTML = str;







  
  });
};


var $button = $("button");
$button.prop("disabled", true);

$("#fullName").keyup(function(){
  $button.prop("disabled", (this.value === "")? true : false);
});
// const card = document.querySelector("#result");
// const textarea = document.querySelector("textarea");
// const clear = document.querySelector("#clear");

// clear.addEventListener("click", () => {
//     textarea.value = "";
//     textarea.focus();
//   });

function ClearFields() {
     document.getElementById("fullName").value = "";
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



