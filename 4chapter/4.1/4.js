const multiplyNumeric = (obj) => {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] = 2 * obj[key];
        }
    }
    return obj
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);