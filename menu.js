/*jslint browser */

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("js-enabled");

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});


