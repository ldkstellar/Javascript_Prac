// 메인 스레드와 별개의 스레드를 생성하여 멀티 태스킹을 구현 할 수 있다.
// 브라우저 스레드 생성하기


const worker = new Worker('worker.js');
worker.postMessage('hello, world');
