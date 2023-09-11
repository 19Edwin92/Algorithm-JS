const solution = (date, arr,result=0) => {
    
    for(let i=0; i<arr.length-date;i++) {
        const copy = [...arr]; 
        result = Math.max(result, copy.slice(i, i+date).reduce((pre, cur) => pre+cur, 0))
    }
    
    return result
}

const slidingWindow = (window, arr, result=count=0) => {
    for(let defaultData=0; defaultData<window;defaultData++) count+=arr[defaultData]
    result=count

    for(let slide=window;slide<arr.length;slide++) {
        count+=(arr[i]-arr[i-window])
        result=Math.max(result, count)
    }
    return result
}



let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

/*  5. 최대 매출
    Sliding Window 알고리즘, for문 하나로 끝낼 수 있습니다.
    - 연속된 날짜의 합 중에서 최댓값을 찾는 문제를 해결합니다.(이중for문을 돌리는 것이 일반적이겠죠.)
    
*/

function solutionExam(k, arr){
    let answer, sum=0;
    // 초기설정, 첫 count
    for(let i=0; i<k; i++) sum+=arr[i];
    answer=sum;

    // SlidingWindow 
    for(let i=k; i<arr.length; i++){
        sum+=(arr[i]-arr[i-k]);
        answer=Math.max(answer, sum);
    }                    
    return answer;
}
