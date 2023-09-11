const solution = (target, arr, start=count=result=0) => {
    for(let end=0; end<arr.length;end++) {
        count+=arr[end]
        count===target && result++
        while(count >= target) {
            count-=arr[start++]
            count === target && result++
        }
    }
    return result
}



let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

/*  3. 연속부분수열1
    이것도 TwoPoint 를 모르면 이중반복문, n^2이 됩니다. TwoPoint은 O(n)으로 플 수 있습니다. 
    배열 arr에서 연속된 부분 배열의 합이 특정한 목표값 target과 일치하는 경우의 수를 계산하는 함수

    01 calc : 반복문을 통해서 하나씩 더해 갈 예정, 요소 하나씩 진행해가면서  
        02 for -> cal+arr[i] 0번지부터 차례대로 더해가며 판별한다. 
            (1) 더해진 calc 이 target 과 일치하면 answer 를 ++ 산술연산자 더한다. 
                이는 본인이 target과 일치할 수 있기 때문이다. 
            (2) i번지로부터 반복하면서, 다음 요소들을 더하면서 판별한다. 
                while 을 통한 반복은 target보다 같거나 클 때까지이다. 
                =============================
                i 0 calc : 1
                =============================
                i 1 calc : 3
                =============================
                i 2 calc : 4
                =============================
                i 3 calc : 7
                i 3 calc : 7 arr[progress] :  1 0
                i 3 calc : 6 arr[progress] :  2 1
                =============================
                i 4 calc : 5
                =============================
                i 5 calc : 6
                i 5 calc : 6 arr[progress] :  1 2
                =============================
                i 6 calc : 6
                i 6 calc : 6 arr[progress] :  3 3
                =============================
                i 7 calc : 5
*/

function solutionExam(m, arr){
    let answer=0, lt=0, sum=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        if(sum===m) answer++;
        while(sum>=m){
            sum-=arr[lt++];
            if(sum===m) answer++;       
        }
    }        
    return answer;
}


const solution1 = (target, arr, answer=0, progress=0, calc=0) => {
    for(let i=0;i<arr.length;i++) {
        calc+=arr[i] 
        calc===target && answer++; // 현재값이 target과 같으면 answer++
        while(calc >= target) {
            calc-=arr[progress++] // point 앞부분을 제거
            calc===target && answer++; // 그때 target 과 같으면 answer++
        }
    }
    
    return answer
}


const solutionDevelop = (target, arr) => {
    let answer = 0;
    let calc = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        calc += arr[end];

        while (calc >= target) {
            if (calc === target) {
                answer++;
            }
            calc -= arr[start];
            start++;
        }
    }

    return answer;
};