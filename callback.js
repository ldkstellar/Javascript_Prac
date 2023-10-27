const checkMood = (mood,goodCallback,badCallback)=>{

    if(mood === "good") {
        goodCallback();
    }
    else {
        badCallback();
    }
}

function cry() {
    console.log("action :: cry");
}

function sing() {
    console.log("action :: sing");
}

function dance() {
    console.log("action :: dance");
}

checkMood("bad",()=>sing(),()=>cry());// 함수를 다른 함수로 콜백 할때는 함수명만 입력 해야 한다.