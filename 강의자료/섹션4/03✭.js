let arr = [
  [3, 4, 1, 2], // 수학테스트1
  [4, 3, 2, 1], // 수학테스트2
  [3, 1, 4, 2], // 수학테스트3
];

const solution = (arr, mathScore={}) => {
  let count = result = 0;
  arr.forEach((list) => {
    list.forEach((rank, idx) => {
      mathScore[rank] = mathScore[rank] ? [...mathScore[rank], idx] : [idx]
    });
  });

  for(let i=1;i<=arr[0].length; i++) {
    for(let j=1;j<=arr[0].length; j++) {
      count=0
      if(i !== j) {
        for(let k=0;k<arr.length; k++) {
          mathScore[i][k] > mathScore[j][k] && count++
        }
      }
      count === arr.length && result++
    }
  }
  return result
}

/*  3. 멘토링
    현수네 반 선생님은 반 학생들의 수학점수 향상을 위헤 멘토링 시스템을 만드려고 한다 
    도와주는 학생 - 도움을 받는 학생 => 멘티는 수학테스트의 모든 등수가 앞서야 한다. 
    가능한 경우의 수를 모두 출력하라. 
    각 학생의 M번의 수학테스트 등수
    arr[i][j] > arr[arr.length-1][j] ? result.push(true) : result.push(false)
    그런데 자신을 제외한 모든 사람과 비교해야 하잖아... 그러면 반복분 3번 들어가는 이유가 있구나..

    첫번째줄, [ M 개 줄에 걸쳐 수학테스트 결과가, 앞부터 1등, 2등 3등 순으로 ]
    두번째줄, [ M 개 줄에 걸쳐 수학테스트 결과가, 앞부터 1등, 2등 3등 순으로 ]
    세번째줄, [ M 개 줄에 걸쳐 수학테스트 결과가, 앞부터 1등, 2등 3등 순으로 ]

    완전탐색하는 대표적인 문제입니다. 

*/

function solutionExam(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

const solutionCopy = (arr, answer=0) => {
  const testCase = arr.length;
  const students = arr[0].length;

  for (let i = 1; i <= students; i++) {
    for (let j = 1; j <= students; j++) {
      /*  먼저 i 학생과 j 학생비교를 위한 반복문
          비교학생(j)가 달라질 때마다 멘티-멘티 조건을 초기화 */ 
      let count = 0;    
      for (let test = 0; test < testCase; test++) {
        /*  다음으로 반복할 TestCase에 대한 반복이 여기에서 실행된다. 
        */
        let iScore = 0;
        let jScore = 0;
        for (let score = 0; score < students; score++) {
          arr[test][score] === i && (iScore = score);
          arr[test][score] === j && (jScore = score);
        }
        iScore > jScore && count++;
      }
      count === testCase && answer++;
    }
  }
  return answer
}

// console.log(solution(arr));
console.log(solutionCopy(arr));