const solution = (str) => {
    let result = ""
    for(let find of str) {
        if(!result.includes(find)) result+=find
    }
    return result
}
console.log(solution("ksekkset"));


/*
16. 중복문자제거
function solution(s){  
    let answer="";
    //console.log(s.indexOf("K"));
    for(let i=0; i<s.length; i++){
        //console.log(s[i], i, s.indexOf(s[i]));
        if(s.indexOf(s[i])===i) answer+=s[i];
    }
    return answer;

    // 실수한 부분은 상수에 let result = "" 값을 변경하려 했기 때문이다. 
}
*/