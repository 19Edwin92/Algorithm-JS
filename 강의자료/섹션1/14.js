const solution = (arr, result="") => {
    for(list of arr) list.length > result.length && (result=list)
    return result
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

/*  14. 가장 긴 문자열
    메소드를 구사하는 것이 능사는 아니다. 문자열은 문자열 자체로 이터러블 이기에 순회가 가능하다는 점을 고려하고
    해당 내용을 판별하는 for(...of...)문을 구현하는 방법도 고려해보자. 
    */

function solutionExam (s){  
    let answer="", max=Number.MIN_SAFE_INTEGER;
    for(let x of s){
        if(x.length>max){
            max=x.length;
            answer=x;
        }
    }
    return answer;
}

const solution1 = (str) => {
    const lenght = str.map(str => str.length)
    return str[lenght.findIndex(num => num === Math.max(...length))]
}

const solution2 = str => {
    return str.map(list => [list, list.length]).sort((a,b) => b[1]-a[1])[0][0]
}

const solution3 = (str, findMaxLength="") => {
    for (list of str) findMaxLength.length < list.length && (findMaxLength = list)
    return findMaxLength
}
