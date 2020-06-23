const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; 

//다량의 todo를 배열로 저장하기 위함임.



//const cleanToDos에 보이는 filter함수를 이용해서 toDos array에 있는 모든 아이템을 통해 함수를 실행하고
//그리고 return의 조건을 통해 true 인 아이들만을 통해 새로운 array를 만들게 됨.
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    }); // filter는 함수하나를 실행시킴
    toDos = cleanToDos;
    saveToDos();

}


//console.dir(evnet.target)을 통해 father tage 가 parentNode라는 것을 알아냄
//얘를 이용해서 html에서 todo삭제하는거임.

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));//local storage는 기본적으로 모든데이터를 string으로 저장하기 떄문에 우리가 만든 array를 string으로 바꿀 필요가 있음.
    
}
//위의 const tdDos 를 가져와서 local에 저장하는 일을 하기위해 만듬.


function paintToDo(text) {  // html에서 끌어오는게 아닌 무언가를 새로 생성하고 싶을때는 createElement
    const li = document.createElement("li"); //create empty li
    const delBtn = document.createElement("button"); //create btn
    const span = document.createElement("span"); //create span
    const newId = toDos.length + 1; //length는 array길이 알려줌. -> newId = id 는 array 길이에 +1한것이 되겠지 ?
    delBtn.innerText = "⚒"; //give emoji to delBtn
    delBtn.addEventListener("click", deleteToDo);// html에서 todolist삭제를 위해 addeventlistener를 통해 dlelteToDo 함수 실행하도록 선언해줌.
    span.innerText = text //input text inside of span
    li.appendChild(delBtn);  //input delBtn inside of li
    li.appendChild(span); //input span inside of li
    li.id = newId; //li에 없던 아이디를 추가해주는 것. newId의 toDos.length+1을 통해서!
    toDoList.appendChild(li);
    const toDoObj = {
        text: text, //text라는 keydp text라는 value가 옴.
        id: newId
    };

    toDos.push(toDoObj); //toDosarray안에 toDoObj를 넣는 과정.
    saveToDos();// push 다음 호출해야 이게 저장되겠지 ?
} // appendChild: input sth inside of father tag


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
} // 자동삭제 방지 및 inputform에 값을 넣음.

function something(toDo) {
    paintToDo(toDo.text);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); //local stroage에 toDos명목으로 값을 넣기 위함임.
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);//string으로 불러와진걸 object로 json이용하여 바꿔버림
        parsedToDos.forEach(something);
    };//foreach는 array에 담겨있는 함수를 하나씩 호출 해수즌 것임.
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
} // 실행용

init();

//json -> js object notation for string to ob and ob to string