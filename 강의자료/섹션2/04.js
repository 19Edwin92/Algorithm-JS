const solution = (arr, count=0, result=0) => {
  arr.forEach(arr => arr===1 && (result+=(1+count)) ? count++ : count=0)
  return result
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

/*
4. 점수 계산
    - 조건을 산출하는데 1시간 가량 걸렸다. 결국 GPT의 도움으로 reduce를 통한 문제풀이를 단행했다. 
    - for문 성능면에서는 일반적으로 가장 빠르며, 제어문을 자유롭게 사용할 수 있다. 성능과 복잡한 반복작업에서 유용하다.
    - forEach문 가독성과 배열을 간편하게 순회하며 값에 접근한다. 인덱스 관리에 대해 걱정할 필요가 없지만, break, continue 같은 제어문을 사용할 수 없다. 간단한 배열 순회 작업
    - reduce문 배열을 순회하면서 값을 축적하거나 다양한 변환 작업을 수행하기에 적합, 가독성이 좋고, 함수형 프로그래밍 스타일을 지원, 값을 계산하거나 필터링하는 작업에 유용하다. 
        - 결국 고차함수를 내부에 가지고 있기에, 반환문을 사용하여 누적값을 수정하고, 다음 순회 단계로 전달해야 한다. 
    - 간단한 배열 순회 작업에는 reduce나 forEach가 좋고, 복잡한 작업과 성능에서는 for문이 고려된다. 
    solution 함수는 함수형 프로그래밍 스타일을 사용하고 초기값을 객체로 설정하여 가독성을 높인 것이 주요 차이점
*/

function solutionExam(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}

const solutionForEach = (arr) => {
  let calc = 0, preArrNum = 1;
  arr.forEach((_, idx) => {
    if (arr[idx - 1] === 1) (calc += preArrNum), preArrNum++;
    else preArrNum = 1;
  });
  return calc;
};

const solution1 = (arr) => {
  return arr.reduce(
    (calc, _, idx) => {
      arr[idx - 1] === 1
        ? (calc.calc += calc.preArrNum++)
        : (calc.preArrNum = 1);
      return calc;
    },
    { calc: 0, preArrNum: 1 }
  ).calc;
};