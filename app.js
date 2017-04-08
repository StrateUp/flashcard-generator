var flash = require("./basiccard.js");

var game = new BasicCard("Pugs are an ancient species originating in China", "Pugs");

console.log(game.cards);

game.addCards("Killer Whales live in matrichial family groups called pods.","Killer Whales");
console.log(game.cards);