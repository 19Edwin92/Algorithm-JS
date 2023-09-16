const solution = (arr1, arr2, p1=p2=0, result=[]) => {
    let leng1 = arr1.sort((a,b) => a-b).length
    let leng2 = arr2.sort((a,b) => a-b).length
    while(p1 < leng1 && p2 < leng2) {
        arr1[p1] === arr2[p2]
            ? result.push(arr1[p1++]) && p2++
            : arr1[p1] < arr2[p2]
                ? p1++
                : p2++
    }
    return result
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));

/*  2. 공통원소구하기
    solution1 볼 때 GPT가 말하는 일반적인 내용은 효율과 관련된 부분이다.
    solution1 는 코드가 간결하지만, findIndex를 사용하여 더 많은 비교 연산이 필요하다는 것이 문제다.
    단순하게 시간복잡도를 볼 때는 solutionExam(O(n * log(n) + m * log(m))) 이고, solution1는 O(n * m) 이지만
    효율로 보았을 때에는 투포인트 알고리즘의 처리 속도가 월등하다. 
*/

function solutionExam(arr1, arr2){
    let answer=[];
    arr1.sort((a, b)=>a-b);
    arr2.sort((a, b)=>a-b);
    let p1=p2=0;
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]==arr2[p2]){
            answer.push(arr1[p1++]);
            p2++;
        }
        else if(arr1[p1]<arr2[p2]) p1++;
        else p2++;
    }              
    return answer;
}

const solution1 = (a,b,result=[]) => {
    for (list of a) b.findIndex(num => num === list) >= 0 && result.push(list)
    return result.sort((a,b) => a-b)
}

const solution2 = (arr1, arr2, result=[]) => {
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => a-b)
    let pOne = pTwo = 0;
    while(pOne < arr1.length && pTwo < arr2.length) {
        arr1[pOne] === arr2[pTwo] 
        ? (result.push(arr1[pOne++]) && pTwo++)
        :  arr1[pOne] < arr2[pTwo] 
            ? pOne++
            : pTwo++
    }
    return result
}
const solution3 = (a,b, p1=p2=0, result=[]) => {
    a.sort((a,b) => a-b)
    b.sort((a,b) => a-b)
    while(p1<a.length && p2<b.length) a[p1] < b[p2] 
        ? p1++ 
        : a[p1] === b[p2] 
            ? result.push(a[p1++]) && p2++ 
            : p2++
    return result
}

const solution4 = (arr1, arr2, pnt1 = pnt2 = 0,result=[]) => {
    let leng1 = arr1.sort((a,b) => a-b).length
    let leng2 = arr2.sort((a,b) => a-b).length
    while (pnt1 < leng1 && pnt2 < leng2) {
        arr1[pnt1] === arr2[pnt2]
            ? (result.push(arr1[pnt1++]) && pnt2++)
            : arr1[pnt1] < arr2[pnt2]
                ? pnt1++
                : pnt2++
    }
    return result
}