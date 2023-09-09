const solution = (num) =>{
    return Array
        .from({length:num}, (_,idx) => idx+1)
        .reduce((calc, num) => calc+num,0)
}

console.log(solution(6));


/*
    자연수가 주어지면, 1부터 N까지의 합을 구하는 공식
    function solution(n){
        let answer=0;
        for(let i=1; i<=n; i++){
            answer=answer+i;
        }
        
        return answer;
    }

    console.log(solution(10));
*/

const solution1 = (n) => {
    let count = 0;
    for(let i = 1; i <= n; i++) count = count + i
    return count
}