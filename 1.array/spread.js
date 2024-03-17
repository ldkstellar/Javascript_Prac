

let arr = [1,2,3];
let arr2  = [];
arr2 = [...arr];//값을 전달 
let arr3 = [...arr,4,5,6];
console.log(arr3);




const myobj = {
    
    a:1,
    myfun:function print() {
        console.log(`안녕하세요`);
    }
};

const sameObj = {...myobj};
sameObj.myfun()


