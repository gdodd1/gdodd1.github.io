const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "prudential") {
        location.replace("https://forms.gle/ENyDup8vak9UYYER8");
    } 
    else if (username === "brother" && password === "bettertheman") {
        location.replace("https://drive.google.com/drive/folders/1OFn0KlvGjCR5Lw-b4iqfOx3x7eLGN_BA?usp=sharing");
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
