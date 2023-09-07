const solution = (arr) => {
    return [...new Set(arr)]
}


let str=["good", "time", "good", "time", "student"];
console.log(solution(str));

/*
17. 중복단어제거

function solution(s){  
    let answer;
    //console.log(s.indexOf("time"));
    answer=s.filter(function(v, i){
        return s.indexOf(v)===i;
    });
    return answer;
}

// JavaScript에서 배열에서 중복을 제거하는 가장 효율적인 방법은 Set을 사용하는 것
// Set O(n)
// 위의 코드는 O(n^2) 
*/