function sum (a) {
    let sum = 0;
    
    function f(b) {
        sum += b;
        return f
    }

    f.toString()= function() {
        return sum
    }

    return f
}