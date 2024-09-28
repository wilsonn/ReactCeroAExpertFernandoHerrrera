//function sayHello(){
//function sayHello(name){
//function sayHello(name = 'Pepe'){
//function sayHello(name = 'Pepe', age = 0){  
  //console.log("Hola Mundo function!");
//  const greeting = `Hola mundo function! ${name} edad ${age}`;
//  return greeting;
//}

//const sayHello = (name = 'Pepe', age = 0) => {  
//  const greeting = `Hola mundo function! ${name} edad ${age}`;
//  return greeting;
//}

const sayHello = (name = 'Pepe', age = 0) => `Hola mundo function! ${name} edad ${age}`;
const add = (a = 0, b = 0) => a + b;
//const result = sayHello();
console.log(sayHello('Andres', 10));
console.log(add(10, 5))