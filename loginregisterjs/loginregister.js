document.getElementById("resetBtn").addEventListener("click", function () {
    var sound2 = document.getElementById("audio2");
    sound2.playbackRate = 3;
    sound2.play();
    document.querySelector(".bg-modal").style.display = "flex";
});


document.querySelector(".button1").addEventListener("click", function () {
    var alert_item = document.querySelector(".alert_item3");
    var close_btn = document.querySelector(".icon-close3");
    var alert_wrapper = document.querySelector(".alert_wrapper3");
    var alert_backdrop = document.querySelector(".alert_backdrop3");
    const emailField = document.getElementById("email");
   
    if (emailField.value) {
        var sound2 = document.getElementById("audio2");
        sound2.playbackRate=3;
        sound2.play();
        alert_wrapper.classList.add("active");
        alert_item.style.top = "50%";
        document.querySelector(".bg-modal").style.display = "none";
        close_btn.addEventListener("click", function () {
            alert_item.classList.remove("active");
            alert_item.style.top = "-100%";
            alert_backdrop.style.display = "none";
            location.reload();
        });
        document.getElementById("resetLinkForm").reset();
    }

});
document.querySelector(".button2").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";

});

var state = false;

function toggle1() {
    if (state) {
        document.getElementById("password1").setAttribute("type", "password");
        document.getElementById("eye1").style.color = '#7a797e';
        state = false;
    }
    else {
        document.getElementById("password1").setAttribute("type", "text");
        document.getElementById("eye1").style.color = '#5887ef';
        state = true;
    }
}
function toggle2() {
    if (state) {
        document.getElementById("password2").setAttribute("type", "password");
        document.getElementById("eye2").style.color = '#7a797e';
        state = false;
    }
    else {
        document.getElementById("password2").setAttribute("type", "text");
        document.getElementById("eye2").style.color = '#5887ef';
        state = true;
    }
}
function toggle3() {
    if (state) {
        document.getElementById("password3").setAttribute("type", "password");
        document.getElementById("eye3").style.color = '#7a797e';
        state = false;
    }
    else {
        document.getElementById("password3").setAttribute("type", "text");
        document.getElementById("eye3").style.color = '#5887ef';
        state = true;
    }
}

var x = document.getElementById("login");
var s = document.getElementById("social");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    setTimeout(function () {
        s.style.visibility = "visible";
        s.style.opacity = "1";
    }, 700);
    error_message.style.padding = "0"
    text = "";
    error_message.innerHTML = text;
    return false;
}
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    setTimeout(function () {
        s.style.visibility = "hidden";
        s.style.opacity = "0";
    }, 700);
    error_message.style.padding = "0"
    text = "";
    error_message.innerHTML = text;
    return false;
}

function loginValidation() {
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var error_message = document.getElementById("error_message");
    var s = document.getElementById("social");
    var text;
    var alert_item = document.querySelector(".alert_item");
    var btn = document.getElementById("login-btn");
    var close_btn = document.querySelector(".icon-close1");
    var alert_wrapper = document.querySelector(".alert_wrapper");
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


 
    if (/\@/.test(email) || /\./.test(email) && email.length > 5) {
        if(!re.test(email)){
            var sound2 = document.getElementById("audio3");
            sound2.playbackRate=3;
            sound2.play();
        s.style.visibility = "hidden";
        s.style.opacity = "0";
        error_message.style.padding = "10px";
        text = "Please Enter A Valid Email";
        error_message.innerHTML = text;
        return false;
        }
    }
    if (email.length === 0) {
        var sound2 = document.getElementById("audio3");
        sound2.playbackRate=3;
        sound2.play();
        s.style.visibility = "hidden";
        s.style.opacity = "0";
        error_message.style.padding = "10px";
        text = "Please Enter Your Username";
        error_message.innerHTML = text;
        return false;
    }

    if (password.length < 5) {
        var sound2 = document.getElementById("audio3");
        sound2.playbackRate=3;
        sound2.play();
        s.style.visibility = "hidden";
        s.style.opacity = "0";
        error_message.style.padding = "10px";
        text = "Please Enter A Valid Password";
        error_message.innerHTML = text;
        return false;
    }

    else {
        var sound2 = document.getElementById("audio2");
        sound2.playbackRate = 3;
        sound2.play();
        alert_wrapper.classList.add("active");
        alert_item.style.top = "50%";
        error_message.style.padding = "0"
        text = "";
        error_message.innerHTML = text;
        var sound = document.getElementById("audio");
        sound.play();
        setTimeout(function () {
            window.location.replace("dashboard.html");
        }, 3500);


        close_btn.addEventListener("click", function () {
            alert_item.classList.remove("active");
            alert_item.style.top = "-100%";

        });


        return false;
    }
}

