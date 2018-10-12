function san() {
    document.getElementById("register").reset();
}

function formValidate() {

    var fname = document.register.fname.value;
    if (fname == "") {
        alert('please enter the first name');
        document.getElementById('san').innerHTML = "please enter the first name";
        document.register.fname.focus();
        return false;
    }

    var lname = document.register.lname.value;
    if (lname == "") {
        alert('please enter the last name');
        document.getElementById('san').innerHTML = "please enter the last name";
        document.register.lname.focus();
        return false;

    }

    var email = document.register.email.value;
    if (email == "") {
        alert('please enter your e-mail id');
        document.getElementById('san').innerHTML = "please enter the e-mail ID";
        document.register.email.focus();
        return false;
    } else {
        var emailPattern = /^(([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4}))$/;
        if (emailPattern.test(email) == false) {
            alert('please enter valid e-mail id');
            document.getElementById('san').innerHTML = "please enter the valid email ID";
            document.register.email.focus()
            return false;
        }
    }

    var phone = document.register.phone.value;
    if (phone == "") {
        alert('Enter the mobile number first');
        document.register.phone.focus();
        document.getElementById('san').innerHTML = "please enter the mobile number";
        return false;
    } else {
        var pattern = /^([0-9]{10,12})$/;
        if (pattern.test(phone) == false) {
            alert('enter valid mobile no');
            document.register.phone.focus();
            document.getElementById('san').innerHTML = "please enter valid mobile number";
            return false;
        }
    }
    var address = document.register.address.value;
    if (address == "") {
        alert('Enter Your Address');
        document.register.address.focus();
        document.getElementById('san').innerHTML = "please enter the address field";
        return false;
    }
}


function isNumber(event) {
    var keycode = event.keyCode;
    if (keycode > 48 && keycode < 57) {
        return true;
    }
    return false;
}

window.onload = function () {
    if (localStorage) {
        document.getElementById('register').addEventListener('submit', function (evt) {
            evt.preventDefault();
            var fname = document.getElementById('fname').value;
            localStorage.setItem('fname', fname);
            var lname = document.getElementById('lname').value;
            localStorage.setItem('lname', lname);
            var email = document.getElementById('email').value;
            localStorage.setItem('email', email);
            var phone = document.getElementById('phone').value;
            localStorage.setItem('phone', phone);
            var address = document.getElementById('address').value;
            localStorage.setItem('address', address);
            route();
            return false;
        });
    }
}

function route() {
    window.location.href = "index.html";
}