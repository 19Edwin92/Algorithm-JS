const solution = (num, targer, result=0) => {
    let queue = Array.from({length:num}, (_,idx) => idx+1)
    while(queue.length) {
        for(let i=1;i<targer;i++) queue.push(queue.shift())
        queue.shift()
        queue.length === 1 && (result=queue.shift())
    }
    return result
}

console.log(solution(8, 3));

/*  6. 공주구하기
    이 문제는 큐로 푸는 문제이다.  
    왕은 왕자들의 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 
    왕자들은 시개방향으로 돌아가며 동그랗게 않는다. 그리고 시계방향으로 돌며, 번호를 외치게 한다. 
    K 특정 숫자를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.
    그리고 다음 완자부터 다시 1부터 시작하여 번호를 외친다. 
    마지막까지 남은 왕자가 공주를 구하러 갈 수 있다. 

    큐도 자바스크립트에서는 배열을 사용합니다. 

*/

function solutionExam(n, k){
    let answer;
    let queue=Array.from({length:n}, (v, i)=>i+1); 
    while(queue.length){
        for(let i=1; i<k; i++) queue.push(queue.shift());
        queue.shift();
        if(queue.length===1) answer=queue.shift();
    }  
    return answer;
}

const solution1 = (list, targer, result=0) => {
    let queue = Array.from({length:list}, (_, idx) => idx+1)
    while(queue.length) { // 배열이 존재하면
        for(let i=1;i<targer;i++) queue.push(queue.shift()) // 조건만큼을 앞에서 뺴서 넣기 
        queue.shift() // targer은 그냥 제거
        queue.length === 1 && (result=queue.shift())
    }
    return result
}