const isPrime = num => {
    if(num === 1) return false
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if(num % i === 0) return false
      }
    return true;
};

const solution = (arr, result=[]) => {
    for(list of arr) {
        const reverseNum = +[...String(list)].reverse().join("")
        isPrime(reverseNum) === true && result.push(reverseNum)
    }
    return result
}


let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

/*  2. 뒤집은 소수
    소수판별함수 1과 자신으로만 나눌 수 있는, 제곱근을 이용하면 되었던 것 같아. 
    그런데 기억할 것은 1은 소수가 아니야 
 */

function isPrime1(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solutionExam1(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

function isPrime2(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solutionExam2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}
