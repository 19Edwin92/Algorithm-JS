const solution = str => str.replace(/A/g, "#")

let str="BANANA";
console.log(solution(str));

/*
9. A를 #으로
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 A를 모두 #으로 바꾸어 출력하는 프로그램 

*/

for ( let x of str) {
  // str은 이터러블이기에, for .. of 문이 가능합니다. 
}

const solution1 = (str) => {
  return str.replace(/A/g, "#")
}