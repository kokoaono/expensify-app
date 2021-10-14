// const person = {
  // name: 'Koko',
  // age: 30,
  // location: {
    // city: 'Auckland',
    // temp: 13
  // }
// };
// const {name: firstName = 'Anonymous, age} = person;
// console.log(`${firstName} is ${age}.`);

// const name = person.name;
// const age = person.age;
// const {city, temp: temperature} = person.location;
// console.log(`It is ${temperature} degrees in ${city}`);

// const book = {
  // title: 'Ego is the Enemy',
  // author: 'Ryan Holiday',
  // publisher: {
    // name: 'Penguin'
  // }
// };
// 
// const {name: publisherName = 'Self-Published'} = book.publisher; //rename 'name' to publisherName (local value) 
// console.log(publisherName)

//
// Array destructuring
//

// const address = ['100 king Street', 'Auckland', 'NZ', '1065'];
// 
// const [street, city, country, postCode] = address;
// 
// console.log(`Yout are in ${city}, ${country}.`);

const item = ['Coffee (Hot)', '$2', '$2.5', '$3'];

const [drink, , mediumPrice] = item

console.log(`A medium ${drink} costs ${mediumPrice}`);