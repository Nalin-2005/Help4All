var states = ["Punjab", "Himachal Pradesh", "Haryana", "Uttarakhand", "Rajasthan", "Gujrat", "Uttar Pradesh", "Bihar", "Madhya Pradesh", "Jharkhand", "Chattisgarh", "West Bengal", "Odisha", "Telangana", "Andhra Pradesh", "Maharashtra", "Goa", "Karnataka", "Kerala", "Tamil Nadu", "Assam", "Sikkim", "Arunachal Pradesh", "Meghalaya", "Mizoram", "Manipur", "Nagaland", "Tripura", "Jammu & Kashmir", "Ladakh", "Chandigarh", "Delhi", "Daman & Diu", "Puducherry", "Andaman & Nicobar islands", "Dadra & Nagar Haveli", "Lakshadweep"];
// Declared all states which need suggessions

// This function should be initiated to activate suggestions where 
function autocomplete(inp, arr) {
  /* inp is the element to which suggestions are to be applied
  arr is the array which should come for sugessions */

  var currentFocus;
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false;}    // Close all dropdown menus(so that it can be updated) and return if text value of this textbox is null

    currentFocus = -1;
    a = document.createElement("DIV");    //Create a DIV element, configure it and add it to the webpage
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);


    for (i = 0; i < arr.length; i++) {                                        // For each state
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {  //Check if starting letters match
        b = document.createElement("DIV");                                    //Create a div for each matching state
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        b.addEventListener("click", function(e) {                   // Add function to write the text of the div ifclicked the div
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();    // close all lists because the value has been entered
        });
        a.appendChild(b);       // Add div to the suggestions list
      }
    }
  });

  inp.addEventListener("keydown", function(e) {   // Use up, down arrow keys and enter key to select the option
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      
      if (e.keyCode == 40) {         // If down arrow is pressed
        currentFocus++;
        addActive(x);

      }else if (e.keyCode == 38) {  // If up arrow key is pressed
        currentFocus--;
        addActive(x);

      } else if (e.keyCode == 13) {  // If Enter key is pressed
        e.preventDefault();   //Prevent form submission
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {           // Classify item [x] as active 
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {        // Classify item [x] as inactive
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {   // Close the suggestion list
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

  document.addEventListener("click", function (e) {   // close suggestions list if user clicks outside the textbox
    closeAllLists(e.target);
  });
}