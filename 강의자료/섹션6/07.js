const solution = (essentail, plan) => {
    let queue = [...essentail]
    for(list of plan) {
        if(queue.includes(list)) {
            if(list !== queue.shift()) return "NO"
        }
    }
    return queue.length > 0 ? "NO" : "YES"
}

let a="CBA";
let b="BCDAGE"; // CBA 순이라면, 가능한 것이다. 
console.log(solution(a, b));

/*  7. 교육과정설계
    수업계획짜기, 필수과목이 있는데, 반드시 이수하고, 순서도 정해짐
    a는 필수과목
    b는 총과목 수, 순서대로 짜야한다. 
    제대로 된 설계는 제대로 된 설계는 CBDAGE이다. 그 이외는 잘못된 수업계획이 된다. 
    수업계획상 각 과목은 무조건 이수된다고 가정해야 한다. 
    맞다면 YES를 틀리다면, NO를 작성하라. 

    - 두 코드의 기능은 동일하지만 변수 이름과 코드 스타일의 차이가 있습니다.
*/

function solutionExam(need, plan){
    let answer="YES";
    let queue=need.split('');
    for(let x of plan){
        if(queue.includes(x)){
            if(x!==queue.shift()) return "NO";
        }
    }
    if(queue.length>0) return "NO";  
    return answer;
}

const solution1 = (essential, plan) => {
    const queue = [...essential]
    for(let list of plan) {
        if(queue.includes(list) && list!==queue.shift()) return "NO"
    }
    if(queue.length>0) return "NO"
    else return "YES"
}

const solution2 = (essential, plan) => {
    let queue = [...essential]
    for(list of plan) {
        if(queue.includes(list) && list!==queue.shift()) return "NO"
    }
    if(queue.length > 0) return "NO"
    return "YES"
}

const solution3 = (essentail, plan) => {
    let queue = [...essentail]
    for(list of plan) if(queue.includes(list) 
        && list !== queue.shift()) return "NO"
    if(queue.length > 0) return "NO"
    return "YES"
}