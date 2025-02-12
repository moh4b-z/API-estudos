document.addEventListener("DOMContentLoaded", function () {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene, {
        selector: '.layer'
    });

    var starsContainer = document.getElementById('stars-container');
    for (var i = 0; i < 80; i++) {
        var star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        starsContainer.appendChild(star);
    }
});
