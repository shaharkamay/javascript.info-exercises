let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = arguments[0];
        this.b = arguments[1];
    },
    
  };
  
  calculator.read(5,4);
  console.log( calculator.sum() );
  console.log( calculator.mul() );