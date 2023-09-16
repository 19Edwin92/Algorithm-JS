const solution = (board, moves, stack=[], result=0) => {
    moves.forEach(current => {
        for(let i=0; i<board.length; i++) {
            if(board[i][current-1] !== 0) {
                let popList = board[i][current-1]
                board[i][current-1] = 0
                if(popList === stack[stack.length-1]) stack.pop() && (result+=2)
                else stack.push(popList)
                break
            }
        }
    })
    return result
}


let a=[
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

/*  3. 크레인 인형뽑기(카카오인턴십) - 쉬운 문제라고요?? 
    2차원 배열을 탐색하는 것이죠. 
    크레인을 작동시켜서, 터져서 사라진 인형의 개수를 리턴해라. 

*/

function solutionExam(board, moves){
    let answer=0;
    let stack=[];
    moves.forEach(pos => {
        for(let i=0; i<board.length; i++){
            if(board[i][pos-1]!==0){
                let tmp=board[i][pos-1];
                board[i][pos-1]=0;
                if(tmp===stack[stack.length-1]){
                    stack.pop();
                    answer+=2;
                }
                else stack.push(tmp);
                break;
            }
        }
    });
                    
    return answer;
}

const solution1 = (board, moves, stack=[], result=0) => {
    moves.forEach(progress => {
        for(let i =0; i<board.length; i++) {
            if(board[i][progress-1] !==0) {
                let targer = board[i][progress-1];
                board[i][progress-1]=0
                if(targer===stack[stack.length-1]) stack.pop() && (result+=2)
                else stack.push(targer)
                break
            }
        }
    })
    return result
}

const solution2 = (board, moves, stack=[], result=0) => {
    moves.forEach(current => {
        for(i=0; i<board.length; i++) {
            if(board[i][current-1] !== 0) {
                let popList = board[i][current-1]
                board[i][current-1] = 0
                if(popList === stack[stack.length-1]) stack.pop() && (result+=2)
                else stack.push(popList)
                break
            }
        }
    })
    return result
}