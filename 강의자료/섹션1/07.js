const solution = (restNum, arr, count=0) => {
    for(list of arr) +String(list).charAt(1) === restNum && count++
    return count
}

let arr=[25, 23, 11, 47, 53, 17, 33];
console.log("10부제 위반차량", solution(3, arr));


/*
7. 10부제
차량 10부제, 7이면 7, 17, 27일 차를 운행하지 못한다. 
차량 7대가 주어졌을 때, 끝번호 두자리에서 이를 위반하는 자동차의 수를 출력
function solution(day, arr){
    let answer=0;
    for(let x of arr){
        if(x%10==day) answer++;
        // 10으로 나눠서 결국 1의 차리를 찾는건데, 만약에 70번대면 이 문제 에러가 있지 
        // 아 일의 자리만 본다고, 문제를 잘일자. 
    }
    
    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
*/

const solution1 = (num, arr) => {
    let result = arr.reduce((pre, cur) => 
        (String(cur).includes(String(num)) && pre.push(cur), pre), []) // 쉼표연산자로 처리하기
    return `위반차량수 : ${result.length}, 위반차량 : ${result}`;
}
