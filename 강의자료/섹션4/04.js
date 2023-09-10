const solution = (totalMoney, arr, count=0) => {
    let price = arr.map(list => [list.reduce((calc, cur) => calc+cur, 0), list]).sort((a,b) =>a[0]-b[0])
    for(result of price) {
        if(totalMoney - result[0] >= 0) {
            count++
            price.shift()
        } else break
    }
    for(result of price) {
        if(totalMoney - ((result[1][0]/2)+result[1][1])) {
            count++
            price.shift()
        }
    }
    return count
}


let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));

/*  4. 졸업선물 : 완전탐색
    인자 1 : 선생님의 예산 
    인자 2 : 중첩배열 : 가격과 배송비 
    선생님은 상품 하나에 대해서 50% 할인 쿠몬이 있는데, 최대 몇명에게 선물을 줄 수 있는지 구하라

*/

function solutionExam(m, product){
    let answer=0;
    let n=product.length;
    product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
    for(let i=0; i<n; i++){
        let money=m-(product[i][0]/2+product[i][1]);
        let cnt=1;
        for(let j=0; j<n; j++){
            if(j!==i && (product[j][0]+product[j][1])>money) break;
            if(j!==i && (product[j][0]+product[j][1])<=money){
                money-=(product[j][0]+product[j][1]);
                cnt++;
            }
        }
        answer=Math.max(answer, cnt);
    }  
    return answer;
}