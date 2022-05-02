
/*Regex corresponding to an email*/
let EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let PASS_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
/*Animations*/ 
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
/*End animations*/

/*Begging error control*/
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
})

function checkInputs(){
	/*Get values */
	const userValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value =password2.value.trim();
	/*Check combinations*/
	if(userValue === ''){
		//show error
		//add error class
		setErrorFor(username, 'Name cannot be blank');
	}else{
		//add success class
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else{
		if(!isEmail(emailValue)){
			setErrorFor(email, 'Invalid Email');
		}else{
			setSuccessFor(email);
		}
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		if (!validatePassword(passwordValue)) {
			setErrorFor(password, 'Password should contain atleast one number and one special character');
		}else {
			setSuccessFor(password);
		}
	}
	if (password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else {
		/*As the password has already been validated I simple ask
		if they match*/
		if (password2Value === passwordValue) {
			setSuccessFor(password2);
		}else {
			setErrorFor(password2, 'Passwords don\'t match ');
		}
	}
}

function setErrorFor(input, message){
	/*I get the form control of the corresponding input*/
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	//add error message
	small.innerText = message;
	//add error class
	formControl.className = 'form-control error';
}

function setSuccessFor(input){
	/*I get the form control of the corresponding input*/
	const formControl = input.parentElement;
	//add success class
	formControl.className = 'form-control success';
}

function isEmail(email){
	return EMAIL_REGEX.test(email);
}

function validatePassword(password) {
    let minNumberofChars = 6;
    let maxNumberofChars = 16; 
    if(password.length < minNumberofChars || password.length > maxNumberofChars){
        return false;
    }
    if(!PASS_REGEX.test(password)) {
        return false;
    }
	return true;
}
/*End error control */