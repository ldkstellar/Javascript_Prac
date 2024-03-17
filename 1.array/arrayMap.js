let arr = [1,2,3,4,5,6,7,8,10];
/*Map 메서드는 배열내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환 합니다.
 *forEach 메서드는 배열내의 요소들의 순회만 한다
 */
let myArr = arr.map((element, index)=>{
    return element *2
;});
console.log(myArr);
