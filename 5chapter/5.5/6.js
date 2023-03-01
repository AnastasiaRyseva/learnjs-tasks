function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b,
      ":": (a, b) => a / b,
      "*": (a, b) => a * b,
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        num1= +split[0],
        op = split[1],
        num2 = +split[2]
  
      if (!this.methods[op] || isNaN(num1) || isNaN(num2)) {
        return NaN;
      }
  
      return this.methods[op](num1, num2);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }