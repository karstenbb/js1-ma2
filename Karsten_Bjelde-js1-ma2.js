// question 1

// Here I made a function called myFunctionExpression, and when the function is called it logs out Karsten Bjelde
let myFunctionExpression  = function(){
    console.log("Karsten Bjelde");
    
}
// here I called the function
myFunctionExpression();

// question 2
// Here I made a constant called button, that select the class .btn, and under the const I made function callWhenClicked that log I was clicked. In the const button, I added a addEventListener called "click" and called the function callMeWhenClicked.
const button = document.querySelector(".btn");
function callMeWhenClicked(){
    console.log("I was clicked");
};
button.addEventListener("click", callMeWhenClicked);

// question 3
// Here I made a const called aKeyIsPressed that select an element by the id called "firstName". I made a function callAfterPressed, that will log out the key that is pressed. After the function I added a addEventListener to the aKeyIsPressed called "keydown", and called the function
const aKeyIsPressed = document.getElementById("firstName");
    function callAfterPressed(){
    console.log(event.key);
}
aKeyIsPressed.addEventListener("keydown", callAfterPressed);

// question 4
// Here I made a const called musaSkalOVer that select the button tag in the html, and I had to put [1] or it wouldnt select anything. I made a function called addCLass that adds a class called "hover" to the tag "button". I added a addEventListener called "mouseover" and called the function. So when you are hovering over the button it will add a class called "Hover".
const musaSkalOver = document.getElementsByTagName("button")[1];
function addClass(){
   musaSkalOver.classList.add("hover");
}
musaSkalOver.addEventListener("mouseover", addClass);


// question 5
// here I made a const called musUt that select the item by its data attribute, I made a function called remove, that will remove the class "hover" from the "button". I added a addEventListener called "mouseout", that when you move the mouse away from the button it will call the function "remove".
const musUt = document.querySelector("[data-animal='dog']");
function remove(){
    musUt.classList.remove("hover");
}
musUt.addEventListener("mouseout", remove);

// question 6
// here I made a const called "dyr", that select all of the li tags on the html page. I made a function called info, that will log out object inside the li tag, and in the li tag it will display the animal inside the dataset. Under the function I made a for loop that will loop through the li tags. And inside the loop I added a addEventListener to the li tags index called "mouseover", and I am calling the function info inside of the parameters.
const dyr = document.querySelectorAll("li");
function info(){
        console.log(event.target.dataset.animal);
        };
for (let index = 0; index < dyr.length; index++) {
    dyr[index].addEventListener("mouseover", info);
}

// question 7
// Here we got some code from the assignment and I converted it to a switch statement
const animal = "cat";
switch (animal) {
    case "cat":
    console.log("Meow");
    break;

    case "cow":
    console.log("Moo");
    break;

    case "bird":
    console.log("Tweet");
    break;

default :
     console.log("Harrumph");
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(function(sheep){
    console.log(sheep);
});

// question 9
// Here I made a function called logHello that logs out "hello", and I made a if statement, that when the  counter is equal to 5 it will stop the interval. So in the console you will sei hello every half a second until it reaches the index of 5(6)  then it will stop. 
function logHello(){
    console.log("Hello");
    if (counter === 5) {
        clearInterval(intervalId);
    }
    counter ++;
}
let counter = 0;
const intervalId = setInterval(logHello, 500);

// question 10
// Here I made a const called counterContainer that select the classname "container". I made a function called updateDiv that will update the innerHTML to "text updated". And under the function I made a const called interval that will call the function 1 time after 2 seconds.
const counterContainer = document.querySelector(".container");
function updateDiv() {
    counterContainer.innerHTML = "Text updated";
}
const interval = setTimeout(updateDiv, 2000);

