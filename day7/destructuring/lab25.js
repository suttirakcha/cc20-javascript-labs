const q = { prop: 5, prop2: [10, 100] };

const { prop: x, prop2: [w, y] } = q;

console.log(x, y);