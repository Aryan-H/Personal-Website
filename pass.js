document.getElementById("passwordSubmit").addEventListener("click", function () {
    var password = document.getElementById("passwordInput").value;
    
    if (password === "universe") {
        document.getElementById("passwordInput").style.display = "none"; 
        document.getElementById("passwordSubmit").style.display = "none"; 
        var passwordMessage = document.querySelector(".password-message"); 
        if (passwordMessage) {
            passwordMessage.style.display = "none"; 
        }
        document.getElementById("protectedLink").style.display = "inline-block"; 
    } else {
        alert("Incorrect password. Please try again.");
    }
});