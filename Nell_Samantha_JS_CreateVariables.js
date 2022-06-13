//Declaring a variable (height) and assigning a value x
var height = 42 //where height is >= 42


//Declaring a variable (age) and assigning a value y
var age = 11 // where age is >= 11
c
function canride(height, age) {
 if (height>=53 && age>=11) {
    console.log ("Get on that ride, kiddo!")
} else {
    console.log ("Sorry kiddo. Maybe next year")
}   
}

function canride(height, age) {
 if (height>=53 || age>=11) {
    console.log ("Get on that ride, kiddo!")
} else {
    console.log ("Sorry kiddo. Maybe next year")
}   
}
canride(45, 12)