function compareMaps(map1, map2){
    if(map1.size!==map2.size) return false;
    for(let [key, val] of map1){
        if(!map2.has(key) || map2.get(key)!==val) return false;
    }
    return true;
}

const solution = (arr1, arr2, answer=0) => {
    let arr2Map = new Map()
    for(list of arr2) {
        arr2Map.has(list) ? arr2Map.set(list, arr2Map.get(list)+1) : arr2Map.set(list, 1)
    }
    // ========================== 이중for문으로 풀 수 있겠지만.. 
    // 투포인트에 2개를 넣어두고 
    // 슬라이더를 하면서 3개를 추가하고 비교하고, 전진하면서 나가면 된다. 
    let arr1Map = new Map()
    let p1=0;
    let p2 = arr2.length-1
    for(let i=0; i<p2;i++) {
        arr1Map.has(arr1.charAt(i)) ? arr1Map.set(arr1.charAt(i), arr2Map.get(arr1.charAt(i))+1) : arr1Map.set(arr1.charAt(i), 1)
    }
    for(let slice=p2; slice<arr1.length; slice++) {
        arr1Map.has(arr1[p2]) ? arr1Map.set(arr1[p2], arr1Map.get(arr1[p2])+1) : arr1Map.set(arr1[p2], 1)
        if(compareMaps(arr1Map, arr2Map)) answer++;
        arr1Map.set(arr1[p1], arr1Map.get(arr1[p1])-1)
        arr1Map.get(arr1[p1])===0 && arr1Map.delete(arr1[p1]);
        p1++
    }


    return answer
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));

/*  8. 모든 아나그램
    - 섹션5에서 배운 모든 알고리즘이 다 들어가야 하는 문제입니다. 

*/

function compareMaps(map1, map2){
    if(map1.size!==map2.size) return false;
    for(let [key, val] of map1){
        if(!map2.has(key) || map2.get(key)!==val) return false;
    }
    return true;
}

function solutionExam(s, t){
    let answer=0;
    let tH = new Map();
    let sH = new Map();
    for(let x of t){
        if(tH.has(x)) tH.set(x, tH.get(x)+1);
        else tH.set(x, 1);
    }
    let len=t.length-1;
    for(let i=0; i<len; i++){
        if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
        else sH.set(s[i], 1);
    }
    let lt=0;
    for(let rt=len; rt<s.length; rt++){
        if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
        else sH.set(s[rt], 1);
        if(compareMaps(sH, tH)) answer++;
        sH.set(s[lt], sH.get(s[lt])-1);
        if(sH.get(s[lt])===0) sH.delete(s[lt]);
        lt++;
    }
    return answer;
}