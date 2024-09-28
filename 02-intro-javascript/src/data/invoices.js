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


//export default (clientName) => {
const invoiceFindByClientName = (clientName) => {
    return invoices.find(i => i.cliente.name = clientName);
};

const invoiceFindById = (id) => {
    return invoices.find(i => i.id == id);
};

const findInvoiceById = (id) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = invoiceFindById(id);
        if (result) {
          resolve(result);
        } else {
          reject("Error: no existe la factura por el id.")
        }
      }, 2500);
    });
    return promise;
  };

export {
    papper,
    invoices,
    invoiceFindByClientName as default,
    invoiceFindById,
    findInvoiceById
}
