const solution = (n, dave) => {
    return n%dave === 0 ? n/dave : Math.ceil(n/dave)
}

console.log("3. 연필개수", solution(178, 12));

/*
3. 연필개수
    1다스는 12자루, 1인단 1개씩, n명을 입력하면 몇다스가 필요할까? 
    Math.ceil() : 소수점 올림, 정수 반환
    Math.floor() : 소수점 버림, 정수 반환
    Math.round() : 소수점 반올림, 정수 반환


    function solution(n){
        let answer;
        answer=Math.ceil(n/12);
        return answer;
    }

    console.log(solution(178));
*/