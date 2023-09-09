const solution = (str) => {
  let transForm = str.toLowerCase()
  let reverse = [...transForm].reverse().join("")
  return transForm === reverse ? "YES" : "NO"
}

let str = "gooG";
console.log(solution(str));

/*  1. 회문문자열
    이효리  : 앞으로 읽어도 이효리, 뒤로 읽어도 이효리 
    대소문자를 구분하지 않는다. 
 */

function solutionExam1(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

// 문자열을 단순하게 뒤집어서 비교하는 방법도 있지... 앞뒤가 같아야 하니까 
function solutionExam2(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") != s) return "NO";
  return answer;
}

const solution1 = (str) =>{
  let transform = str.toLowerCase()
  let divide = str.length
  let befor = [...transform].splice(0, divide/2).reverse().join("")
  let after = transform.slice(divide%2 === 0 ? divide/2 : Math.ceil(divide/2))
  return befor=== after ? "YES" : "NO"
}