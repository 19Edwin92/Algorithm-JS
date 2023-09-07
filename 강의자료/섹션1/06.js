const solution = (arr) => {
  let count = 0;
  let min = Number.MAX_SAFE_INTEGER
  arr.forEach((element) => {
    if (element % 2 !== 0) {
      count+=element;
      min > element && (min = element);
    }
  });
  return `홀수합 ${count}, 최소홀수 ${min}`;
};

arr = [12, 77, 38, 41, 53, 92, 85];
console.log("6. 홀수", solution(arr));

/*
    function solution(arr){
        let answer=[];
        let sum=0, min=1000;
        for(let x of arr){
            if(x%2===1){
                sum+=x;
                if(x<min) min=x;
            }
        }
        answer.push(sum);
        answer.push(min);     
        return answer;
    }
    
    arr=[12, 77, 38, 41, 53, 92, 85];
    console.log(solution(arr));
*/
