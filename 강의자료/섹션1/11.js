const solution = (str, count=0) => {
    for(find of str) find === find.toUpperCase() && count++
    return count
}

let str="KoreaTimeGood";
console.log(solution(str));

/*  11. 대문자 찾기
    이진수로 찾으면 되잖아. charCodeAt()
    대문자 : 65~90
    소문자 : 97~122
    45개 문자 */

function solutionExam(s){         
    let answer=0;
    for(let x of s){
        //let num=x.charCodeAt();
        //if(num>=65 && num<=90) answer++;
        if(x===x.toUpperCase()) answer++; 
    }

    return answer;


}

const solution1 = (str) => {
    let count = 0
    for(let findUpperCase of str) {
        let num = findUpperCase.charCodeAt()
        // 대문자 변환된 내용이 같은지 물어볼 수도 있지 
        num>=65 && num<=90 && count++
    }
    return count
}
