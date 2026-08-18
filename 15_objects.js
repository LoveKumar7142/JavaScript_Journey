//! Object -> it is an datatype where we can witer key and value pair

let obj = {
  name: "Love",
  age: 24,
  isMarried: false,
};

console.log(obj);

//! here is no .length peoperty we cant find the length of object in .length

//! Object is a collection of key value pair or stores related information as a set of key-value pairs. It's a way to group data and functions together.

//! Object are mutable

//? Ex : think of a real-life object "Car"

// create an object using lateral syntax

let car = {
  //properties (brand,color,speed)
  brand: "toyota",
  color: "red",
  speed: 120,
  drive: function () {
    // behaviour / methods (drive,stop)
    console.log("The car is driving");
  },

  "full name": "Love",
};

console.log(car);
console.log(car.brand);
console.log(car.drive()); // here is undefine because we can't return anything in function and we also use console inside the function so simple write car.drive();

car.drive();

console.log(car["brand"]);

car["drive"]();

console.log(car["full name"]);

let test = "full name";
console.log(car.test); // gives undefine
console.log(car[test]); // gives 'Love'

// create an object using constructor

let person = new Object();
person.name = "Love";
person.age = 25;

let obj2 = {
  name: "Love",
};
//! add
obj2.age = 24;

console.log(obj2);

//! update
obj2.name = "Love Kumar";
console.log(obj2);

//! delete

delete obj2.age;
console.log(obj2);

//! this keyword

// obj = {
//     name : "alpha",

//     greet : function () {
//         console.log(`hello i am ${name}`)
//     }
// }

// obj.greet() // we can access greet function name so we will use this keyword that help to point the current object

obj = {
  name: "alpha",

  greet: function () {
    console.log(`hello i am ${this.name}`);
  },
};
obj.greet();

// obj = {
//     name : "alpha",

//     greet : () => {
//         console.log(`hello i am ${name}`)
//     }
// }

// obj.greet()

obj.hello = function () {
  console.log(this);
};

obj.hello();

//? some methods of objects

let keys = Object.keys(obj);

console.log(keys);

let values = Object.values(obj);

console.log(values);

// we can not iterate for of loop in object but we are able to iterate for in loop
// for(let test of obj){
//    console.log(test)
// }

// key iterate
for (let test in obj) {
  console.log(test);
}

// we can not use map function in object
// obj.map()

//! Object.keys(obj) and Object.values(obj) always return an array so we are able to any operation of array after this ook

let entries = Object.entries(obj);

console.log(entries); // return nested array

//! i want to copy my object use spread operator

obj2 = {
  ...obj,
};

console.log(obj2);

//! or

// let obj3 = Object.assign(obj3,obj) // cannot assign befor initilization

let obj3 = {};

Object.assign(obj3, obj);

console.log(obj3);

//! freeze => after this we can not update, not add, not delete of an object

obj = {
  name: "alpha",
  age: 24,
};

Object.freeze(obj);

obj.city = "ghaziabad";

console.log(obj);

//! seal => not add, not delete but we are able to update
Object.seal(obj2);

obj2.city = "ghaziabad";

delete obj2.name;

obj2.name = "beta"; // only it will work
console.log(obj2);

//! hasOwnProperty => it is use to find in object

console.log(obj.hasOwnProperty("alpha")); // false because it is not key it is value

console.log(obj.hasOwnProperty("name")); // true because it is key

//! it is singleton object it is not a class based object ook -> more info search in chatgpt or google

//! Destructuring

let obj4 = {
  name: "Love",
  age: 24,
};

const { name, age } = obj4;

console.log(name, age);

//? Practice Question

//! 1) crate a person object with properties : name, age, and city. Then
//! a) Log each property as: value of "name" property is "Love" using loop

//! b) Add a new property called email to the person object.

//! c) Delete "city" property from person object.

person = {
  name: "pradeep",
  age: "57",
  city: "Delhi",
};

for (let key in person) {
  console.log(` ${key} -> ${person[key]}`);
}

person.email = "pradeep.rajput@4evercloud.com";

console.log(person);

delete person.city;

//! 2) create a function that takes an object with firstname, middleName, LastName properties and returns the full name.

obj = {
  firstName: "Love",
  lastName: "Kumar",
};

const fullname = (prop) => {
  return prop.firstName + " " + prop.lastName;
};

console.log(fullname(obj));

//! 3) write the function that takes object and return the number of properties in the object

keys = Object.keys(obj).length;

console.log(keys);

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "users" },
  { name: "Charli", role: "admin" },
];

//! 4) Write a function that returns an array of names of users who have the role "admin" ?

let filterArray = (users, role) => {
  let user = users.filter((item) => {
    return item.role === role;
  });

  let username = user.map((item) => {
    return item.name;
  });
  return username;
};

console.log(filterArray(users, "admin"));

//! 5) write a function searchProducts(products,keyword) that returns an array of products whose name includes the given keyword (case-sensitive)

let products = [
  { id: 1, name: "iphone 14" },
  { id: 2, name: "Samsung Galaxy" },
  { id: 3, name: "Google Pixal" },
];

// function searchProducts(products,searchKeyword) {
//   return products.filter(item => item.name.toLowerCase() === searchKeyword.toLowerCase() )
// }
function searchProducts(products, searchKeyword) {
  return products.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase()),
  );
}

console.log(searchProducts(products, "14"));

//! 6) write a function groupByPost(comments) that returns an object grouping comments by postId:
const comments = [
  { postId: 1, text: "Great post!" },
  { postId: 2, text: "Thanks!" },
  { postId: 1, text: "Very Helpfull" },
];

function groupByPost(comments) {
  console.log(comments);

  let groupedComment = {};
  // first way
  for (let obj of comments) {
    console.log(obj);
    if (groupedComment.hasOwnProperty(obj.postId)) {
      groupedComment[obj.postId].push(obj.text);
    } else {
      groupedComment[obj.postId] = [obj.text];
    }
  }

  // second way
  let groupedComment2 = {}
  comments.forEach(obj => {
    if(groupedComment2.hasOwnProperty(obj.postId)){
      groupedComment2[obj.postId].push(obj.text)
    }else {
      groupedComment2[obj.postId] = [obj.text]
    }
  });
  return {groupedComment,groupedComment2};
}

console.log(groupByPost(comments));


//! 7) write a function buildQuery(params) that return url 

const params = {search: "laptop", page : 2, sort : "price"}

function createUrl(params){
  // console.log(`search=${params.search}&page=${params.page}&sort=${params.sort}`)
  let url = ""
  for (const key in params) {
    url = url +`${key}=${params[key]}&`
  }
  let finalUrl = url.slice(0,url.length - 1)
  return finalUrl;
}

console.log(createUrl(params))