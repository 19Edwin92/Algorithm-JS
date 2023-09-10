const solution = (arr, result=0) => {
    const transForm = arr
        .map(list => [[...String(list)]
        .reduce((calc, num) => calc+(+num), 0), list])
        .sort((a,b) => b[0]-a[0])
    for(maxNum of transForm) {
        transForm[0][0] === maxNum[0] && result < maxNum[1] && (result=maxNum[1])
    }
    return result
} // O(n)


let arr = [128, 1622, 460, 603, 40, 521, 137, 123, 4331];
console.log(solution(arr));

/*  1. 자리수의 합; 완전탐색
    완전 탐색은 가능한 모든 조합 또는 경우의 수를 시도하여 원하는 결과를 찾는 방법입니다.
    완전 탐색은 주어진 문제에 대한 모든 가능한 해를 검사하고, 그 중에서 최적의 해를 찾는 방법입니다.
*/

function solutionExam1(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
} //O(k) || O(n^2)로 근사


function solutionExam2(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

