const solution = arr => {
  let rank = [...arr].sort((a,b) => b-a)
  return arr.map(list => rank.findIndex(rank => rank===list)+1)
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));


/*  5. 등수구하기
    학생의 국어점수 입력, 각 학생의 등수를 입력된 순서대로 출력하는 프로그램 
    같은 점수, 높은 등수로 동일처리 한다. 1등이 3명이면, 다음은 4등이 되는 것이다. 
    O(n*log(n))
    sort()는 퀵소드 또는 머지소드와 같은 O(n*log(n))의 시간 복잡도를 가지는 정렬 알고리즘이다.
    시간복잡도에 있어서 중첩반복문은 O(n^n)으로 들어가지만, 반복문의 나열은 O(n)이다.
    이런 점에서 아래의 중첩반복문보다 해당 코드가 효울성있는 코드이다. */



const solutionExam2 = (arr) => {
  let cnt = 1;
  let rankList = {};
  let sort = [...arr].sort((a, b) => b - a);
  sort.forEach(
    (point, idx) => point !== sort[idx - 1] && (rankList[point] = cnt + idx)
  );
  return arr.map((point) => rankList[point]);
};

const solution2 = (arr) => {
    return arr.map((num) => arr.filter((list) => list > num).length + 1);
    /*  결국 새로운 배열을 반환하는 문제
          반환을 위한 값은 자신보다 큰 값이 있는지에 대한 여부
          아 필터를 그래서 사용했구나.. */ 
  };

const solution3 = (arr) => {
  let cnt = 1;
  let rankList = new Map();
  let sort = [...arr].sort((a, b) => b - a);
  sort.forEach(
    (point, idx) => point !== sort[idx - 1] && rankList.set(point, cnt + idx)
  );
  return arr.map((point) => rankList.get(point));
};

// O(n^2)
function solutionExam(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

// O(n*log(n))
const solutionErr1 = (arr) => {
  const result = arr
    .map((point, idx) => [point, idx])
    .sort((a, b) => b[0] - a[0]);
  const sort = result
    .map((result, idx) => [idx + 1, result[1]])
    .sort((a, b) => a[1] - b[1]);
  return sort.map((sort) => sort[0]);
}; // 그런데 이문제는 동률일 때는 해석하지 않았음으로 문제가 있는 코드이다.


//  첫 번째 함수가 더 효율적인 선택이며, 두 번째 함수는 정확한 결과를 반환하더라도 시간 복잡도 측면에서는 비효율적이다.

const solution4 = (arr, result={}) => {
  [...arr].sort((a,b)=> b-a).forEach((list, idx) => !result[list] && (result[list]=idx+1))
  return arr.map(list => result[list])
}

const solution5 = arr => {
  let rank = [...arr].sort((a,b) => b-a)
  return arr.map(list => rank.findIndex(rank => rank === list)+1)
}