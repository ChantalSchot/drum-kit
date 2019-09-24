// document.querySelectorAll("button")[].addEventListener("click",handleClick); // Select first button only for click event

// Handling mouse clicks on buttons:

var allDrums = document.querySelectorAll(".drum"); //new variable creating array of all buttons

for (var i=0; i < allDrums.length; i++) { //add event listener to each button in the array
	allDrums[i].addEventListener("click", handleClick);
}

function handleClick() { //function to create input when button is clicked
	var buttonInnerHTML = this.innerHTML;
	makeSound(buttonInnerHTML);
	buttonAnimation(buttonInnerHTML);
	setTimeout(buttonAnimation,500);
	// console.log(buttonInnerHTML);
}

// Handling key presses:

document.addEventListener("keydown", handleKey); //Event listener for key inputs

function handleKey(event) { //function to create input when key is pressed
		var pressedKey = event.key;
		makeSound(pressedKey);
		buttonAnimation(pressedKey);
		setTimeout(buttonAnimation,500);
		// console.log(pressedKey);
}

// Switch function to play different sounds for different inputs:

function makeSound(key) { // function to make sound when key is pressed OR mouse is clicked (i.e. play audio)

	switch (key) {
		case "w":
			// console.log("W pressed");
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;

			case "a":
			// console.log("A pressed");
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
				break;

			case "s":
				// console.log("S pressed");
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
				break;

			case "d":
				// console.log("D pressed");
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
				break;

			case "j":
				// console.log("J pressed");
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;

			case "k":
				// console.log("K pressed");
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
				break;

			case "l":
				// console.log("L pressed");
				var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();
				break;

		default: console.log(key);
	}
}

// Button animation:

function buttonAnimation(currentKey) { // input from key or click
	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");

	setTimeout(function() { // remove pressed class after 100 ms.
		activeButton.classList.remove("pressed");
	},100);
}
