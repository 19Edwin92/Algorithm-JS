const solution = (str, testCase,distance=0, result=[]) => {
    const test = (list) => list !== testCase ? distance++ : distance=0;
    [...str].forEach(list => {
        test(list)
        result.push(distance)
    });
    [...str].reverse().forEach((list, idx) => {
        test(list)
        result[str.length-idx-1] = Math.min(result[str.length-idx-1], distance)
    })
    return result
}

let str="teachermode";
console.log(solution(str, 'e'));

/*  4. 가장 짧은 문자거리
    한 개의 문자열 s
    문자 t가 주어지면,
    s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성한다. 
    모두 소문자로 주어지며, 최대 100개의 문자열이 주어진다.
    
    성능을 고려하면 for문으로 풀 수도 있어야 한다. 
*/  

function solutionExam(s, t){
    let answer=[];
    let p=1000;
    for(let x of s){
        if(x===t){
            p=0;
            answer.push(p);
        }
        else{
            p++;
            answer.push(p);
        }
    }
    p=1000;
    for(let i=s.length-1; i>=0; i--){
        if(s[i]===t) p=0;
        else{
            p++;
            answer[i]=Math.min(answer[i], p);
        }
    }
    return answer;
}

const solution1 = (str, s, count=0) => {
    const test = (item) => item ===s ? (count=0, count) : (count++, count);
    const arrLast = [...str].reverse().map(item => test(item)).reverse()
    return arrLast.map((list, idx) => Math.min(list, test([...str][idx])))
}

const solution2 = (str, targer,count=0) => {
    let answer = [];
    for(let string of str) {
        if(string === targer) {
            count=0
            answer.push(count)
        } else {
            count++
            answer.push(count)
        }
    } 
    count=0
    for (let i =str.length-1; i>=0; i--) {
        if(str[i] === targer) {
            count=0
        } else {
            count++
            answer[i] = Math.min(answer[i], count)
        }
    }
    return answer
}
