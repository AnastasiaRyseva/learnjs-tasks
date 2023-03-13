const fib = (n) => {
    let fibObj = {
        1: 1,
        2: 1,
    }
    for (let i = 3; i <= n; i++) {
        fibObj[i] = fibObj[i - 1] + fibObj[i - 2];
    }
    console.log(fibObj[n])
}

fib(77)