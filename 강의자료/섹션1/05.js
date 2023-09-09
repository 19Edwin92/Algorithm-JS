const solution = arr => Math.min(...arr)

let arr=[5, 7, 100, 32, 20, 9, 11];
console.log(solution(arr));

/*
5. 최솟값 구하기



let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
console.log("큰수 입력하기", Number.MAX_SAFE_INTEGER)
*/

// const solution = arr => Math.min(...arr)


function solutionExam(arr){         
    let answer, min=Number.MAX_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min) min=arr[i];
    }
    answer=min;
    return answer;

}


const solution1 = arr => Math.min.apply(null, arr)  // 배열의 최소/최대를 구할 수 있지만, 전개구문 쓰자 