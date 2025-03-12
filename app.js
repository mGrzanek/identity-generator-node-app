const fs = require('fs');

const people = [];
const gender = ['M', 'F'];
const maleNames = ['Peter', 'Adam', 'Mark', 'John', 'Tom', 'Michael'];
const femaleNames = ['Emilly', 'Merry', 'Jenny', 'Amanda', 'Miley', 'Julie'];
const lastNames = ['Smith', 'Doe', 'Fox', 'Willson', 'Harris', 'Keane'];

const randChoince = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomIndex];
    return randomElement;
}

for(let i = 0; i < 20; i++){
    const person = {};
    person.gender = randChoince(gender);
    if(person.gender === 'F') person.firstName  = randChoince(femaleNames);
    else person.firstName  = randChoince(maleNames);
    person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    person.age = Math.floor((Math.random() * (78 - 18 + 1)) + 18);
    person.email = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@gmail.com`;
    const nummbers = [];
    for(let i = 0; i < 9; i ++){
      if(i === 0) nummbers.push(Math.floor((Math.random() * 4) + 5));
      else nummbers.push(Math.floor((Math.random() * 10)));
    }
    person.phone = nummbers.join('');
    people.push(person);
}

const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

fs.writeFile('person.json', peopleJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
