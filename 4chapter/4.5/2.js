function Calculator() {
    this.read = function() {
        this.a = +prompt('введи число', 1);
        this.b = +prompt('введи число', 2);
    }
    this.sum = function() {
        return this.a + this.b
    }
    this.mul = function() {
        return this.a * this.b
    }
}

let calculator = new Calculator()