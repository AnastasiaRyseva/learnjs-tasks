let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (salaries) => {
    let maxS = 0;
    maxName = null;

    for(let [name, salary] of Object.entries(salaries)) {
        if(maxS < salary) {
            maxS = salary;
            maxName = name;
        }
    }

    return maxName
    
}