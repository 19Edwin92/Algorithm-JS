const solution = (arr, result=0) => {
  for(let i =0; i<arr.length; i++) {
    for(let j =0; j<arr.length; j++) {
      const currentNum = arr[i][j]
      const isTop = i === 0;
      const isBottom = i === arr.length-1;
      const isLeft = j === 0;
      const isRight = j === arr.length-1;
        (isTop || arr[i-1][j] < currentNum) && 
        (isBottom || arr[i+1][j] < currentNum) &&
        (isLeft || arr[i][j-1] < currentNum) &&
        (isRight || arr[i][j+1] < currentNum) && result++
    }
  }
  return result
}

// 하나의 값을 산출받아 되는 문제 

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

/*  7. 봉우리
    N*N 격자판이 주어지며, 각 격자에는 그 지역의 높이가 기록된다. 
    상하좌우 숫자보다 큰 숫자는 봉우리 지역이다. 
    봉우리지역이 몇개 있는지 알아내는 프로그램을 작성하라. 

    이 문제의 목적은 각 원소를 주변 원소들과 비교하여 특정 조건을 검사하는 것이므로, 일반적으로 이러한 유형의 문제는 최소한 O(n^2)의 시간 복잡도를 가지게 됩니다
    이중 for 루프와 이중 reduce 함수를 사용한 접근은 성능 측면에서 일반적으로 큰 차이가 없습니다.
*/

function solutionExam(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

const solution1 = (arr, count = 0) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === 0 || (i > 0 && arr[i - 1][j] < arr[i][j])) {
        if (
          i === arr.length - 1 ||
          (i < arr.length - 1 && arr[i + 1][j] < arr[i][j])
        ) {
          if (j === 0 || (j > 0 && arr[i][j - 1] < arr[i][j])) {
            if (
              j === arr.length - 1 ||
              (j < arr.length - 1 && arr[i][j + 1] < arr[i][j])
            ) {
              count++;
            }
          }
        }
      }
    }
  }
  return count;
};

const solution2 = (arr, count = 0) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const isTop = i === 0;
      const isBottom = i === arr.length - 1;
      const isLeft = j === 0;
      const isRight = j === arr.length - 1;
      const current = arr[i][j];

      (isTop || arr[i - 1][j] < current) &&
        (isBottom || arr[i + 1][j] < current) &&
        (isLeft || arr[i][j - 1] < current) &&
        (isRight || arr[i][j + 1] < current) &&
        count++;
    }
  }
  return count;
};

const solutionWithReduce = (arr) => {
    return arr.reduce((_, row, arrIdx) => {
      return row.reduce((rowCount, currentNum, innerIdx) => {
        const isTop = arrIdx === 0;
        const isBottom = arrIdx === arr.length - 1;
        const isLeft = innerIdx === 0;
        const isRight = innerIdx === arr.length - 1;
  
        if (
          (isTop || arr[arrIdx - 1][innerIdx] < currentNum) &&
          (isBottom || arr[arrIdx + 1][innerIdx] < currentNum) &&
          (isLeft || row[innerIdx - 1] < currentNum) &&
          (isRight || row[innerIdx + 1] < currentNum)
        ) {
          return rowCount + 1;
        }
        return rowCount;
      }, 0);
    }, 0);
  };

