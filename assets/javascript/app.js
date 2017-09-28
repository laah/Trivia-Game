
// quest1: {
// Who was the legendary Benedictine monk who invented champagne?: 
// ["Dom Perignon", "Jaques Champaine", "Perrier Blanchard", "Monti Christo"],
// }
// quest2: {
// Name the largest freshwater lake in the world?: 
// ["Lake Superior", "Lake Ontario", "Lake Victoria", "Lake Michigan"],
// }
// quest3: {
// Where would you find the Sea of Tranquility?: 
// ["The Moon", "Saturn", "Turkey", "Mars"],
// }
// quest4: {
// What is someone who shoes horses called?: 
// ["A farrier", "A blacksmith", "A cobbler", "A shoer"],
// }
// quest5: {
// What item of clothing was named after its Scottish inventor?: 
// ["A Mackintosh", "An Ascott", "A Jumper", "A Tunic"],
// }
// quest6: {
// What kind of weapon is a falchion?: 
// ["A sword", "A gun", "A crossbow", "A knife"],
// }
// quest7: {
// Name the world\''s biggest island?: 
// ["Greenland", "England", "Ireland", "Japan"],
// }
// quest8: {
// What is the world\''s longest river?: 
// ["Amazon", "Nile", "Mississippi", "St Laurence"],
// }
// quest9: {
// Name the world\''s largest ocean: 
// ["Pacific", "Atlantic", "Indian", "Antartic"],
// }
// quest10: {
// What is the diameter of Earth?: 
// ["8,000 miles", "10,000 miles", "5,000 miles", "13,000 miles"],
// }
// quest11: {
// Who invented the rabies vaccination?: 
// ["Louis Pasteur", "Charles DuBois", "Linus Pauling", "Annette Dauphani"],
// 
var count = 60;
var time = setInterval(timer, 1000);

function timer(){
	count--;
	$("#timer").html(count);
	if(count == 0){
		 clearInterval(time);
		 $("#timer").append("<h1>Time's Up!</h1>");
		 check();
		}
	}

function check(){
	var question1 = document.trivia.question1.value;
	var question2 = document.trivia.question2.value;
	var question3 = document.trivia.question3.value;
	var question4 = document.trivia.question4.value;
	var question5 = document.trivia.question5.value;
	var question6 = document.trivia.question6.value;
	var correct = 0;
	var incorrect= 0;

	if (question1 == "Dom Perignon"){
		correct++;
	 }else {
	 	incorrect++;
	}
	if (question2 == "Lake Superior"){
		correct++;
	}else {
		incorrect++;
	 }
	if (question3 == "The Moon"){
		correct++;
	}else{
		incorrect++;
	}
	if (question4 == "A farrier"){
		correct++;
	}else {
		incorrect++;
	}
	if (question5 == "A Mackintosh"){
		correct++;
	}else {
		incorrect++;
	}
	if (question6 == "A sword"){
		correct++;
	}else {
		incorrect++;
	}
	document.getElementById("timer").style.visibility="hidden";
	document.getElementById("trivia").style.visibility="hidden";
	document.getElementById("afterCheck").style.visibility="visible";
	document.getElementById("numberCorrect").innerHTML="You got "+ correct + " correct!";
	document.getElementById("numberIncorrect").innerHTML="You got "+ incorrect + " incorrect!";
}







