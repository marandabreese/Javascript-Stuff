function checkForm() {
    let testName = document.forms["coolform"]["name"].value;
    if (testName == '') {
        alert("Please enter your name");
        return false;
    }
    let testPhone = document.forms["coolform"]["phone"].value;
    if (testPhone == '') {
        alert("Please enter your phone number");
        return false;
    }
    let testEmail = document.forms["coolform"]["email"].value;
    if (testEmail == '') {
        alert("Please enter your email");
        return false;
    }
}