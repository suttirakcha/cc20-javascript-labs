const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};

let clone = {};

// Use for-in loop
for (let key in notebook){
  clone[key] = notebook[key];
}

// Use Object.assign
Object.assign(clone, notebook);
console.log(clone)