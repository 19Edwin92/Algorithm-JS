const solution = (a,b,c) => {
    let arr = [a,b,c].sort((a,b) => a-b)
    return arr[2] < arr[0]+arr[1] ? "YES" : "NO"
}

console.log("2. 삼각형 판별하기", solution(6, 7, 11));

/*
서로 다른 새 개의 막대 길이가 주어지면, 이 세 막대로 삼각형을 만들 수 있다.
가능하면 YES, 없으면 NO
피타고라스 정의 두변의 합이, 남은 하나의 보다 길어야지 

function solution(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    if(tot-max<=max) answer="NO"; 
    return answer;
}
*/

const solution1 = (a, b, c) => {
    let maxNum = Math.max(a,b,c)
    let lostNum = [a,b,c].filter(num => num !== maxNum).reduce((pre,num) => pre+num, 0)
    return lostNum > maxNum ? "YES" : "NO"
}