function registerValidation() {
    var name = document.getElementById("yourName").value;
    var email = document.getElementById("email2").value;
    var password = document.getElementById("password2").value;
    var repassword = document.getElementById("password3").value;
    var error_message = document.getElementById("error_message");
    var text;
    var alert_item = document.querySelector(".alert_item2");
    var btn = document.querySelector(".register-btn");
    var close_btn = document.querySelector(".icon-close2");
    var alert_wrapper = document.querySelector(".alert_wrapper2");
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name.length < 1) {
        var sound2 = document.getElementById("audio3");
        sound2.playbackRate=3;
        sound2.play();
        error_message.style.padding = "10px";
        text = "Please Enter A Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if (!re.test(email)) {
        var sound2 = document.getElementById("audio3");
        sound2.playbackRate=3;
        sound2.play();
        error_message.style.padding = "10px";
        text = "Please Enter A Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if (password.length < 5 || password.length > 16) {
        var sound2 = document.getElementById("audio3");
        sound2.playbackRate=3;
        sound2.play();
        error_message.style.padding = "10px";
        text = "Please Enter An Appropriate Length Password";
        error_message.innerHTML = text;
        return false;
    }

    if (!regularExpression.test(password)) {
        var sound2 = document.getElementById("audio3");
        sound2.playbackRate=3;
        sound2.play();
        error_message.style.padding = "10px";
        text = "Please Enter A Strong Password";
        error_message.innerHTML = text;
        return false;
    }

    if (repassword !== password) {
        var sound2 = document.getElementById("audio3");
        sound2.playbackRate=3;
        sound2.play();
        error_message.style.padding = "10px";
        text = "Please Re-enter The Password Correctly";
        error_message.innerHTML = text;
        return false;
    }

    if (!document.getElementById("checkbox1").checked) {
        var sound2 = document.getElementById("audio3");
        sound2.playbackRate=3;
        sound2.play();
        error_message.style.padding = "10px";
        text = "Accept Terms and Conditions";
        error_message.innerHTML = text;
        return false;

    }
    else {

        btn.addEventListener("click", function () {
            var sound2 = document.getElementById("audio2");
            sound2.playbackRate=3;
            sound2.play();
            alert_wrapper.classList.add("active");
            alert_item.style.top = "50%";
            error_message.style.padding = "0"
            text = "";
            error_message.innerHTML = text;
            var sound = document.getElementById("audio");
            sound.play();
            setTimeout(function () {
                window.location.replace("dashboard.html");
            }, 3500);
        });

        close_btn.addEventListener("click", function () {
            alert_item.classList.remove("active");
            alert_item.style.top = "-100%";

        });
        return false;

    }

}


function checkPasswordStrength() {
    document.getElementById("password-strength-status").style.display = "block";
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    if ($('#password2').val().length < 6) {
        $('#password-strength-status').removeClass();
        $('#password-strength-status').addClass('weak-password');
        $('#password-strength-status').html("Weak (should be atleast 6 characters.)");
    } else {
        if ($('#password2').val().match(number) && $('#password2').val().match(alphabets) && $('#password2').val().match(special_characters)) {
            $('#password-strength-status').removeClass();
            $('#password-strength-status').addClass('strong-password');
            $('#password-strength-status').html("Strong");
        } else {
            $('#password-strength-status').removeClass();
            $('#password-strength-status').addClass('medium-password');
            $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
        }
    }
}

function sound(){
    var sound2 = document.getElementById("audio2");
    sound2.playbackRate=3;
    sound2.play();
}

