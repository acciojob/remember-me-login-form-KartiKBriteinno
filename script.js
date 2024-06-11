//your JS code here. If required.
let formEle = document.querySelector("form");
let userList = [];
formEle.addEventListener("submit", submitForm);

function submitForm(e){
	e.preventDefault();
	 
	let checkEle = document.getElementById("checkbox").checked;
	let userName = document.getElementById("username").value;
	let passWord = document.getElementById("password").value;
	let userObj = {
		username: userName,
		password: passWord
	};
	if(checkEle){
		userList.push(userObj);
		localStorage.setItem("usersData", JSON.stringify(userList));
	}
	alert( `Logged in as ${userName}`);
	formEle.reset();
}