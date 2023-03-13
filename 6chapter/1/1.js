// const sumTo = (n) => {
//     let res = 0;
//     for(let i = n; i > 0; i--) {
//         res += i;
//     }
//     return res
// }


const sumTo = (n) => {
    if (n - 1 === 0) {
        return n
    }
    return n + sumTo(n - 1)
}

// const sumTo = (n) => {
//     return n * (n + 1) / 2;
// }

console.log(sumTo(4))