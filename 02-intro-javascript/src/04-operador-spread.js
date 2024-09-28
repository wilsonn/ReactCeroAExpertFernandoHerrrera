const invoice = {
  id: 10,
  name: 'Compras de oficina',
  date: new Date(),
  cliente: {
    id: 2,
    name: 'Jhon',
    lastname: 'Doe',
    age: 20,
  },
  items: [
    {
      producto: 'keyboard',
      price:399,
      quantity: 2,
    },
    {
      producto: "mouse",
      price: 200,
      quantity: 1,
    },
    {
      producto: "paper",
      price: 100,
      quantity: 10,
    }
  ],
  //total: 1000,
  total: function(){
    let total = 0;
    this.items.forEach(item => {
      total = total + item.price * item.quantity;
    })
    return total;
  },
  greeting: function(){
    return `Hola ${this.cliente.name}`
  }
};

//const invoice2 = invoice;
const invoice2 = {...invoice};
const result = invoice == invoice2;

if (result) {
  console.log(result);
} else {
  console.log('No son iguales');
}

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);


invoice.cliente.name = 'Pepe';
//invoice.total = 5000;
console.log(invoice)

const greeting = invoice.greeting();
console.log(greeting);

console.log('Total: ' + invoice.total());