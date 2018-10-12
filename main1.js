window.onload = function () {
    var register = localStorage.getItem('register');
    var fname = localStorage.getItem('fname');
    var lname = localStorage.getItem('lname');
    var email = localStorage.getItem('email');
    var phone = localStorage.getItem('phone');
    var address = localStorage.getItem('address');
    if (fname != "undefined" || fname != "null") {
        document.getElementById('fname').innerHTML = "Hello " + fname;
        document.getElementById('email').innerHTML = "Your Registered Email Address is " + email;
        document.getElementById('phone').innerHTML = "Phone number provided is " + phone;
        document.getElementById('address').innerHTML = "We will contact you at " + address;
    }
}