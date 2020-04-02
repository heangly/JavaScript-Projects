var numberOfSquares = 6;
var colors=generateRandomColor(numberOfSquares);
var square =document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares =3;
	colors = generateRandomColor(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i=0; i < square.length; i++){
		if (colors[i]){
			square[i].style.background = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares =6;
	colors = generateRandomColor(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i=0; i < square.length; i++){
			square[i].style.background = colors[i];
			square[i].style.display = "block";	
	}
})

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColor(numberOfSquares);
	//pick a new random color from arrary
	pickedColor = pickColor();
	//change colorDisplay to match pick color
	colorDisplay.textContent = pickedColor;
	// change colors of square from the page

	h1.style.background = "steelblue";
	message.textContent="";

	for(var i = 0; i < square.length; i++){
		square[i].style.background = colors[i];
	}

})

colorDisplay.textContent = pickedColor;

for (var i = 0; i<square.length; i++){
	square[i].style.backgroundColor = colors[i];
	// add click listener
	square[i].addEventListener("click", function(){
		// grab color of picked square
		var clickColor = this.style.backgroundColor;
		//compare color to pickcolor
		if (clickColor === pickedColor){
			message.textContent ="Correct!";
			resetButton.textContent = "Play Again?";
			changeColor(clickColor);
			h1.style.backgroundColor = clickColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Incorrect! Try again!";
		}
	})// end of function
}// end of for loop

function changeColor(color){
	//loop through all square
	for (var i=0; i<square.length; i++){
		// change each color to match given color
		square[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr =[]
	// repeat num times
	for (var i = 0; i<num; i++){
		arr.push(randomColor())
		// get random color and push into arr

	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 -255
	var r = Math.floor(Math.random()*256);
	// pick a "green" from 0 -255
	var g = Math.floor(Math.random()*256);
	// pick a "blue" from 0 -255
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", " + g + ", " + b + ")"; 
}



