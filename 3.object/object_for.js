const person = {
    name:"이동규",
    age :26,
    tall:168
}

const personValue = Object.values(person);//객체의 값들을 배열로 저장

for (let index = 0; index < personValue.length; index++) {
    console.log(`${personValue[index]}`);// 배열로 출력한다.
}

