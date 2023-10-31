let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
}

//creating a fn and calling it every second

setInterval(() => {
    let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
    
    let d;
    d = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours == 0 ? hours = 12 : hours;
    
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;
    
    document.querySelector(".hour_num").innerText = hours;
    document.querySelector(".min_num").innerText = minutes;
    document.querySelector(".sec_num").innerText = seconds;
    document.querySelector(".am_pm").innerText = d;

}, 1000);