const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting =document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function askForName() {
    form.classList.add(SHOWING_CN);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
       askForName();
    }else{
        paintGreeting(currentUser);  //someone
    }
}

function init(){
    loadName();
}

init();


//locals storage는 js의 작은 정보들이 브라우저에 저장되어 있는 것들임.. 수정도 가능하니 한번 재미로해보장