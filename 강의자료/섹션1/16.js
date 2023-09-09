const solution = (str, result="") => {
    for(list of str) !result.includes(list) && (result+=list)
    return result
}

console.log(solution("ksekkset"));


/*  16. 중복문자제거
    문자열은 이터러블이기에 순회가 가능하다는 점을 기억하자. 
*/

function solutionExam(s){  
    let answer="";
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i])===i) answer+=s[i];
    }
    return answer;
}

const solution1 = (str) => {
    let result = ""
    for(let find of str) {
        if(!result.includes(find)) result+=find
    }
    return result
}