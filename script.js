// Typing home Screen function

var typed = new Typed(".text", {
    strings: ["Data Scientist", "Web Developer", "Java Developer"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true
});
// var typed = new Typed(".text1", {
//     strings: ["I'm a data scientist who transforms complex data into actionable insights through advanced analytics and machine learning.",
//     "I'm a web developer who crafts engaging and responsive digital experiences with a passion for front-end and back-end technologies.",
//      "I'm a seasoned Java developer with a strong penchant for crafting robust and scalable applications in the world of Java."],
//     // typeSpeed: 50,
//     // backSpeed: 10,
//     backDelay: 5000,
//     loop: true
// });

// Navbar Open mobile mode
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};




