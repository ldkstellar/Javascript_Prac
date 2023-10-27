const myfun  = ()=>{
    return  new Promise((resolve,reject)=>{
        resolve();
        console.log('코드 끝');
        
    });
}

// myfun().then(()=>{
//     console.log('콜백 시작');
// });

const testfun = (cb)=>{
cb();
console.log('코드시작');

}

//testfun(()=>console.log('hello'));


const t =  new Promise((resolve)=>{
    resolve();
});
t.then(()=>console.log('이것은 테스트입니다'));
