// Your code here
const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals; // => An array
        this.friend = friend;
    }

    hasLifeGoals() {
        for (let i = 0; i < this.lifeGoals.length; i++) {
            const goals = this.lifeGoals[i];

            console.log(`${this.name} likes to ${goals}`);
        }
        return;
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }
}

module.exports = FriendlyDragon;
