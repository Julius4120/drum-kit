
// Anonymous function

// document.querySelector("button").addEventListener("click", function got_clicked() {
//     alert("Yoooo");
// })

function make_sound(letter) {
    // var letter = this.innerHTML
    // this.style.color = "white";
    switch (letter) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        default:
            console.log(letter)
    }
}

// Detecting button press
// Using anonymous function to pass in different input
var all = document.querySelectorAll(".drum")
for (var i = 0;i < all.length; i++) {
    all[i].addEventListener("click", function() {
        var innerHTML = this.innerHTML
        make_sound(innerHTML)
    });
}


// Detecting key press
// Using anonymous function to pass in different input
document.addEventListener("keydown", function(key) {
    make_sound(key.key)
});

























// Higher order function

// function add(num1, num2) {
//     return num1 + num2;
//     }
    
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
    
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
    
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
    
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }


