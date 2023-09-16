const solution = (str, map=new Map(), maxNum=Number.MIN_SAFE_INTEGER, result="") => {
    for(list of str) map.has(list)
        ? map.set(list, map.get(list)+1) : map.set(list, 1)
    for([key, val] of map) val>maxNum && (maxNum=val) && (result=key)
    return result
}

let str="BACBACCACCBDEDE";
console.log(solution(str));

/*  6. 학급 회장(해쉬)
    A, B, C, D, E 후보가 등록
    투표용지에는 후보들에 대한 기호 등록, 반드시 한 명의 학급회장이 선출되도록 투표결과는 가정된다.
    Map을 사용하면 된다. 객체니까. 
    - set(key, value) 값을 등록한다. 
    - get은 값을 가져오는 것이다. 
    - Set에 등록은 app 

    이터러블을 순회하며 값을 비교하여 찾는 문제는 해쉬로 붙는 문제이다. 
    */


function solutionExam(s){  
    let answer;
    let sH = new Map();
    for(let x of s){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    let max=Number.MIN_SAFE_INTEGER;
    for(let [key, val] of sH){
        if(val>max){
            max=val;
            answer=key;
        }
    }
    return answer;
}

const solution1 = (str, map=new Map(), maxNum=Number.MIN_SAFE_INTEGER, result="") => {
    for(list of str)  {
        map.has(list) 
            ? map.set(list, map.get(list)+1) 
            : map.set(list, 1)
    }
    for([key, val] of map) maxNum<val && (maxNum=val) && (result=key)
    return result
}

const solution2 = (str, maxNum=Number.MIN_SAFE_INTEGER, result="") => {
    let map = new Map()
    for(list of str) map.has(list)
        ? map.set(list, map.get(list)+1) : map.set(list, 1)

    for([key,value] of map) value>maxNum
        && (maxNum=value) && (result=key)
    return result
}
