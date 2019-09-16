function orderMade() {
  // Initialized alert message and retrieves special instructions from user
  var instruction = document.getElementById('instructions').value.trim();
  var instructionLower = instruction.toLowerCase();
  var alertmsg = "We have recognized your order. Unfortunately, cheesecake contains dairy. "
  alertmsg += "We apologize for being unable to fulfill your needs. Thank you."
    
  // Checks if special instructions contains the word "vegan"
  if (instructionLower.search("vegan") != -1) {
    alert(alertmsg);
  }
  else {

    // Hides user input elements and displays thank you message to user
    document.getElementById('userinput').style.display = "none";      
    var quantity = document.getElementById('quantity').value;
    document.getElementById('header').innerHTML = "Thank you! Your order has been placed.";
    document.getElementById('cc-qu').innerHTML = quantity;
    document.getElementById('details').style.display = "inline-block";

    //
    //  External Citation
    //  Date: September 9, 2019
    //  Problem: Wanted to find a method to find the checked radio item.
    //  Resource: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_checked4
    //  Solution: I used the for-loop strategy found in this example.
    //
    // Checks for which flavor chosen and saves it for display in order details
    var toppinglisting = document.forms[0];
    var topping = "none";
    for (index = 0; index < toppinglisting.length; index++){
      if (toppinglisting[index].checked){
        topping = toppinglisting[index].value;
      }
    }
    document.getElementById('cc-type').innerHTML = topping;

    // Checks if special instructions were given and displays it accordingly
    if (instruction.length == 0){
      document.getElementById('sp-info').innerHTML = "None";
    }
    else {
      document.getElementById('sp-info').innerHTML = instruction;
    }
  }
}
  
//
//  External Citation
//  Date: September 9, 2019
//  Problem: Was experiencing difficulty properly selecting an element within another
//  Resource: Peer Dylan Pascua
//  Solution: Dylan helped me by showing me how to proper select a specific element with 
//            another
//
$(document).ready(function(){
  $("#monthselection p").click(function(){
    document.getElementById("month").innerHTML = $(this).attr("value");
  });
});