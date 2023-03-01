const filterRange = (arr, a, b) => {
    return arr.filter(item => item >= a && item <= b);
}

filterRange([5, 3, 8, 1], 1, 4)