const state1 = { username: 'john', point: 100, loading: true };

const state2 = {
  ...state1, 
  loading: false,
  point: 75,
  success: true
};

console.log(state2);