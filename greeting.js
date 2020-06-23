const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting =document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
//form은 기본적으로 방울 같이 올라가서 사라져버림 (다른것에 영향을 주며 ) 근데 우리는 이걸 저장하고 싶으니까 일단 default값인 사라짐을 막는것임
//그러기 위해서 preventDefault를 사용하는 것.

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
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