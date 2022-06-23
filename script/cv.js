// Validate the form input
function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (!x) {
        alert("Name is required");
    }else if(x.length<2){
        alert("Name should be at least 2 characters.");
    }else{
        alert("Thanks! Your information is received!")
    }
}
