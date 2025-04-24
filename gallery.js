/*jslint browser */
/*global Image */

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    const imageUrls = [
        siatka1.jpg",
        siatka2.jpg",
        siatka3.jpg",
        siatka4.jpg"
    ];

    function loadImage(url) {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            img.src = url;
            img.alt = "Zdjęcie z meczu siatkówki";
            img.className = "gallery-img";
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function () {
                reject(new Error("Błąd ładowania: " + url));
            };
        });
    }

    Promise.all(imageUrls.map(function (url) {
        return loadImage(url);
    })).then(function (images) {
        images.forEach(function (img) {
            gallery.appendChild(img);
        });
    }).catch(function (err) {
        gallery.innerHTML =
        "<p style=\"color:red;\">Nie udało się załadować galerii: " +
        err.message +
        "</p>";
    });
});
