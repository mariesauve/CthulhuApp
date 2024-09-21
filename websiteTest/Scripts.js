const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
function changeColor(event) {
    /*console.log(event);*/

    //event.target.style.backgroundColor = "purple"
    //event.target.textContent = "welcome! ";
}
/*myBox.addEventListener("click", changeColor);*/

//myBox.addEventListener("click", function(event) {
//    event.target.style.backgroundColor = "purple"
//    event.target.textContent = "welcome! ";
//});

myButton.addEventListener("click", myBox => {
    myBox.target.style.backgroundColor = "purple"
    myBox.target.textContent = "welcome! ";
});



//myBox.addEventListener("click", event => {
//    event.target.style.backgroundColor = "purple"
//    event.target.textContent = "welcome! ";
//});

//myBox.addEventListener("mouseover", event => {
//    event.target.style.backgroundColor = "yellow"
//    event.target.textContent = "Nooooo! ";

//});

//myBox.addEventListener("mouseout", event => {

//    event.target.style.backgroundColor = "gold"
//    event.target.textContent = "Hello! ";
//});