let ladder = {
  step: 0,
  history: [],
  up() {
    this.history.push(this.step);
    this.step++;
    return this;
  },
  down() {
    this.history.push(this.step);
    this.step--;
    return this;
  },
  showStep: function() { 
    alert(this.step);
    return this;
  },
  clear(){
    this.step = 0;
    this.history.push(this.step);
    return this;
  },
  undo(){
    if (this.history.length > 0){
      this.step = this.history.pop();
    } else {
      alert('Nothing to undo');
    }
    return this;
  }
};

ladder.up().up().showStep().down().undo().showStep();