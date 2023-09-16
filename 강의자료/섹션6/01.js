const solution = (cnt, stack=[]) => {
  for(list of cnt) {
    if(list === "(") stack.push(list)
    else {
      if(stack.length === 0) return "NO"
      stack.pop()
    }
  }
  return stack.length > 0 ? "NO" : "YES"
}

let a = "(())()";
// let a = "(()(()))(()"
console.log(solution(a));

/*  1. 올바른 괄호
    스택에 대해서 드디어 다룬다. 선입후출(LIFO) 이라고 한다. 
    JS에서는 배열을 통해서 만듭니다.
    push 를 통해서 입력됩니다. 
    pop 을 통해서 최근 자료를 꺼냅니다.
    - GPT에 따르면, 기능과 정확성 면에서 두 스니펫은 동등하며 동일한 결과를 생성합니다.
*/

function solutionExam(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

const solution1 = (a, stack = [], result = "YES") => {
  for (list of a) list === "(" ? stack.push(list) : stack.pop();
  stack.length > 0 && (result = "NO");
  return result;
};

const solution2 = (str, stack = []) => {
  for (list of str) {
    if (list === "(") stack.push(list);
    else {
      // 닫는 괄호인데, 스택에 여는 괄호가 없으면 NO를
      // 그렇지 않다면, 스택의 마지막 요소를 제거해준다.
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  // 치리된 결과의 길이가 0보다 크면, 여는 괄호가 남아 있다는 것이다. 즉 NO를 반환하면 된다.
  if (stack.length > 0) return "NO";
  return "YES";
};
