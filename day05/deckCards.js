const deck = {
    cards: [],
    create: function createCard() {
        this.cards = [];
        let suits = ['clubs', 'hearts;', 'spades', 'diamonds'];
        for (let value of suits)
            for (let i = 1; i <= 13; i++) {
                this.cards.push({ suit: value, number: i });
            }
    },
    shuffle: function shuffleCards() {
        if (this.cards.length < 52)
            this.create();
        for (let i = 0; i < 100; i++) {
            let rand1 = Math.floor(Math.random() * 51) + 1;
            let rand2 = Math.floor(Math.random() * 51) + 1;
            let temp = this.cards[rand1];
            this.cards[rand1] = this.cards[rand2];
            this.cards[rand2] = temp;
        }
    },
    draw: function drawCards() {
        return this.cards.pop();
    },
    reset: function resetCards() {
        this.create();
    }

}

deck.create();
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
deck.shuffle();
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
deck.reset();
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
console.log(deck.draw());
