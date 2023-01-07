(function () {
    document.querySelector("html").style.filter = "invert(100%)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(100%)";
        //"invert(1) hue-rotate(180deg)"
    })
})();