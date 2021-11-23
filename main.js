//type알아보기
import getType from './getType' //외부에서 getType.js문서 가져오기 

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

//산술 연산자
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5) //나머지 연산자


//할당 연산자
let a = 2
//a = a + 1
a += 1 //위와 같은 코드
console.log(a)


//비교연산자
let b = 1
let c = 2
console.log(b===c) //일치 연산자
console.log(b !== c)
console.log(b > c)

function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))


//논리연산자
let d = 1===1
let e = 'AB'==='AB'
let f = false

console.log(d)
console.log(e)
console.log(f)

console.log('&&: ', d && e && f)
console.log('||: ', d || e || f)
console.log('!: ', !d)


//삼항 연산자
let g = 1 < 2

if (g) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓') //위와 같은 코드


//조건문(if)
import random from './getRandom' //외부에서 getRandom.js문서 가져오기 

let h = random()
if (h === 0) {
  console.log('h is 0')
} else if (h === 2) {
  console.log('h is 2')
} else if (h === 4) {
  console.log('h is 4')
} else {
  console.log('rest...')
}

//조건문(switch)
let i = random()

switch(i) {
  case 0 : 
    console.log('i is 0')
    break
  case 2 : 
    console.log('i is 2')
    break
  case 4 : 
    console.log('i is 4')
    break
  default: console.log('rest...')
} //위의 if else문과 같은 코드


//반복문(for)
//for (시작조건; 종료조건; 변화조건) {}
const ulEl = document.querySelector('ul')

for (let j = 0; j < 10; j += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${j + 1}`
  if ((j + 1) % 2 === 0) {
    li.addEventListener('click', function () {
    console.log(li.textContent)
  })
}
  ulEl.appendChild(li)
}


//변수 유효범위
// var, let, const
// let과 const는 그 변수가 선언되어져 있는 블록내부가 유효범위가 된다
// var는 함수범위가 유효범위이다
function scope() {
  if (true) {
    const k = 123
    console.log(k)
  }
}
scope() 


//형 변환 (자료형)
// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14'...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

const l = 1
const n = '1'
console.log(l === n) //false > 일치연산자
console.log(l == n) //true > 동등연산자

if ('false') {
  console.log(456)
} //=>456