const solution =(str,findAlphabet, count=0) => {
  for(find of str) find === findAlphabet && count++
  return count
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

/*  10. 문자 찾기
    한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 
    - ★★★ 이터러블은 for.. of 순회가 가능하다.
    - 이터러블 이기에, 배열로 만들필요 없이 for..of 문으로 접근하면 간단한 일이다. */

function solutionExam(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}


const solution2 = (str, s) => {
  let count = 0;
  for (let findS of str) findS === s && count++;
  return count;
};