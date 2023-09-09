const solution = str => {
    return Number(str.replace(/\D/g, ""))
}

let str="g0en2T0s8eSoft";
console.log(solution(str));

/*  3. 숫자만 추출
    문자와 숫자가 섞여있는 문자열에서 숫자만 수출, 그 순서대로 자연수를 만든다. 
*/

function solutionExam(str){
    let answer="";
    for(let x of str){
        if(!isNaN(x)) answer+=x;
    }  
    return parseInt(answer);
}

const solution1 = (str) => {
    return parseInt(str.replace(/[A-Za-z]/g,""))
}
