

const txtFirstName = document.querySelector("#txt-first-name");
const spanFullName = document.querySelector("#span-full-name");
const txtLastName = document.querySelector("#txt-last-name");


txtFirstName.addEventListener("keyup", printFullName)
txtLastName.addEventListener("keyup", printFullName)
function printFullName(event){
	spanFullName.innerHTML = (txtFirstName.value + " " + txtLastName.value)
};

/*txtLastName.addEventListener("keyup", printLastlName)
function printFullName(event){
	spanFullName.innerHTML = txtLastName.value
};*/

