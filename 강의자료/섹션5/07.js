const solution = (str1, str2, map=new Map(), result="YES") => {
    for(list of str1) map.has(list) || map.get(list)===0 ? map.set(list, map.get(list)+1) : map.set(list,1)
    for(lisf of str2) !map.has(list) ? result="NO" : map.set(list, map.get(list)-1)
    return result
}


let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));

/*  7. 아나그램- 해쉬
    두 문자열이 알파벳 순서는 다르지만, 구성이 일치한어를 지칭한다. 
    내부에 들어있는 알파멧이 동일이하면 YES, NO 를 출력하는 것이다.*/

function solutionExam(str1, str2){
    let answer="YES"; 
    let sH = new Map();
    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(let x of str2){
        if(!sH.has(x) || sH.get(x)==0) return "NO";
        sH.set(x, sH.get(x)-1);
    }
    return answer;
}


const solutionNoHash = (a,b) => {
    const sortStr = (str) => [...str].sort().join("")
    return sortStr(a) === sortStr(b) ? "YES" : "NO"
}