const solution = (cnt, stack=[]) => {
  for(list of cnt) {
    if(!isNaN(list)) stack.push(+list)
    else {
      let y = stack.pop()
      let x = stack.pop()
      list === "+" && stack.push(x+y)
      list === "-" && stack.push(x-y)
      list === "*" && stack.push(x*y)
      list === "/" && stack.push(x/y)
    }
  }
  return stack[0]
}

let str = "352+*9-";
console.log(solution(str));

/*  4. 후위식 연산
    연산한 결과를 출력하는 프로그램을 작성하면된다. 
    만약 3*(5+2)-9 전위식를 후위연산식으로 표현하면, 352+*9- 표현되며, 결과는 12 
    후위연산식은 1~9, +,-,*,/ 연산자로만 이뤄진다. */

function solutionExam(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

const solution1 = (str, stack = []) => {
  for (list of str) {
    if (!isNaN(list)) {
      stack.push(+list);
    } else {
      // 연산자를 만나면, 연산을 수행하기 위해서 stack에서 내용을 가져온다.
      let y = stack.pop();
      let x = stack.pop();
      list === "+" && stack.push(x + y);
      list === "-" && stack.push(x - y);
      list === "*" && stack.push(x * y);
      list === "/" && stack.push(x / y);
    }
  }
  return stack[0];
};

const solution2 = (str, stack = []) => {
  for (list of str) {
    if (!isNaN(list)) {
      stack.push(+list);
    } else {
      let y = stack.pop();
      let x = stack.pop();
      list === "+" && stack.push(x + y);
      list === "-" && stack.push(x - y);
      list === "*" && stack.push(x * y);
      list === "/" && stack.push(x / y);
    }
  }
  let result = stack[0];
  return result;
};

const solution3 = (str, stack = []) => {
  for (list of str) {
    if (!isNaN(list)) stack.push(+list);
    else {
        let y = stack.pop()
        let x = stack.pop()
        list==="+" && stack.push(x+y)
        list==="-" && stack.push(x-y)
        list==="*" && stack.push(x*y)
        list==="/" && stack.push(x/y)
    }
  }
  return stack[0]
};