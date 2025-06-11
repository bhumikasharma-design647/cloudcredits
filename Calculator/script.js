
function dis(val) {
    // Get the input field and append the clicked value to it
    //document - refers to your index.html document
    //. - inside the html document
//getElementById - refers to a particular element with particular id in html document
    //.value - refers to the particular thing/.property you want to change about 
    //that particular element in html
    document.getElementById("result").value += val;
}

// Function to clear the calculator display
function clr() {
    // Clear the input field
    document.getElementById("result").value = "";
}

function del() {
    // Get the current value from the input field
    let currentValue = document.getElementById("result").value;
    // Remove the last character from the current value
    let newValue = currentValue.slice(0,-1);
    // Update the input field with the new value
    document.getElementById("result").value = newValue;
}

//Function to evaluate the expression and display the result
function solve() {
    // Get the current expression from the input field
    let x = document.getElementById("result").value;   
    // Use the JavaScript eval() function to calculate the result
    let y = eval(x);
    // Display the result in the input field
    document.getElementById("result").value = y;
}


function sqr(){
  let c = document.getElementById("result").value;
  let ans = Math.sqrt(c);
  document.getElementById("result").value = ans;
}






