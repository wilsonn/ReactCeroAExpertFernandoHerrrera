let products = [
  'mesa', 'silla', 'notebook', 'teclado'
];

//products.push('pantalla lcd', 'sony tv');
products = products.concat('pantalla lcd', 'sony tv');

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

const market = [...fruits, ...products, 'lechuga', 'papas', 'uvas'];
const market2 = products.concat(fruits).concat('lechuga', 'papas', 'uvas');

console.log(products);
console.log(market);
console.log(market2);
