const solution = (str) => {
    const lenght = str.map(str => str.length)
    return str[lenght.findIndex(num => num === Math.max(...lenght))]
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
/*
14. 가장 긴 문자열
function solution(s){  
    let answer="", max=Number.MIN_SAFE_INTEGER;
    for(let x of s){
        if(x.length>max){
            max=x.length;
            answer=x;
        }
    }
    return answer;
}
*/