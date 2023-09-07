
const solution= (str) => {
    let center = Math.floor(str.length/2)
    return str.length%2 === 0 
        ? str.slice(center-1, center+1) 
        : str.charAt(center)
}

console.log(solution("good"));


/*
15. 가운데 문자 출력
function solution(s){  
    let answer;
    let mid=Math.floor(s.length/2)
    if(s.length%2===1) answer=s.substring(mid, mid+1);
    else answer=s.substring(mid-1, mid+1);
    //if(s.length%2===1) answer=s.substr(mid, 1);
    //else answer=s.substr(mid-1, 2);
    return answer;

    문자열 탐색
    - 특정인덱스 부터까지 : str.slice()
    - 특정인덱스 str.charAt()
}

*/