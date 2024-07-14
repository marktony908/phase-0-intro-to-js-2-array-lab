// Write your solution here!

// index.js

// Initial array setup
let cats = ["Milo", "Otis", "Garfield"];

// Destructively appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

// Destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

// Destructively removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

// Appends a cat to the cats array and returns a new array, leaving cats array unchanged
function appendCat(name) {
    return cats.concat(name);
}

// Prepends a cat to the cats array and returns a new array, leaving cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}

// Removes the last cat in the cats array and returns a new array, leaving cats array unchanged
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

// Removes the first cat from the cats array and returns a new array, leaving cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}

// Destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

module.exports = {
    destructivelyRemoveFirstCat,
    // Add other function exports here as needed
};


module.exports = {
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};



