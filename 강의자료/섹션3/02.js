const solution = str => {
    let arrangement = str.toLowerCase().replace(/[^A-Za-z]/g, "")
    let reverse = [...arrangement].reverse().join("")
    return arrangement === reverse ? "YES" : "NO"
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));


/*  2. 유효한 팰린드롬
    회문문자열은 영어로 팰린드롬이라고 한다.
    공백이 없는 문자열이 주어진다는데, 
    음.. 알파벳 이외의 문자들은 무시하라. 
*/

function solutionExam(s){
    let answer="YES";
    s=s.toLowerCase().replace(/[^a-z]/g, '');
    if(s.split('').reverse().join('')!==s) return "NO";
    return answer;
}

const solution1 = (str) => {
    const trans = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
    const reverse = [...trans].reverse().join("")
    return trans === reverse ? "YES" : "NO"
}

