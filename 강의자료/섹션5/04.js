const solution = (target, arr, end=count=result=0) => {
    for(let start=0; start<arr.length;start++) {
        count+=arr[start]
        while (count > target) count-=arr[end++]
        result+=start-end+1
    }
    return result
}

const a=[1, 3, 1, 2, 3];
const arr = [1, 2, 3, 4, 5];
const target = 5 // 7;
console.log(solution(target, a));

/*  4. 연속부분수열2
    투포인트 알고리즘, N개의 수로 이루어진 수열
    연속되는 합이 M이하기 되는 경우, 이전에는 동일한 경우였다면
*/

function solutionExam(m, arr){
    let answer=0, sum=0, lt=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        while(sum>m){
            sum-=arr[lt++];
        }
        answer+=(rt-lt+1);
    }               
    return answer;
}


