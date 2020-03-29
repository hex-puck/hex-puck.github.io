let imgNode = document.querySelector("img");

imgNode.onclick = function () {
    let originSrc = 'images/red-panda.jpg';
    let newSrc = 'images/red-panda2.jpg';
    if(imgNode.getAttribute('src') === originSrc) {
        imgNode.setAttribute('src', newSrc);
    } else {
        imgNode.setAttribute('src', originSrc);
    }
};
