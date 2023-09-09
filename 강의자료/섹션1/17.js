const solution = (arr, newArr=[]) => {
    for(list of arr) !newArr.find(inner => inner === list) && newArr.push(list)
    return newArr
} //  O(n^2) 


let str=["good", "time", "good", "time", "student"];
console.log(solution(str));

/*
17. 중복단어제거
    JavaScript에서 배열에서 중복을 제거하는 가장 효율적인 방법은 Set을 사용하는 것
    Set O(n)
    위의 코드는 O(n^2) 
*/

function solutionExam(s){  
    let answer;
    //console.log(s.indexOf("time"));
    answer=s.filter(function(v, i){
        return s.indexOf(v)===i;
    });
    return answer;
}

const solution1 = (arr) => {
    return [...new Set(arr)]
}