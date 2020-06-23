const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad(){
    console.log("finished loading")
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber +1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);
    
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}
// random 으로 number를 가져올거임, 이 가져오는 넘버는 이미지 이름이 될것임 그렇게 배경 랜덤으로 바꿀예정
//Math.ranom() 사용 예정 
// 5까지 아무수나 랜덤으로 가지고 오고 싶으면 Math.random()*5 하면된다.
//Math.floor 는 내림 Ceil은 올림임.
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();