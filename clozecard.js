var inquirer = require("inquirer");

var cardQuestion = process.argv[2];
var cardAnswer = process.argv[3];

var ClozeCard = function(fullText, cloze){
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, "...");
};

var count = 0;
var askQuestion = function(){
//for (count < 5) {

inquirer.prompt([
  {message: "create flashcards below"}
  {
    type: "input",
    name: "question",
    message: "Write full text here"
  },
  
  {
  	type: "input",
    name: "answer",
    message: "Write the answer here"
  },
]).then(function(result) {

	var newFlashCard = new Programmer(
		results.question, 
		results.answer); 
	
	newFlashCard.printInfo();

	count++;

	askQuestion();
   });

}


//testing purposes CL:  node clozecard.js
var factA = new ClozeCard ("Penguins are flightless birds that dive for fish.","Penguins");
var factB = new ClozeCard ("Flamingos are pink birds that get their coloration from eating shrimp.","Flamingos");
var factC = new ClozeCard ("Boobies are pelagic member of the pelican family with blue feet and a stupid face.","Boobies");
var factD = new ClozeCard ("Cuckoos are parasitic birds that lay their eggs in other birds nests for them to raise.","Cuckoos");

console.log(factA.cloze);
console.log(factA.fullText);
console.log(factA.partial);

module.exports = ClozeCard
