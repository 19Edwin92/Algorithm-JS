
const solution = (arr, maxHeigth=arr[0], result=1) => {
  arr.forEach((list, idx) => idx > 0 && list > maxHeigth && (maxHeigth = list) && result++)
  return result
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

/*  2. 보이는 학생
    앞에 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다. 
    :: 수정 그러나 일련되는 앞의 가장 큰 값과 비교해야 하기에 위의 코드는 틀렸습니다.
    :: 이를 리듀서로 사용하고 싶었는데 하지 못했던 부분인데, 변수를 전언하기 보다, ChatGPT의 도움은
    :: 초기값을 {} 로 만들어서 관리하는 것이며, 전체 코드에서 .count로 반환하는 방법을 사용했다. 
    01 성능을 고려한다면 for문이 가장 빠르다. 단점은 코드가 복잡해질 수 있다. 간단한 반복적인 내용을
    02 forEach 는 가독성이 좋지만, break나 continue 와 같은 제어문을 사용할 수 없다. 
    03 배열을 순회하며 값을 축적하거나 다양한 변환 작업을 수행하기에 적합하다. 가독성이 좋고, 함수형 프로그래밍 스타일을 지원, 값을 계산하거나 필터링하는 작업에 유용 */

function solutionExam (arr) {         
  let answer=1, max=arr[0];
  for(let i=1; i<arr.length; i++){
      if(arr[i]>max){
          answer++;
          max=arr[i];
      }
  }
  return answer;
}

const solution1 = (arr) => {
  let count = 0;
  let maxHeight = 0;
  arr.forEach((element) => {
    if (element > maxHeight) {
      count++;
      maxHeight = element;
    }
  });
  return count;
};

const solution2 = (arr) => {
  return arr.reduce((count, height) => {
    return height > count.maxHeight 
      ? { count: count.count + 1, maxHeight: height } 
      : count;
  }, { count: 0, maxHeight: 0 }).count;
};
