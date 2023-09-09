const solution = (a, b) => {
  return a.map((list, idx) =>
    list === b[idx]
      ? "D"
      : (list === 1 && b[idx] === 3) || list - b[idx] === 1
      ? "A"
      : "B"
  );
};

let a = [2, 3, 3, 1, 3]; // a의 정보
let b = [1, 1, 2, 2, 3]; // b의 정보
console.log(solution(a, b));

/*
3. 가위바위보
// 1 가위
// 2 바위 
// 3 보 

처음 조건문
result === 3 && b[idx] === 1
    ? "B"
    : result === 1 && b[idx] === 3
        ? "A"
        : result === b[idx] 
            ? "D"
            : result > b[idx] 
                ? "A"
                : "B")
*/

function solutionExam(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D ";
    else if (a[i] === 1 && b[i] === 3) answer += "A ";
    else if (a[i] === 2 && b[i] === 1) answer += "A ";
    else if (a[i] === 3 && b[i] === 2) answer += "A ";
    else answer += "B ";
  }

  return answer;
}

// 함수형 프로그래밍의 접근 방식을 사용하고 있어 더 간결하고 가독성이 좋다.
const solution1 = (a, b) => {
  const result = a.map((result, idx) =>
    result === b[idx]
      ? "D"
      : (result === 1 && b[idx] === 3) || // a가 가위이고, b가 보이거나 , a의 승리
        (result === 2 && b[idx] === 1) || // a의 바위가 이기는 상황
        (result === 3 && b[idx] === 2) // a의 보가 이기는 상황
      ? "A"
      : "B"
  );

  return result.join("\n");
};
