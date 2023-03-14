//alert("hello pogi")
// querySelector() is a method that can be used to select a specific from our document.
console.log(document.querySelector("#txt-first-name"));

console.log(document);
/*
	Alternative ways to access HTML elements. This is what we can use aside from the querySelector().

	document.getElementById("txt-first-name");
	document.getElementsByClassName("txt-first-name");
	document.getElementsByTagName("input");
*/

console.log(document.getElementById("txt-first-name"));

// ===== event listener =====

const txtFirstName = document.querySelector("#txt-first-name");
const spanFullName = document.querySelector("#span-full-name");
const txtLastName = document.querySelector("#txt-last-name");

console.log(txtFirstName);
console.log(spanFullName);

/*

	Event
		ex: clock, hover, keypress and many other events

	Event Listeners
		Allows us to let our user/s intereact with our page. With each click or hover there is an event which triggers a function/task.

	Syntax:
		selectedElement.addEventListener("event", function);

*/


txtFirstName.addEventListener("keyup", (event) => {
	//"innerHTML" property retrieves the HTML content within the element
	//  "value" property retrieves the value from the HTML element
	spanFullName.innerHTML = txtFirstName.value
});

// alternative way to write the code for event handling
txtLastName.addEventListener("keyup", printLastName);

function printLastName(event){
	spanFullName.innerHTML = txtLastName.value
};

txtFirstName.addEventListener("keyup", event => {
	console.log(event);
	console.log(event.target);
	console.log(event.target.value);
})

/*
	The "event" argument contains the information on the triggered event.
	The "event.target" contains the element where the event happened.
	the "event.target.value" gets the value of the input object (this is similar to txtFirstName.value).
*/
const firstNameLabel = document.querySelector("#first-name-label");

firstNameLabel.addEventListener("onclick", event => {
	alert("your enter the first name label");
});

