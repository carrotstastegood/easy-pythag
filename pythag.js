var a = prompt("First number:"); // Get a and square it
var b = prompt("Second number:"); // Get b and square it
var c = prompt("Third number (or 'c' if unknown):"); // Get c or 'c'

a *= parseFloat(a);
b *= parseFloat(b);

function forC() { // Calculate for c
    c = a + b;
    c = Math.sqrt(c);
    alert(`The length of the hypotenuse is: ${c}`); // Show the result
};

function isRight() { // Check if triangle is right-angled
    if (c !== "c") {
        c = parseFloat(c);
        cSQ = c * c; // Square c if it's a number
    }

    if (a + b === cSQ) { // Compare a + b to c
        alert(`Triangle is right-angled. (c = ${c})`); // Alert if true
    } else {
        alert(`Triangle is not right-angled. (c = ${c})`); // Alert if false
    };
};

if (c === "c") { // Decide which function to call
    forC();
} else {
    isRight();
};
