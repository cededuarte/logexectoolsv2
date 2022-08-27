






var splitName = document.getElementById("splitName");
splitName.onclick = function() {
  document.getElementById("result").innerHTML = '';
  var value = document.getElementById("fullName").value;


  //CASE CONVERT//
      var value2 = value.toLowerCase();
      // value2 = value2.replace(/\b./g, function(m){ return m.toUpperCase(); });
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





document.getElementById("result").innerHTML += [lastname, firstname].filter(Boolean).join(", ") + " <br> ";

    
  
  });
};





var trimName = document.getElementById("trimName");
trimName.onclick = function() {
  document.getElementById("result").innerHTML = '';
  var value = document.getElementById("fullName").value;
     
  //CASE CONVERT//
      var value2 = value.toLowerCase();
      // value2 = value2.replace(/\b./g, function(m){ return m.toUpperCase(); });
       value2 = value2.replace(/(^\w|\s\w)/g, function(m){ return m.toUpperCase(); });
  
       var value3 = value2.trim();
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

      document.getElementById("result").innerHTML += lastname + ", " + firstname[0]+ " <br> ";

  
  });
};


var caseConvert = document.getElementById("caseConvert");

caseConvert.onclick = function() {
  document.getElementById("result").innerHTML = '';

      var value = document.getElementById("fullName").value;
  
  
  //CASE CONVERT//
      var value2 = value.toLowerCase();
      // value2 = value2.replace(/\b./g, function(m){ return m.toUpperCase(); });
       value2 = value2.replace(/(^\w|\s\w)/g, function(m){ return m.toUpperCase(); });

      var value3 = value2.trim();

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

    document.getElementById("result").innerHTML += firstname + " " + lastname+ "<br>";
         


  });
};



//Tennis Doubles


var fixName = document.getElementById("fixName");

fixName.onclick = function() {
  document.getElementById("result").innerHTML = '';

  var value = document.getElementById("fullName").value;


  //CASE CONVERT//
  var value2 = value.toLowerCase();
  value2 = value2.replace(/(^\w|\s\w)/g, function(m) {
    return m.toUpperCase();
  });
  
 var value3 =value2.trim();
 value3.split('\n').forEach(fullname => {
    var spaceIndex = fullname.indexOf(" / ");
    var firstname;
    var lastname;
    var comma = ",";
    var insertAt = -2;
    if (spaceIndex == -1) {
      lastname = fullname;
      lastname = "";
    } else {
      lastname = fullname.substring(0, spaceIndex);
      firstname = fullname.substr(spaceIndex + 3);


      var spaceIndex2 = firstname.indexOf(" ");
      var spaceIndex3 = lastname.indexOf(" ");
      var slicedFirst;
      var slicedInitialFirst;
      var slicedLast;
      var slicedInitialLast;

      slicedFirst = firstname.substring(0, spaceIndex2);
      slicedInitialFirst = firstname.substr(spaceIndex2);
      slicedLast = lastname.substring(0, spaceIndex3);
      slicedInitialLast = lastname.substr(spaceIndex3);     
         
      
		var firstNameSliced = slicedFirst+", "+slicedInitialFirst;
    var lastNameSliced = slicedLast+", "+slicedInitialLast;
    

    document.getElementById("result").innerHTML += lastNameSliced + "/" + firstNameSliced + "<br>";
   }
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



