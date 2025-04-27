const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};
const product2 = {}

function logProvince(product){
  console.log(product?.distributor?.address?.province ?? "No province data");
}

logProvince(product1);
logProvince(product2);