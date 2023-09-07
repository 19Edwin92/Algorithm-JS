const solution = (a, b, c) => Math.min(a,b,c)

console.log("1. 세 수 중 최솟값", solution(12, 25, 41));


/*
100 이하의 자연수 세걔를 받고 가장 작은 값을 출력하는 프로그램 
function solution(a, b, c){
    let answer;
    if(a<b) answer=a;
    else answer=b;
    if(c<answer) answer=c; 
    return answer;
}

*/
