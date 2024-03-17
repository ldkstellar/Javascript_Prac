const iframe = document.createElement('iframe');// 프레임
document.body.appendChild(iframe);//html의 바디태그에 추가하는 메서드네 
const FrameObject = iframe.contentWindow.Object;// iframe 속한 전역개체
console.log(Object === FrameObject);//메인 프레임의 오브젝트와 비교 false가 나온다.
