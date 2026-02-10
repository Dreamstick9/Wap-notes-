// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

// function logic(arr, clogic, x) {
//     let k = []
//     for (let i of arr) {
//         if (clogic(i, x)) {
//             k.push(i)
//         }
//     }
//     return k
// }

// function clogic(i, x) {
//     return (!(i%x))
// }

// console.log(logic(numbers, clogic, 3))



// // // CLOSER IMPORTANT
// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count)
//     }
// }
// let final = outer()
// final()
// final()
// final()



// function multiplier(x){
//     return function(y){
//         console.log(x*y)
//     }
// }
// multiplier(5)(2)
// multiplier(5)(3)



// function fun1(number, number2){
//     return function fun2(){
//         number++;
//         console.log(number)
//     }
// }

// let result = fun1(1, 1)
// result()