function validate() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var check = document.getElementById("check").checked;

    if (fname == "" || lname == "" || email == "" || pass == "") {
        alert("Please fill in all fields.");
        return;
    }

    if (pass !== cpass) {
        alert("Passwords do not match!");
        return;
    }

    if (!check) {
        alert("Please accept the terms and conditions.");
        return;
    }

    // Hide the form and show success message
    document.getElementById("regForm").style.display = "none";
    document.getElementById("msg").innerText = "Registration complete! Welcome, " + fname + " " + lname + ".";
}