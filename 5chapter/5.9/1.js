let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (salaries) => {
    return Object.values(salaries).reduce((acc,value) => acc + value, 0)
}