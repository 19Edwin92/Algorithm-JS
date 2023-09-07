const solution = (str) => {
    return [...str]
        .map(str => str === str.toUpperCase() 
            ? str.toLowerCase() 
            : str.toUpperCase()).join("")
}

console.log(solution("StuDY"));

/*
13. 대소문자 변환
function solution(s){  
    let answer="";
    for(let x of s){
        if(x===x.toUpperCase()) answer+=x.toLowerCase();
        else answer+=x.toUpperCase();
    }
    return answer;
}

*/