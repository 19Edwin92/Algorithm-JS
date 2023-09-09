const solution = (a, b, c) => Math.min(a, b, c);
const solution0 = (a, b, c, result = a) => {
  a < b && a < c 
    ? (result = a) 
    : b < c 
    ? (result = b) 
    : (result = c);

  return result;
};

console.log("1. 세 수 중 최솟값", solution0(3, 5, 1));

/*
100 이하의 자연수 세걔를 받고 가장 작은 값을 출력하는 프로그램 
function solution(a, b, c){
    let answer;
    if(a<b) answer=a;
    else answer=b;
    if(c<answer) answer=c; 
    return answer;
}
*/

const solution1 = (a, b, c) => Math.min(a, b, c);
