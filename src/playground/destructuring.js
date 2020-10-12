//Object de-structuring

const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "Philadelphia",
    temp: 92,
  },
};
//            rename       default value
const { name: firstName = "Anonymous", age } = person;

//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}`);

//                 rename variable
const { citayy, temp: temperature } = person.location;
if (citayy && temperature) {
  console.log(`It's ${temperature} in ${citayy}.`);
}

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

//Array de-structuring

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];
//                           default value
const [street, city, state = "New York", zip] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
