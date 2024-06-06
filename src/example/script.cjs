const fs = require('fs');
const { faker } = require('@faker-js/faker');

function generateCNPJ(){
    const randomDigits = () => Math.floor(Math.random() * 9);
    const cnpj = Array.from({ length: 14 }, randomDigits);
    const toStr = (arr) => {
      return `${arr[0]}${arr[1]}.${arr[2]}${arr[3]}${arr[4]}.${arr[5]}${arr[6]}${arr[7]}/${arr[8]}${arr[9]}${arr[10]}${arr[11]}-${arr[12]}${arr[13]}`
    }
    return toStr(cnpj);
}
const data = () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    cnpj: generateCNPJ(),
})
const generateSuppliers = (num) => {
    return Array.from({ length: num }, () => data());
  };
  
const suppliers = generateSuppliers(50);

// Escrever os dados em um arquivo JSON
fs.writeFileSync('suppliers.json', JSON.stringify(suppliers, null, 2), 'utf-8');

console.log('Dados gerados e salvos em suppliers.json');
