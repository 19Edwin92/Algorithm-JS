const solution = str => str.toUpperCase()

let str="ItisTimeToStudy";
console.log(solution(str));


/*  12. 대문자로 통일
    String.fromCharCode 는 숫자를 아스키코드로 반환해주는 코드이고 
    String.charCodeAt 는 문자를 아스키코드로 변환해주는 코드이다. 
    */

function solutionExam(s){         
    let answer="";
    for(let x of s){
        let num=x.charCodeAt();
        if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
        else answer+=x;

        //if(x===x.toLowerCase()) answer+=x.toUpperCase();
        //else answer+=x;
    }

    return answer;
}

const solution1 = (str) => {
    return [...str].map(str => str.toUpperCase()).join("")
}