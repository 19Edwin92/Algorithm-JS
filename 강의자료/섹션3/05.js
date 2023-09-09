const solution = (str, result="", count=1) => {
    for(list of str) !result.includes(list) 
        ? ((count <= 1 ? result+=list : result+=(count+list)) && (count=1)) 
        : count++

    return result
}

let str="KKHSSSSSSSE";
console.log(solution(str));

/*
5. 문자열 압축
대문자로 된 문자를 입력받아, 문자가 연속되면, 반복되는 문자 옆에 횟수를 표기하는 프로그램이며, 1이면 생략한다. 
*/

function solutionExam(s){
    let answer="";
    let cnt=1;
    s=s+" ";
    for(let i=0; i<s.length-1; i++){
        if(s[i]===s[i+1]) cnt++;
        else{
            answer+=s[i];
            if(cnt>1) answer+=String(cnt);
            cnt=1;
        }
    }
    return answer;
}
