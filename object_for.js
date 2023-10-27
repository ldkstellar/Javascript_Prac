const person = {
    name:"이동규",
    age :26,
    tall:168
}

const personValue = Object.values(person);

for (let index = 0; index < personValue.length; index++) {
    console.log(`${personValue[index]}`);
    
}

