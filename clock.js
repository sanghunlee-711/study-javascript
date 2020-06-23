
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ?`0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
//삼항연산자라고 함 if -> ? else - > : 가 됨 mini if이다.
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

//setInterval(함수, 실행할시간간격(milisecond기준임 3000 = 3초))
