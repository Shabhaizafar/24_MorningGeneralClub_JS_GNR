// How to Select Specific Element : 
// 1) using getElementById : 
console.log("Using getElementById : ");
console.log(document.getElementById('heading1'));

// 2) using getElementByClassName : 
console.log("Using getElementByClassName");
console.log(document.getElementsByClassName('class1'));

// 3) using getElementByTagName
console.log("Using getElementByTagName");
console.log(document.getElementsByTagName('h2'));

// 4) using QuerySelector

console.log('Using QuerySelector ');
console.log(document.querySelector('#heading1')); //ID
console.log(document.querySelector('.class1')); // class


console.log(document.querySelector('h2')); //
console.log(document.querySelector('h2.class1')); //
console.log(document.querySelector('h2#heading1')); //


// 5) using QuerySelectorAll
console.log('Using QuerySelectorAll');
console.log(document.querySelectorAll('h2'));
console.log(document.querySelectorAll('.class1'));
console.log(document.querySelectorAll('#heading1'));

///////////////////////////////////////////////////////////////////////

var body = document.body;

var h1 = document.createElement('h1');
h1.classList.add('class1');
h1.innerText = "New One";
console.log(h1);
body.appendChild(h1);


console.log(document.getElementsByClassName('class1'));

console.log(document.querySelectorAll('.class1'));