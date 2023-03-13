// задание 1
// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }

// задание 2
/* 2.Напишите функцию выводящую множители положительного целого числа. 
На вход дается число, вывод массив множителей.
*/
function factors(n) {
    let arr =[]
    for (let i = 1; i < n; i++) {
      if (n%i==0) {
        arr.push(i)
      }
    }
    return arr
}
console.log(factors(20))