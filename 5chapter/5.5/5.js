let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
    return arr.slice().sort((a, b) => a.localeCompare(b))
}

let sorted = copySorted(arr);
