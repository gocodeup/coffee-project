const isEvenOrOdd = (num) => num % 2 === 0 ? ` is even` : ` is odd`;
//console.log(isEvenOrOdd(0))

const isEven = (num) => num % 2 === 0;

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let random = Math.floor((Math.random() * 3) + 1);

const randomNumber = (min, max) => Math.floor((Math.random() * (max - min + 1) + min));

const isNumericAndNotNaN = (input) => {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}

const isStringAndNaN = (input) => {
    return isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input === "string";
}

function shuffleArray(array) {
    // Loop through the array from the last index to the first
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at index i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Return the shuffled array
    return array;
}

const isConsonant = (letter) => {
    if (typeof letter !== 'string' || letter.length !== 1 || !letter.match(/[a-z]/i)) {
        return false; // input is not a single alphabetical letter
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return !vowels.includes(letter.toLowerCase());
}

function arrayOfRandomNumbers(lengthOfArray){
    const array = [];
    for (let i = 0; i < lengthOfArray; i++){
        let newRandomNumber = randomNumber(1, lengthOfArray + 100);
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1, lengthOfArray + 100);
        }
        array.push(newRandomNumber);
    }
    return array;
}

function removeDuplicates(arr) {
    return arr.filter((name, index) => arr.indexOf(name) === index);
}

function removeDuplicateObjects(arr) {
    return arr.filter(
        (obj, index, self) =>
            index ===
            self.findIndex((t) => t.name === obj.name)
    );
}