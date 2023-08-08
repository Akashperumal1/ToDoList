function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username ==="akash" && password ==="123") {
        window.location = "index.html";
    } else {
        alert("Invalid username or password!");
    }
}