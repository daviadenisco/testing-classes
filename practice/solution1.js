'use strict';

class Solution1 {
    // add name
    // constructor(sentence) {
    constructor(sentence, name, pets) {
        // snetence isn't being used in the original code
        this.sentence = sentence;
        // don't want to hard code this bc then all instances
        // will use "gerry" nas the name
        // this.name = "gerry";
        this.name = name;
        this.pets = pets;
    }

    // Adding a method to the constructor
    greet() {
        // return `${this.name} says hello.`;
        return this.name + this.sentence;
    }

    howManyPets() {
        return this.pets.length;
    }
}

module.exports = Solution1;