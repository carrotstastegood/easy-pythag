var a = prompt("First number:"); // Get a and square it
var b = prompt("Second number:"); // Get b and square it
var c = prompt("Third number (or 'c' if unknown):"); // Get c or 'c'

a *= parseFloat(a); // Square a
b *= parseFloat(b); // Square b

function forC() { // Calculate for c
    c = a + b;
    c = Math.sqrt(c);
    alert(`The length of the hypotenuse is: ${c}`); // Show the result
};

function isRight() { // Check if triangle is right-angled
    
    c *= parseFloat(c); // Square

    if (a + b === c) { // Compare a + b to c
        alert(`Triangle is right-angled. a^2 (${a}) + b^2 (${b}) = c (${c})`); // Is true
    } else {
        alert(`Triangle is not right-angled. a^2 (${a}) + b^2 (${b}) ≠ c (${c})`); // Is false
    };
};

if (c === "c") {
    forC(); // Solve for c
} else {
    isRight(); // Determine if triangle is right.
};
