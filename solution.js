'use strict';

class Solution {

    constructor(sentence) {
        this.sentence = sentence;
        this.name = "gerry";
        this.s = [];
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }


    isEmpty() {
        if (this.s.length === 0) {
            return true;
        }
    }

    addNew(el) {
        if (!this.s.includes(el)) {
            this.s.push(el);
            return true;
        } else {
            return false;
        }
    }

    includesEl(el) {
        if (this.s.includes(el)) {
            return true;
        }
        return false;
    }
}

module.exports = Solution;