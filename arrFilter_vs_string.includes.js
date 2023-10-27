let arr1 = [1,2,3,4,5,6,7,8,10];
//array.filter함수는 filter를 통해 새로운 배열을 생성하는 메소드이다.
let result = arr1.filter((e)=>{
    if (e %2 === 0) {
        return e;// 짝수만 출력 즉 리턴값은 새로운배열에 push하는 메커니즘이다.
    }
});
console.log(result);

let myName = 'leedongkyu';
let myResult = myName.includes('lee');// 포함되어있으면 true 포함되지 않으면 false를 출력한다.

console.log(myResult);