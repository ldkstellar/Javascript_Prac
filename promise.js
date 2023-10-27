// 비동기 작업이 가질 수 있는 3가지 상태
/* 
    pending(대기) 상태 resolve fulfilled(성공) reject rejected (실패)상태
*/

function isPositive(number,resolve,reject) {
    setTimeout(()=>{
        if (typeof number === 'number') {
            //resolve
            resolve(number>=0?'양수':'음수');
        }else{
            // reject
            reject('주어진 값이 숫자형이 아닙니다');
        }
    },2000);
    
}

isPositive([10],(res)=>{console.log('성공적으로 수행됨',res);},(err)=>{console.log('실패 하였음',err);});

function isPositiveP(number) {
    const excutor = (resolve,reject)=>{
        setTimeout(()=>{
            if (typeof number === 'number') {
                console.log(number);
                //resolve
              return  resolve(number>=0?'양수':'음수');
            }else{
                // reject
               return reject('주어진 값이 숫자형이 아닙니다');
            }
        },2000);

    }
    
    const asyncTask = new Promise(excutor);// promise 객체를 사용한 비동기 처리 함수를 반환
    return asyncTask;//
}

const res = isPositiveP(1);
res.then((res)=>{console.log('작업성공',res);}).catch((err)=>{console.log('작업실패',err);});// 1.작업 성공 2.작업 실패
//1. return이 resolve일 경우 2.return이  reject일 경우
res.catch((err)=>{
    console.log('숫자형아님');// 
});