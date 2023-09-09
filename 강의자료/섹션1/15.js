const solution = str => {
    let center = Math.ceil(str.length/2)-1
    return str.length%2 === 0 ? str.substr(center,2) : str.charAt(center)
}

console.log(solution("good"));

/*  15. 가운데 문자 출력
    문자열 탐색
    - slice 는 두개의 인자를 받는다. 시작점과 끝점이다. 0~2는 0~1번지의 내용을 반환한다. 
    - substring 역시 두개의 인자를 받는다. 두 메소드의 차이는 인자의 크기이다. substring은 인자를 오름차순으로 변환한다. 
    - 두 메소드는 구체적인 주소를 지정해줘야 한다는 점에 있다. 
    - substr는 시작점과 함께 몇개의 내용을 반환할지를 지정할 수 있다는 차이가. 있다. 
    - 특정인덱스 str.charAt() */

function solutionExam(s){  
    let answer;
    let mid=Math.floor(s.length/2)
    if(s.length%2===1) answer=s.substring(mid, mid+1);
    else answer=s.substring(mid-1, mid+1);
    //if(s.length%2===1) answer=s.substr(mid, 1);
    //else answer=s.substr(mid-1, 2);
    return answer;
}

const solution1 = (str) => {
    let center = Math.floor(str.length/2)
    return str.length%2 === 0 
        ? str.slice(center-1, center+1) 
        : str.charAt(center)
}