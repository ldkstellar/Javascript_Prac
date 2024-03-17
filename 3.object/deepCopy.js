/* 재귀함수를 활용한 깊은 복사 */
const iu = {
    name : '아이유',
    age : 30,
    album : {
      Lilac : "타이틀곡",
      Palette : 2017
    }
  }
  
  const copy = (obj) => {
    
    if(typeof obj !== "object" || obj === null){
      return obj;
    }
    
    const deepCopyObj = {};
    
    for(let key in obj){
      deepCopyObj[key] = copy(obj[key]);
    }
    
    return deepCopyObj;
  }
  
  const iu2 = copy(iu);
  iu2.album.Lilac = 2021;
  
  console.log(iu);
  console.log(iu2)