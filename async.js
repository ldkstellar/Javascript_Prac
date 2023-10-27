function taskA(a,b){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const res  =  a + b;
        resolve(res);
    },3000);
   });
   
        // console.log('A 작업 끝');
}

function taskB(a,b){
    
    const excutor = (resolve,reject)=>{

        setTimeout(()=>{
            const res  =  a * b;
            resolve(res);
        },1000);
    }
    
    return new Promise(excutor);
        // console.log('A 작업 끝');
}

function taskC(a,){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            const res  =  a *  -1;
            resolve(res);
        },2000);
    })
   
        // console.log('A 작업 끝');
}


taskA(3,1).then((a_res)=>{
    console.log('A result는 ',a_res);// then chaing
    return taskB(a_res,3);
}); //함수선언 

console.log();

taskA(3,1).then((b_res)=>{// 함수 정의
    console.log('B result는',b_res);
    return taskC(b_res);
}).then((c_res)=>{
    console.log('C result는',c_res);
});



    // taskA(3,4 , (res)=>{console.log('A Task Result :',res);});
    // taskB(5,5,(res)=>{console.log('B Task Result :',res);});
    // taskC(14,(res)=>{console.log('C Task Result :',res);});
    // console.log('코드 끝');

// const myCallBack = (a)=>{
//     console.log(a);
//     --a;
//     if (a >0) {
//         myCallBack(a);        
//     }
// }
// myCallBack(5);

// taskA(4,5,(a_res)=>{
//     console.log('A result:',a_res);
//     taskB(a_res,10,(b_res)=>{
//         console.log('B result',b_res);
//         taskC(b_res,(c_res)=>{
//             console.log('C result',c_res);
//         });
//     });
// });

