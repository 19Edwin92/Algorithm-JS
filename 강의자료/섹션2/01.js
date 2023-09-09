const solution = (arr, result=[arr[0]]) => {
    arr.forEach((list, idx) => idx > 0 && list > arr[idx-1] && result.push(list))
    return result
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));

/*
1. 큰 수 출력하기, 일차원 배열 탐색 

*/

function solutionExam (arr){         
    let answer=[];
    answer.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(arr[i]>arr[i-1]) answer.push(arr[i]);
    }
    return answer;
}

const solution1 = (arr) => {
    let newArr = [];
    arr.forEach((element, idx) => {
        if(idx === 0) {
           newArr.push(element) 
        } else {
            element > arr[idx-1] && newArr.push(element) 
        }
    });
    return newArr
}