class Reply {
    //added for test purpose
    constructor(...args) {
      this.args = args;
    }
    * getReply(msg) {
        for (let arg in this.args) {
          let reply = msg + this.args[arg];
          //generator should yield something
          yield reply;
        }
        //next call returns (yields) {done:true,value:undefined}
    }
    * otherFun() {
        yield this.getReply('Nice to meet you '); //yields Generator object
        yield this.getReply('See you '); //Yes, this can access 
        //next call yields {done:true, value:undefined}
    }
    * evenMore() {
        yield* this.getReply('I miss you '); //yields generator result(s)
        yield* this.getReply('I miss you even more ');
    }
  }
  //now test what we have
  const reply = new Reply('Peter', 'James', 'John');
  //let and var here are interchangeable because of Global scope
  var r = reply.getReply('Hello ');
  var msg = r.next(); //{done:false,value:"..."}
  while (!msg.done) {
    console.log(msg.value);
    msg = r.next();
  }
  var other = reply.otherFun();
  var o = other.next(); //{done:false,value:Generator}
  while (!o.done) {
    let gen = o.value;
    msg = gen.next();
    while (!msg.done) {
      console.log(msg.value);
      msg = gen.next();
    }
    o = other.next();
  }
  var more = reply.evenMore();
  msg = more.next();
  while (!msg.done) {
    console.log(msg.value);
    msg = more.next();
  }
  //update of 1/12/2019
  //more examples
  for (let r of reply.getReply('for ')) {
    console.log(r);
  }
  for (let r of reply.evenMore()) {
    console.log(r);
  }
  //note that the following doesn't work because of lack of star (*) inside the generator function
  for (let r of reply.otherFun()) {
    console.log(r);
  }
