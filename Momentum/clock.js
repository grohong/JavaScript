const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const secounds = date.getSeconds();

    clockTitle.innerText = `${hours}:${minutes}:${secounds}`
}

function init() {
    getTime()
}

init();