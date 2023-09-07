const solution = (str) => {
    return [...str].map(str => str.toUpperCase()).join("")
}

    let str="ItisTimeToStudy";
    console.log(solution(str));
/*

12. 대문자로 통일
function solution(s){         
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
*/