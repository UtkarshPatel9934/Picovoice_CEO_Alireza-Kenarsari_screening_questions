'use strict';

/* Select Bodys for all */

/* Select C# body */
let selectCSharp_Body = document.querySelector('.CSharp_Body');
/* Select C# body */

/* Select Go body */
let selectGo_Body = document.querySelector('.Go_Body');
/* Select Go body */

/* Select Java body */
let selectJava_Body = document.querySelector('.Java_Body');
/* Select Java body */

/* Select NodeJs body */
let selectNodeJs_Body = document.querySelector('.NodeJs_Body');
/* Select NodeJs body */

/* Select Php body */
let selectPhp_Body = document.querySelector('.Php_Body');
/* Select Php body */

/* Select Python body */
let selectPython_Body = document.querySelector('.Python_Body');
/* Select Python body */

/* Select Ruby body */
let selectRuby_Body = document.querySelector('.Ruby_Body');
/* Select Ruby body */


/* Select Bodys for all */



/* Select Links for all */

/* Select C# body */
let selectCSharp = document.querySelector('#CSharp');
/* Select C# body */

/* Select Go body */
let selectGo = document.querySelector('#Go');
/* Select Go body */

/* Select Java body */
let selectJava = document.querySelector('#Java');
/* Select Java body */

/* Select NodeJs body */
let selectNodeJs = document.querySelector('#Node');
/* Select NodeJs body */

/* Select Php body */
let selectPhp = document.querySelector('#Php');
/* Select Php body */

/* Select Python body */
let selectPython = document.querySelector('#Python');
/* Select Python body */

/* Select Ruby body */
let selectRuby = document.querySelector('#Ruby');
/* Select Ruby body */

/* Select Links for all */


selectCSharp_Body.style.display = "block";


selectCSharp.addEventListener('click', () => {
		selectCSharp_Body.style.display = "block";
		

		/* set others body display property to none */
		selectGo_Body.style.display = "none";
		selectJava_Body.style.display = "none";
		selectNodeJs_Body.style.display = "none";
		selectPhp_Body.style.display = "none";
		selectPython_Body.style.display = "none";
		selectRuby_Body.style.display = "none";
		/* set others body display property to none */
	})

	selectGo.addEventListener('click', () => {
		selectGo_Body.style.display = "block";

		/* set others body display property to none */
		selectCSharp_Body.style.display = "none";
		selectJava_Body.style.display = "none";
		selectNodeJs_Body.style.display = "none";
		selectPhp_Body.style.display = "none";
		selectPython_Body.style.display = "none";
		selectRuby_Body.style.display = "none";
		/* set others body display property to none */


		/* remove the default styling for the CShrap Link if clicked to other anchor element */
		selectCSharp.className = "";
		/* remove the default styling for the CShrap Link if clicked to other anchor element */
	})
	
	selectJava.addEventListener('click', () => {
		selectJava_Body.style.display = "block";

		/* set others body display property to none */
		selectCSharp_Body.style.display = "none";
		selectGo_Body.style.display = "none";
		selectNodeJs_Body.style.display = "none";
		selectPhp_Body.style.display = "none";
		selectPython_Body.style.display = "none";
		selectRuby_Body.style.display = "none";
		/* set others body display property to none */


		/* remove the default styling for the CShrap Link if clicked to other anchor element */
		selectCSharp.className = "";
		/* remove the default styling for the CShrap Link if clicked to other anchor element */
	})

	selectNodeJs.addEventListener('click', () => {
		selectNodeJs_Body.style.display = "block";

		/* set others body display property to none */
		selectCSharp_Body.style.display = "none";
		selectGo_Body.style.display = "none";
		selectJava_Body.style.display = "none";
		selectPhp_Body.style.display = "none";
		selectPython_Body.style.display = "none";
		selectRuby_Body.style.display = "none";
		/* set others body display property to none */


		/* remove the default styling for the CShrap Link if clicked to other anchor element */
		selectCSharp.className = "";
		/* remove the default styling for the CShrap Link if clicked to other anchor element */
	})

	selectPhp.addEventListener('click', () => {
		selectPhp_Body.style.display = "block";

		/* set others body display property to none */
		selectCSharp_Body.style.display = "none";
		selectGo_Body.style.display = "none";
		selectJava_Body.style.display = "none";
		selectNodeJs_Body.style.display = "none";
		selectPython_Body.style.display = "none";
		selectRuby_Body.style.display = "none";
		/* set others body display property to none */


		/* remove the default styling for the CShrap Link if clicked to other anchor element */
		selectCSharp.className = "";
		/* remove the default styling for the CShrap Link if clicked to other anchor element */
	})

	selectPython.addEventListener('click', () => {
		selectPython_Body.style.display = "block";

		/* set others body display property to none */
		selectCSharp_Body.style.display = "none";
		selectGo_Body.style.display = "none";
		selectJava_Body.style.display = "none";
		selectNodeJs_Body.style.display = "none";
		selectPhp_Body.style.display = "none";
		selectRuby_Body.style.display = "none";
		/* set others body display property to none */


		/* remove the default styling for the CShrap Link if clicked to other anchor element */
		selectCSharp.className = "";
		/* remove the default styling for the CShrap Link if clicked to other anchor element */
	})

	selectRuby.addEventListener('click', () => {
		selectRuby_Body.style.display = "block";

		/* set others body display property to none */
		selectCSharp_Body.style.display = "none";
		selectGo_Body.style.display = "none";
		selectJava_Body.style.display = "none";
		selectNodeJs_Body.style.display = "none";
		selectPhp_Body.style.display = "none";
		selectPython_Body.style.display = "none";
		/* set others body display property to none */


		/* remove the default styling for the CShrap Link if clicked to other anchor element */
		selectCSharp.className = "";
		/* remove the default styling for the CShrap Link if clicked to other anchor element */
	})	





/* Changing Theme Background for code */
// function changeTheme() {
// }




let selectButtons = document.querySelectorAll('.theme');
for (let i = 0; i < selectButtons.length; i++) {
	selectButtons[i].addEventListener('click', () =>
	{
		// let code = document.querySelectorAll('.code');
		// console.log(selectButtons[i]);
		selectButtons[i].previousSibling.previousElementSibling.classList.toggle("codeSection");
		// selectButtons.previousSibling.classList.toggle("codeSection");
			// for (var i = 0; i < code.length; i++) {

			// 	code[i].classList.toggle("codeSection");
			// }
		})
}


/* Changing Theme Background for code */





/* Adding Copy functionality */
var copyText = document.getElementById(".inputCode");



function copyTxt(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
alert('Copied to clipboard')
}

/* Adding Copy functionality */