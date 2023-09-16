const solution = (str, stack=[], result=0) => {
    for(let i=0;i<str.length; i++) {
        if(str.charAt(i) === "(" ) stack.push('(')
        else{
            stack.pop()
            str.charAt(i-1) === "(" ? (result+=stack.length) : result++
        }
    }
    return result
}

// let a="()(((()())(())()))(())";
let a="(((()(()()))(())()))(()())"
console.log(solution(a));

/*  5. 쇠막대기
    // 괄호 문제는 보통 스택입니다. 
    효율적인 작업을 위해서 쇠막대기를 아래에서 위로, 레이저를 위에서 수직으로 발사하여 쇠막대기를 자른다. 
    쇠막대기는 자신보다 긴 쇠막대기만 위에 놓을 수 있지만, 끝점은 겹치지 않도록 놓는다. 
    레이저는 여는 괄호와 닫는 활호의 인접한 쌍으로 표현된다. 
    쇠막대기의 왼쪽 끝은 여는 괄호로, 끝은 닫힌 괄호로 표현된다. 

    소괄호 : 여는괄호는 쇠막대기의 시작, 닫는괄호는 쇠막대기의 끝이다. 
    중첩소괄호 : 쇠막대기가 쌓인다는 내용이다. 
*/

function solutionExam(s){
    let answer=0;
    let stack=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==='(') stack.push('(');
        else{
            stack.pop(); 
            if(s[i-1]==='(') answer+=stack.length;
            else answer++;
            //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
        }
    }                          
    return answer;
}


const solution1 = (str,stack=[], result=0) => {
    for(let i=0; i<str.length; i++) {
        str.charAt(i) ==='(' 
            ? stack.push('(')
            : stack.pop() && str.charAt(i-1) === '(' 
                ? result+=stack.length
                : result++
    }
    return result
}