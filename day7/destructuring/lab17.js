let guest = 'Jane';
let admin = 'Pete';

[guest, admin] = [admin, guest];

console.log(guest); // Expected value: 'Pete'
console.log(admin); // Expected value: 'Jane'