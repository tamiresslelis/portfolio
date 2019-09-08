// Fuction to header changed the background color
var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function (event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 150) { // Just an example
        nav.style.backgroundColor = 'white'; // or default color
        nav.style.borderBottom = "2px solid white";
    } else {
        this.console.log(nav.style);
        nav.style.borderBottom = "2px solid black";

    }
});


// Function to open menu hamburguer
document.getElementById('menu-btn').addEventListener('click', function (e) {
    
    // variable for affected menu
    let myMenu = document.getElementById('menu-mobile');

    if (myMenu.style.display === 'block') {
        myMenu.style.display = 'none';
    } else {
       myMenu.style.display = 'block';
    }
    
});