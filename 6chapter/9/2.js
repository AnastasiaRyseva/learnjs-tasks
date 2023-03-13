function delay(f, ms) {
    return function() {
        setTimeout(() => {
            let res = f.apply(this, arguments);
            return res 
        }, ms);
    };
}