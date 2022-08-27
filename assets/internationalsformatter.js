var splitName = document.getElementById("splitName");

splitName.onclick = function() {
  document.getElementById("result").innerHTML = '';

  var countryName = document.getElementById("countryName").value;
  var value = document.getElementById("fullName").value;


  //CASE CONVERT//
  var value2 = value.toLowerCase();
  // value2 = value2.replace(/\b./g, function(m) {
  //   return m.toUpperCase();
  // });

	value2 = value2.replace(/(^\w|\s\w)/g, function(m){ return m.toUpperCase(); });
  var value3 =value2.trim();
  
  value3.split('\n').forEach(fullname => {
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


    /* For Name flip */
    document.getElementById("result").innerHTML += firstname + " " + lastname + " (" + countryName + ")" + "<br>";



  });
};


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



