const solution = (n) => {
    let count = 0;
    for(let i = 1; i <= n; i++) count = count + i
    return count
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