const solution = (arr, leng={length:arr.length}) => {
    const list = [
        ...arr,
        ...Array.from(leng, (_,inner) => arr.map((_,row) => arr[row][inner])),
        Array.from(leng, (_,idx)=> arr[idx][idx]),
        Array.from(leng, (_,idx)=> arr[arr.length-idx-1][arr.length-idx-1]),
    ]
    return Math.max(...list.map(list => list.reduce((pre, cur) => pre+cur,0)))
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));

/*  6. 격자판 최대합
    N*N 격자판이 주어진다. 이때, 각 행의 값, 각 열의 합, 두 대각선의 합 중에 가장 큰 합을 출력한다. 
*/

function solutionExam(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    let n=arr.length;
    let sum1=sum2=0;
    for(let i=0; i<n; i++){
        sum1=sum2=0;
        for(let j=0; j<n; j++){
            sum1+=arr[i][j]; // 수평
            sum2+=arr[j][i]; // 수직
        }
        answer=Math.max(answer, sum1, sum2);
    }
    sum1=sum2=0;
    for(let i=0; i<n; i++){
        sum1+=arr[i][i]; // 대각선1
        sum2+=arr[i][n-i-1]; // 대각선2
    }  
    answer=Math.max(answer, sum1, sum2); 
    return answer;
}

const solution1 = (arr) => {
    const resultArr = [
        ...arr, 
        ...arr.map((_,location) => Array.from({length:arr.length}, (_,idx) => arr[idx][location])),
        Array.from({length:arr.length}, (_, idx) => arr[idx][idx]),
        Array.from({length:arr.length}, (_,idx) => arr[arr.length-idx-1][arr.length-idx-1])
    ]

    return Math.max(...resultArr.map(list => list.reduce((pre, cur) => pre+cur, 0)))
}

const solution2 = (arr) => { 
    const arrFrom = type => Array.from({length:arr.length}, (_,idx) =>
    type==="vertial" 
        ? arr.map((_,idx2) => arr[idx2][idx]) 
        : type==="diagonalL" 
            ? arr[idx][idx] 
            : arr[idx][arr.length-1-idx])

    let newArr = [...arr, ...arrFrom("vertial"), arrFrom("diagonalL"), arrFrom()]
    return Math.max(...newArr.map(list => list.reduce((calc, num) => calc+num, 0)))
}
