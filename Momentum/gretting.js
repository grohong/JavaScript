const form = document.querySelector(".js-form"),
    intpu = form.querySelector("input");
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currnetUser",
    SHOING_CN = "showing";

function paintGreeting(text) {
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null) {
        // she is not
    } else {
        paintGreeting(currentUser)
    }
}

function init() {
    loadName();
}

init();