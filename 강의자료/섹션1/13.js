const solution = (str, transform="") => {
    for (list of str) {
        list === list.toLowerCase()
        ? transform+=list.toUpperCase()
        : transform+=list.toLowerCase()
    }
    return transform
}
console.log(solution("StuDY"));

/*  13. 대소문자 변환
    문자열 자료형의 불변성 문제가 있다. 
    처음에는 str을 반환하니, 변경되지 않은 내용이 그냥 전달되었다. 이는 변경된 자료를 메모리에 할당하지 않은 부분 때문이다. 
    하단의 시도는 map과 join을 사용하여 직관적이며 함수형 프로그래밍 스타일을 적용한 방법이라고 한다. 
*/

function solutionExam(s){  
    let answer="";
    for(let x of s){
        if(x===x.toUpperCase()) answer+=x.toLowerCase();
        else answer+=x.toUpperCase();
    }
    return answer;
}

const solution1 = (str) => {
    return [...str]
        .map(str => str === str.toUpperCase() 
            ? str.toLowerCase() 
            : str.toUpperCase()).join("")
}