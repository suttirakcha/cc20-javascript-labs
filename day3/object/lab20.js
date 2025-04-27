let ladder = {
  step: 0,
  history: [],
  up() {
    this.step++;
    this.history.push(this.step);
    return this;
  },
  down() {
    this.step--;
    this.history.push(this.step);
    return this;
  },
  showStep: function() { 
    alert(this.history.length);
    return this;
  },
  clear(){
    this.step = 0;
    this.history = [];
    this.history.push(this.step);
    return this;
  },
  undo(){
    this.step = this.history.pop();
    return this;
  }
};

ladder.up().up().showStep().up().showStep().undo().showStep().clear().showStep();