class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor; 
    }

    greet() {
        console.log("Hi, my name is " + this.name + " and my favourite colour is " + this.favoriteColor + ".");
    }
}

/*function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.favoriteColor + ".");
    }
}*/

//module.exports = Person;

export default Person;