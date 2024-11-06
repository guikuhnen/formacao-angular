// Falsy = false, 0, "", NaN, undefined e null
// Truthy = Tudo que não for Falsy

if (null) {
    console.log(1);
} else {
    console.log(2); // esse
}

if ("null" * 10) { // NaN
    console.log(1);
} else {
    console.log(2); // esse
}

if (!null) {
    console.log(1); // esse
} else {
    console.log(2); 
}

if (1 + 1) {
    console.log(1); // esse
} else {
    console.log(2); 
}