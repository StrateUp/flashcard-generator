var ClozeCard = require("./clozecard.js");
var fs = require("fs");

var BasicCard = function(front, back){
	this.cards = [];
	this.addCards = function(full, clz){
		this.cards.push(new BasicCard(full, clz))
	}
	this.getCards = function(){
		fs.readFile("log.txt", "utf8", function(err, data){
			console.log(data);
		});
	};
	this.addCards = function(full, clz){
		var newClozeCard = new (full, clz);
		var logTxt = "\n/back: " + newClozeCard.full + "front: " + newClozeCard.clz;

	fs.appendFile("log.txt", logTxt);
	newClozeCard.makeCards();
	console.log(BasicCard.cards);
	console.log(BasicCard.addCards);

	};
}

var myCard = new BasicCard();

module.exports = BasicCard;