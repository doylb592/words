var nouns = ["Hello Kitty","Badtz Maru","My Melody", "My Sweet Piano", "Keroppi","Cinnamaroll"];
var adverbs = ["is","isn't","won't be"];
var adjectives = ["happy","sad","sweet","funny","evil"];
var colors = ["blue","green","yellow","black","red","orange"];
var myVars = [nouns,adverbs,adjectives,colors];


var randNum;

function setup(){
	createCanvas(windowWidth, windowHeight);

	randNum1 = floor(random(0,adjectives.length));
	randNum2 = floor(random(0,nouns.length));
	randNum3 = floor(random(0,adverbs.length));
	randNum4 = floor(random(0, colors.length));


}

function draw(){
	background("pink");
	textFont("georgia");
	textSize(60);
	fill(colors[randNum4]);

	text(nouns[randNum2]+ " "+adverbs[randNum3]+ " "+adjectives[randNum1], 100,200)





}
