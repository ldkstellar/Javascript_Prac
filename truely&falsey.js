const getName = (props)=>{
    // 자바스크립트 null 과 undefined 예외 처리를 하는 방법
    if (!props) {
       return "객체가 아닙니다";
    }

    return person.name;
}


let person = undefined;

const myname = getName(person);
console.log(myname);

let count =-1;

if (count) {
    console.log("true");
}