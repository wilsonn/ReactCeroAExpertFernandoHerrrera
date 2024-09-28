const papper = {
  producto: "papper",
  price: 100,
  quantity: 10,
};

const invoices = [
  {
    id: 1,
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
        price: 399,
        quantity: 2,
      },
      {
        producto: "mouse",
        price: 200,
        quantity: 1,
      },
      papper,
    ],
  },
  {
    id: 2,
    name: 'Compras de computacion',
    cliente: {
      id: 2,
      name: 'Pepe',
      lastname: 'Doe',
      age: 20,
    },
    items: [
      {
        producto: 'keyboard',
        price: 399,
        quantity: 2,
      },
      {
        producto: "monitor",
        price: 200,
        quantity: 1,
      },
      {
        producto: "cpu intel",
        price: 100,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    name: 'Compras de papeleria',
    cliente: {
      id: 2,
      name: 'Maria',
      lastname: 'Doe',
      age: 20,
    },
    items: [
      {
        producto: 'pencil',
        price: 50,
        quantity: 2,
      },
      {
        producto: "papper",
        price: 100,
        quantity: 1,
      },
      papper,
    ],
  },
];

const invoiceClone = invoices.map( i => { return (i.name) });
console.log(invoiceClone);
console.log(invoices);


const invoicesClientName = invoices.map(i => {return i.cliente.name});
console.log(invoicesClientName);

const invoiceFindById = invoices.find(i => i.id == 3);
console.log(invoiceFindById);

const invoiceFindByName = invoices.find(i => i.name == 'Compras de oficina');
console.log(invoiceFindByName);

const invoiceFindByClientName = invoices.find(i=> i.cliente.name = 'pepe');
console.log(invoiceFindByClientName);

const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

const invoiceFilter2 = invoices.filter(i => i.items.includes(papper))
console.log(invoiceFilter2);

const result = invoices.some(i => i.cliente.name = 'pepe');
console.log(result);

const invoiceDelete = invoices.filter(i=> i.id != 2);
console.log(invoiceDelete);
