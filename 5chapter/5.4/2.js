const sumInput = () => {
    const arr = [];

    while(true) {
        let num = prompt('введите число');

        if(num == '' || num === null || !isFinite(num)) break;

        arr.push(+num);
    }
    let sum = 0;
    for(let num of arr) {
        sum += num
    }
    return sum
}