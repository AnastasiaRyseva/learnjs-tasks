let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

const salariesSum = (salaries) => {
    for(let key in salaries) {
        sum += salaries[key]
    }
    
    return sum
}

console.log(salariesSum(salaries))