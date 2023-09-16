const solution = (arr1, arr2, p1=p2=0, result=[]) => {
    while(p1< arr1.length && p2 < arr2.length) arr1[p1] < arr2[p2] 
        ? result.push(arr1[p1++]) : result.push(arr2[p2++])
    while(p1< arr1.length) result.push(arr1[p1++])
    while(p2< arr2.length) result.push(arr2[p2++])
    return result
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));


/*  1. 두 배열 합치기
    투포인트 알고리즘, [...arr1, ...arr2].sort((a,b) => a-b) 풀었지만, 효율성에서 떨어진다. 
    아 같은 것을 찾는 것이 아니었지. 그건 02번 순서대로 오름차순되어 있는 내용을 합치는 문제 
    sort 함수 nlogn의 시작복잡도지만 
    p1
    p2 
    를 가지고 반복문 하나로 풀 수 있는 알고리즘은 O(n+m)이다. 
    솔트를 사용하면  O((n + m) * log(n + m)) 오버헤드가 발생된다. 

    첫번째 While문은 두개를 비교
    두,세번째 While문은 둘 중에 하나가 끝났을 때 남은 arr 들을 비교하기 위한 반복문이다. 
    while-for : 반복 조건의 설정법과 반복문 내에서 조건 검사를 언제 수행하는지이다. 
    - for : 초기화, 조건, 반복 후 작업
    - while : 단순히 조건을 검사하고, 참인 경우에만 반복을 계속실행, 내부에 별도로 정의되지 않는다.
    - 투포인트 알고리즘 while 문을 사용하면 조건이 충족되는 한 반복을 계속할 수 있습니다.

*/

function solutionExam(arr1, arr2){
    let answer=[];
    let n=arr1.length;
    let m=arr2.length;
    let p1=p2=0;
    while(p1<n && p2<m){
        // 둘중의 하나가 끝날때까지 while 문은 동작할 것입니다. 
        if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]); 
        // 후치연산을 사용해서, 먼저 p1을 실행시키고, ++ 를 해줍니다. 
        else answer.push(arr2[p2++]);
    }
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]); 
    return answer;
}

const solution1 = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a,b) => a-b)
}

const solution2 = (arr1, arr2, answer=[]) => {
    let pOne = pTwo = 0;
    while(pOne < arr1.length && pTwo < arr2.length) arr1[pOne] <= arr2[pTwo] 
        ? answer.push(arr1[pOne++]) 
        : answer.push(arr2[pTwo++])
    while(pOne < arr1.length) answer.push(arr1[pOne++]) 
    while(pTwo < arr2.length) answer.push(arr2[pTwo++])
    return answer
}

const solution3 = (a, b, p1 = p2 = 0,result=[]) => {
    while(p1 < a.length && p2 < b.length) a[p1] <= b[p2] ? result.push(a[p1++]) : result.push(b[p2++])
    while(p1 < a.length) result.push(a[p1++])
    while(p2 < b.length) result.push(b[p2++])
    return result
}

const solution4 = (arr1, arr2, point1=point2=0,result=[]) => {
    while(point1<arr1.length && point2<arr2.length) arr1[point1] <= arr2[point2] ? result.push(arr1[point1++]) : result.push(arr2[point2++])
    while(point1<arr1.length) result.push(arr1[point1++]) 
    while(point1<arr2.length) result.push(arr2[point1++]) 
    return result
}
