"use strict";
//**************************************************//  // **************************************************//
// (() => {
// IIFE - Immediately Invoked Function Expression
//
// *TODO: Even or Odd Numbers
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

// *TODO: Date validation
const isDateValid = (date) => {
  return !Number.isNaN(date.getTime());
};

//--    ARRAY OF OBJECTS: STRING SORT FUNCTION USING localeCompare()  --//
// const sortedList = moreCars.sort((a, b) => a.make.localeCompare(b.make));
//--    USING sort()  --//
const sortedCars = (arr) => {
  return arr.sort((a, b) => {
    const el1 = a.make
    const el2 = b.make
    if (el1 < el2) {
      return -1;
    } else if (el1 > el2) {
      return 1;
    } else {
      return 0;
    }
  })
}


//--    NUMERICAL SORTING ARRAY CHECK  --//
//--    THIS IS ONLY FOR CHECKING THAT THE ARRAY IS CORRECTLY SORTED  --//
const sortedNumberArray = (array) => array.slice(1).every((element, index) => element >= array[index])

// *TODO: Date Reformatting
function reformatDate(date) {
  let today = new Date();
  let year = today.getFullYear();
  let dateParts = date.split(" ");
  let month = dateParts[1].split("/")[0];
  let day = dateParts[1].split("/")[1];
  let newDateString = `${month}/${day}/${year}`;
  if (month === 12 && today.getMonth() === 0) {
    year -= 1;
    newDateString = `${month}/${day}/${year}`;
  }
  return newDateString;
}

// *TODO: Currency Formatting
const formatCurrency = (num, lang="en", country="US", style="currency", currency="USD") => {
  return parseFloat(num).toLocaleString(`${lang}-${country}`, { style: style, currency: currency });
}

// *TODO: Do something "x" number of times
const times = (times, func) => {
  if (isNaN(times)) {
    console.error("times to run must be specified");
    return;
  }
  if (typeof func !== "function") {
    console.error(`func must be a vaild function, ${typeof func} provided`);
    return;
  }
  Array.from(Array(times)).forEach(() => {
    func();
  });
};
// times(3, () => console.log("hello"));

// *TODO: Generate a random number within a range
const getRandomNumInRange = (lower = 0, upper = 10) => {
  if (isNaN(lower) || isNaN(upper)) {
    console.error("lower and upper must be valid numbers");
    return;
  }
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

// *TODO: Shorten a string with ellipses
const shorten = (text, length = 10, ellipsisCount = 3) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`expecting a string, ${typeof text} provided`);
    return "";
  }
  if (isNaN(length) || isNaN(ellipsisCount)) {
    console.error("length and ellipsisCount must be valid numbers");
    return;
  }

  if (text.length <= length) {
    return text;
  }
  const ellipsis = Array.from(Array(ellipsisCount)).map(() => ".").join("");
  return `${text.substr(0, length)}${ellipsis}`;
};
// shorten("I am some text", 4, 2);

// *TODO: Remove duplicates from an Array
const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    console.error(`array expected, ${typeof arr} provided`);
    return;
  }
  return [...new Set(arr)];
};
// removeDuplicates(["Tom", "Simon", "Tom", "Sarah"]);

// *TODO: Debounce (delay) a function
const debounce = (func, timeout = 2500) => {
  if (typeof func !== "function") {
    console.error(`func must be a vaild function, ${typeof func} provided`);
    return;
  }
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timout);
  };
};

// *TODO: Measure the performance of a function
const measureTime = (func, label = "default") => {
  if (typeof func !== "function") {
    console.error(`func must be a vaild function, ${typeof func} provided`);
    return;
  }
  console.time(label);
  func();
  console.timeEnd(label);
};

// measureTime("labelOfFunctionTest", function);
function measurePerformance(name, fn, ...args) {
  if (typeof fn !== "function") {
    console.error(`Provide a valid function, ${typeof fn} provided`);
    return;
  }
  console.time(name);
  fn.bind(this, ...args);
  console.timeEnd(name);
}

