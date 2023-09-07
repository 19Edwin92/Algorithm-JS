const solution = (arr) => {
    let calc = arr.reduce((pre, cur) => pre+cur, 0)
    arr.forEach((element, idx) => {     
        for(let i = idx+1; i< arr.length; i++) {
            let sum = element+arr[i]
            if(calc-sum === 100) {
                arr.splice(idx, 2)
            }
        }
    });
    return arr
} // BigO = n(n^3)

function solution2(arr){
    let answer=arr;
    let sum=answer.reduce((a, b)=>a+b, 0);
    let flag = 0;
    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++){
            if((sum-(answer[i]+answer[j]))==100){
                answer.splice(j, 1);
                answer.splice(i, 1);
                flag = 1;
                break;
            }
        }
        if(flag == 1) break;
    }
    return answer;
}


// 그런데 이 문제에는 오류가 있다. 경우의 수가 여러개인 경우가 나온다. 
// 문제를 보면, 입력된 순서대로 일곱 난쟁이의 키를 출력한다가 된다. 


let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
console.log(solution(arr2)); // 정답코드 

/*
8. 일곱난쟁이
function solution(arr){
    let answer=arr;
    let sum=answer.reduce((a, b)=>a+b, 0);
    let flag = 0;
    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++){
            if((sum-(answer[i]+answer[j]))==100){
                answer.splice(j, 1);
                answer.splice(i, 1);
                flag = 1;
                break;
            }
        }
        if(flag == 1) break;
    }
    return answer;
}

일과를 마치고 오니 난쟁이가 9명인 것이다. 
2명을 찾아야 하는데, 이전 난쟁이들의 키의 합은 100 이었다. 키가 주어진다면 가능한 정답이 여러가진 경우에는 아무거나 출력한다. 
01 이중반복문을 돌면 됩니다. 
02 일단 총합을 계산하고, 연속되는 두 번지의 값을 뺀 값이 100이면 너다!!
03 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
*/