const solution = (str, s) => {
  let count = 0;
  for (let findS of str) findS === s && count++;
  return count;
};

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "G"));

/* 
10. 문자 찾기
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 
- ★★★ 이터러블은 for.. of 순회가 가능하다.

function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

*/
