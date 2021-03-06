// Task #1
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./" ;
let arr = [];
const symbolArr = alphabet.split("");

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max-min)) + min;
}

let addKeyboardLayout = alphabet => {
	arr[0]=symbolArr.slice(0,12);
	arr[1]=symbolArr.slice(12,23);
	arr[2]=symbolArr.slice(23,34);

	document.getElementById('string1').innerHTML= arr[0];
	document.getElementById('string2').innerHTML= arr[1];
	document.getElementById('string3').innerHTML= arr[2];

	let options = document.getElementById('row').options;

	document.getElementById('rand-char-string').onclick =()=>{
		Array.from(options).map(function(n,i){
			if(options[i].selected)
				return getRandCharInRow(options[i].value);
		})
	}
	return console.log(alphabet);
};

addKeyboardLayout(alphabet);

// Task #2
let getRandCharInRow = (row) => {
    document.getElementById('string-char').innerHTML = `${arr[row][getRandomInt(0, arr[row].length)]}`;
}

// Task #3
let getRandCharInAlph=()=> {
    document.getElementById('keyboard-char').innerHTML=`${symbolArr[getRandomInt(0, symbolArr.length)]}`;
}

document.getElementById('rand-char-keyb').onclick= getRandCharInAlph;