// *TODO: Slugify a string
const slugify = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof str} provided`);
    return str;
  }
  return text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
// slugify("Hello, everyone!");

// *TODO: CamelCase to SnakeCase
const camelToSnakeCase = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  return text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
// camelToSnakeCase("camelCaseToSnakeCase");

// *TODO: snakeToCamelCase("snake_case_to_camel_case");
const snakeToCamelCase = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  text.toLowerCase().replace(/([-_][a-z])/g, group => group.toUpperCase().replace("-", "").replace("_", ""));
};

// Email validation
const emailIsValid = (email) => {
  if (!(typeof email === "string" || email instanceof String)) {
    console.error(`string expected, ${typeof email} provided`);
    return false;
  }
  const expression = /\S+@\S+\.\S+/;
  return expression.test(email);
};
// emailIsValid("somebody@somewhere.com"); <true>
// emailIsValid("nobody@nowhere"); <false>

// *TODO: Convert a number to a currency
const convertToCurrency = (num, currency = "USD", locale = "en-US") => {
  const formatter = new Intl.NumberFormat(locale, { style: "currency", currency: currency });
  return formatter.format(num);
};

// *TODO: Convert a HTML string to a DOM Object
function parseStringAsHtml(content, selector) {
  const domParser = new DOMParser();
  const parsed = domParser.parseFromString(content, "text/html");
  return parsed.querySelector(selector);
}

// *TODO: Convert Form Data to JSON
function convertFormdataToJsonObject(formData) {
  const data = {};

  for (const [key, value] of formData.entries()) {
    if (Object.hasOwnProperty.call(data, key)) {
      const oldValue = data[key];
      if (!Array.isArray(data[key])) {
        data[key] = [];
        data[key].push(oldValue);
      }
      data[key].push(value);
      continue;
    }
    data[key] = value;
  }
  return data;
}

/*
*TODO: Calculate total age of all users using reduce function
 */
const users = [
  { name: "Marie", age: 25 },
  { name: "Ken", age: 22 },
  { name: "Sara", age: 29 },
  { name: "Geoff", age: 30 }
];
// users.reduce((total, currentUser) => total + currentUser.age, 0);

const reducer = (total, currentUser) => {
  console.log("current total:", total);
  console.log("current user:", currentUser);
  console.log("\n");
  return total + currentUser.age;
};
// users.reduce(reducer, 0);

//**************************************************// SEQUENCE (RANGE) GENERATOR  // **************************************************//
const range = (start, stop, step) => Array.from({ length: (stop - start) - 1 / step + 1}, (_, i) => start + i * step);

// GENERATE NUMBERS RANGE USING FUNCTION 0 -> 10
range(0, 10, 1);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// GENERATE NUMBERS RANGE USING FUNCTION 0 -> 20 WITH STEP 2
range(0, 20, 2);
// [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//--      --////--    ALPHABET ARRAY  --////--      --//
let alpha = range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//--      --////--    RANDOM NUMBER ARRAY GENERATOR WITH RANGE  --////--      --//
let randomNumberArray = (size) => {
  return range(0, size, 1).map(x => randomNumber(0, 100));
}
// console.log(randomNumberArray(50));

let randNumArr = (arraySize) => {
  const array = [];
  for (let i = 0; i < arraySize; i++) {
    let randomNum = randomNumber(0,20);
    while(array.includes(randomNum)) {
      randomNum = randomNumber(0,20);
    }
    array.push(randomNumber(0, 20));
  }
  return array;
}

//--      --////--    KEYWORD CIPHERS  --////--      --//
function keywordCipher(string, keyword) {
  const letter = "abcdefghijklmnopqrstuvwxyz";
  const newKey = [...new Set(keyword + letter)]
  return string.toLowerCase().replace(/[a-z]/g, x => newKey[letter.indexOf(x)])
}

function keywordCipher1(str, keyword) {
  const encryptKey = [...new Set(keyword + "abcdefghijklmnopqrstuvwxyz")];
  return str.toLowerCase().replace(/[a-z]/g, (l) => encryptKey[l.charCodeAt() - 97]);
}

function keywordCipher2(str, keyword) {
  const encryptKey = new Map(Array.from(new Set(keyword + "abcdefghijklmnopqrstuvwxyz"), (l, i) => [String.fromCharCode(97 + i), l]))
  return str.replace(/\w/g, l => encryptKey.get(l.toLowerCase()))
}

//--      --////--    GENERATE THE ALPHABET IN REVERSE ORDER  --////--      --//
let alphaReverse = range("Z".charCodeAt(0), "A".charCodeAt(0), 1).map(x => String.fromCharCode(x));

// GENERATE UNORDERED LIST FROM ARRAY
const arrayToUnorderedList = (array) => `<ul>\n\t<li> ${array.join(`</li>\n\t<li>`)} </li>\t\n</ul>`;



// })();



