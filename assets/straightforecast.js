$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input placeholder="Last Name, F" type="text" name="mytext[]"/><a href="#" class="remove_field"><i class="fas fa-minus-circle fa-lg mx-4 data-toggle="tooltip" data-placement="top" title="Remove input field""></i></a></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});


function straightForecast() {
   let result = '';
   const inputs = document.querySelectorAll("input");
   for (let i = 0; i < inputs.length; i++) {
       for (let j = 0; j < inputs.length; j++) {
           if (i === j) continue;
           result += '1. ' + inputs[i].value + '/2. ' + inputs[j].value + '<br>';
       }
   }
   
   document.getElementById('outcome').innerHTML = result; 
}



function enhancedDouble() {
   let result2 = '';
   const inputs = document.querySelectorAll("input");
   for (let i = 0; i < inputs.length; i++) {
       for (let j = i+1; j < inputs.length; j++) {
         
           result2 += inputs[i].value + '/' + inputs[j].value + '<br>';
           
       }
   }
   
   document.getElementById('outcome').innerHTML = result2; 
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


var toggleSubmit = function() {
  var isDisabled = ![].some.call(document.querySelectorAll("input[type=text]"), function(input) {
    return input.value.length;
  });
  
  var submitBtn = document.querySelector("input[type=submit]");
  
  if (isDisabled) {
    submitBtn.setAttribute("disabled", "disabled");
  } else {
    submitBtn.removeAttribute("disabled");
  }
};

document.querySelector("form").addEventListener("input", toggleSubmit, false);