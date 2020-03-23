class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    getNameofValue() {
        switch (this.value) {
            case 1: return 'Ace';
            case 11: return 'Jack';
            case 12: return 'Queen';
            case 13: return 'King';
            default: return this.value;
        }
    }
    toString() {
        return `Card { ${this.getNameofValue()} of ${this.suit}}`
    }
}

class Deck {
    constructor() {
        this.cards = [];
        let suits = ['Clubs', 'Hearts;', 'Spades', 'Diamonds'];
        for (let value of suits)
            for (let i = 1; i <= 13; i++) {
                this.cards.push(new Card(i, value).toString());
            }
    }

    shuffle() {
        if (this.cards.length < 52)
            this.create();
        for (let i = 0; i < 100; i++) {
            let rand1 = Math.floor(Math.random() * 51) + 1;
            let rand2 = Math.floor(Math.random() * 51) + 1;
            let temp = this.cards[rand1];
            this.cards[rand1] = this.cards[rand2];
            this.cards[rand2] = temp;
        }
        return this;
    }
    draw() {
        return this.cards.pop();
    }
    reset() {
        new Deck();
        return this;
    }
}

console.log(new Deck().draw());
console.log(new Deck().shuffle().draw());
console.log(new Deck().shuffle().draw());