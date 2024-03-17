class Singleton {
  // 싱글톤 인스턴스를 저장할 클래스 변수
  static instance;
  // 싱글톤 생성자
  constructor() {
    // 이미 인스턴스가 존재하면 기존 인스턴스 반환
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // 새로운 인스턴스 생성
    this.name = "Singleton Instance";

    // 생성된 인스턴스를 저장
    Singleton.instance = this;

    // 필요한 초기화 코드 등을 작성할 수 있음

    // 생성된 인스턴스 반환
    return Singleton.instance;
  }
  print(){
    console.log(Singleton.name);
  }
  // 싱글톤 인스턴스를 가져오는 정적 메서드
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// 테스트
const instance1 = new Singleton();
const instance2 = Singleton.getInstance();
instance2.print();
console.log(instance1);
console.log(instance1 === instance2); // true
