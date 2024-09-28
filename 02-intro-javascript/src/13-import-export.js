//import aaa, { invoices, papper } from "./data/invoices"
import invoiceFindByClientName, { invoices, papper } from "./data/invoices"

const invoiceClone = invoices.map( i => { return (i.name) });
console.log(invoiceClone);
console.log(invoices);


const invoicesClientName = invoices.map(i => {return i.cliente.name});
console.log(invoicesClientName);

const invoiceFindById = invoices.find(i => i.id == 3);
console.log(invoiceFindById);

const invoiceFindByName = invoices.find(i => i.name == 'Compras de oficina');
console.log(invoiceFindByName);

//const invoiceFindByClientNameInt = invoices.find(i=> i.cliente.name = 'pepe');
//console.log(aaa('pepe'));
console.log(invoiceFindByClientName('pepe'));

const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

const invoiceFilter2 = invoices.filter(i => i.items.includes(papper))
console.log(invoiceFilter2);

const result = invoices.some(i => i.cliente.name = 'pepe');
console.log(result);

const invoiceDelete = invoices.filter(i=> i.id != 2);
console.log(invoiceDelete);
