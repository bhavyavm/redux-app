const person = {
    name: 'bhavya',
    age: 26,
    location: {
        city: 'bangalore',
        temp: 92
    }
}
//defult value
const { name, age, loc = 'kerala' } = person;
console.log(`${loc}`)

//renaming the variable
const { city, temp: temperature } = person.location;
console.log(temperature);
console.log(`${person.name} is ${person.age}`);
console.log(`${name} is ${age}`)


///arrray destructering

const address = ['1st main', 'BTM', 'bangalore'];
const [a, ...b] = address;
console.log(b);
const [,,c] = address;
console.log(c);
const [,,,d='554'] = address;
console.log(d);