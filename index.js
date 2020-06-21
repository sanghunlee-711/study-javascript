
const hoonInfo = {
    name:"Hoon",
    age : 33,
    gender : "Male",
    isHandsome: true,
    favMovies: ["Along the gods","LOTR", "OldBoy"],
    favFood: [
        {
            name:"Kimchi",
            fatty: false}, 
        {
            name:"Cheeseburger",
            fatty: true}
    ] //object의 array를 만듦
}; //data에 lable을 붙여준것인데 해당 데이터 뽑고 싶을때 .하고 lable명 적어주면 됨.

console.log(hoonInfo.favFood[0].fatty);
