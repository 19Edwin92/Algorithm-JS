const solution = (length,caseNum,arr) => {
    const calc = new Set();
    for(let i=0; i<length; i++) {
        for(let j=i+1; j<length; j++) {
            for(let k=j+1; k<length; k++) {
                calc.add(arr[i]+arr[j]+arr[k])
            }
        }
    }
    
    return [...calc].sort((a,b) => b-a).splice(caseNum-1,1)[0]
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

/*  5. K번째 큰 수
    같은 숫자의 카드가 여러장 있을 수도 있는데, 이 중에 3장을 뽑아 도한 값을 기록하고
    그 중에 가장 큰 값을 출력하라 
    매개변수1 : 카드의 숫자
    매개변수2 : 추출한 번호의 번지수
    매개변수3 : 배열 
*/

function solutionExam(n, k, card){
    let answer;
    let tmp = new Set();
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                tmp.add(card[i]+card[j]+card[k]);
            }
        }
    }
    let a=Array.from(tmp).sort((a, b)=>b-a);
    answer=a[k-1];
    return answer;
}