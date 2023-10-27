function dealay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}

// async function helloAsync (){ //함수에 async 키워드를 작성하면 함수의 리턴 값은 promise의 객체에 들어간다.즉, then resolve는 리턴 값이 된다는 것 이다.
//     return dealay(3000).then(()=>{
//         return 'hello async';
//     });

// }

async function helloAsync (){ //함수에 async 키워드를 작성하면 함수의 리턴 값은 promise의 객체에 들어간다. 즉, then resolve는 리턴 값이 된다는 것 이다.
   await dealay(3000);// 비동기 함수에서 await을 사용하면 함수내 await 밑에 라인 코드는 동기적으로 코드가 실행이 된다. 
   return 'hello';
}

helloAsync().then((res)=>console.log(res));





