import fs from 'fs/promises';

async function getNum(fileName){
    return parseInt(await fs.readFile(fileName,'utf-8'),10);
}

try{
    const numberPromise = [1,2,3].map(i =>getNum(`${i}.txt`));

    const numbers = await Promise.all(numberPromise);/* 3개의 텍스트 파일을 읽히고 파싱이 완료 될 때 까지 기다리는 함수가  병렬적으로 실행 되는 것이 아니다. 정해진 시간내에 번갈아가며 실행되는 것이다.*/ 
    console.log(numbers[0] + numbers[1]+numbers[2]);

}

catch(error){
    console.error('errer:',error);
}