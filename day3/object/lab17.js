const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

const permission = {
  ...permission1,
  ...permission2,
  ...permission3,
  ...permission4
};

// Object.assign(permission, permission1, permission2, permission3, permission4); Can also be used

console.log(permission);