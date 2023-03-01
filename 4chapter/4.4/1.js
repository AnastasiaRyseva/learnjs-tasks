let calculator = {
    read() {
        this.num = +prompt('введите число', 1);
        this.num2 = +prompt('введите число', 2);
    },
    sum() {
        return this.num + this.num2
    },
    mul() {
        return this.num * this.num2
    }
};