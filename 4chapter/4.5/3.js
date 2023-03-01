function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.a = +prompt('введите число', 1);
        return this.value += this.a
    }
}