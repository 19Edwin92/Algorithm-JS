const solution = (str, stack=[], result="") => {
    for(list of str) {
        list === "(" 
            ? stack.push(list) : list === ")" 
            ? stack.pop() : stack.length ===0 && (result+=list)
    }
    return result
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

/*  2. 괄호문자제거
    두 스니펫은 기본적으로 동일한 작업을 수행하지만 두 번째 스니펫(solution)은 변수 이름과 결과 누적 방식에서 더 명확하고 관습적인 방식을 사용한다.
*/

function solutionExam(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(x===')'){
            while(stack.pop()!=='(');
        }
        else stack.push(x);
    }
    answer=stack.join('');
    return answer;
}


const solution1 = (str, stack=[], result="") => {
    for (list of str) {
        list === "(" && stack.push(list)
        list === ")" && stack.pop()
        stack.length === 0 && list !== ")" && (result+=list)
    }
    return result
}