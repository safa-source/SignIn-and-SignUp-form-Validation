

function signUpValidation() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    // Error Handling
    document.getElementById("signup-username").style.border = "";
    document.getElementById("usernameError").innerHTML = "";

    document.getElementById("signup-email").style.border = "";
    document.getElementById("emailError").innerHTML = "";

    document.getElementById("signup-password").style.border = "";
    document.getElementById("passwordError").innerHTML = "";


    // Form Validation
    let isValid = true;

    if (username == "") {
        document.getElementById("signup-username").style.border = "0.5px solid red";
        document.getElementById("usernameError").innerHTML = "This field is required";
        isValid = false;
    }

    if (email == "") {
        document.getElementById("signup-email").style.border = "0.5px solid red";
        document.getElementById("emailError").innerHTML = "This field is required";
        isValid = false;
    }

    if (password == "") {
        document.getElementById("signup-password").style.border = "0.5px solid red";
        document.getElementById("passwordError").innerHTML = "This field is required";
        isValid = false;
    }

    // After Completing Form
    if (isValid) {
        alert("Sign-Up Successfully")
        document.getElementById("signup-username").value = "";
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";
        window.location.href = "sign-in.html"
    }

}

function signInValidation() {
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;

    // Error Handling
    document.getElementById("signin-email").style.border = "";
    document.getElementById("emailError").innerHTML = "";

    document.getElementById("signin-password").style.border = "";
    document.getElementById("passwordError").innerHTML = "";


    // Form Validation
    let isValid = true;

    if (email == "") {
        document.getElementById("signin-email").style.border = "0.5px solid red";
        document.getElementById("emailError").innerHTML = "This field is required";
        isValid = false;
    }

    if (password == "") {
        document.getElementById("signin-password").style.border = "0.5px solid red";
        document.getElementById("passwordError").innerHTML = "This field is required";
        isValid = false;
    }

    // After Completing Form
    if (isValid) {
        alert("Sign-In Successfully")
        document.getElementById("signin-email").value = "";
        document.getElementById("signin-password").value = "";
        window.location.href = "welcomePage.html"
    }

}
