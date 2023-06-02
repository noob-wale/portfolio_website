// let img = document.getElementById('#mypic');
let images = ["assets/wale.jpg", "assets/wale2.jpg", "assets/wale3.jpg"];
let index = 0;
let time = 3000;

function makeImage() {
    let img = document.createElement('img');
    img.className = 'pro-pic';
    img.setAttribute("src", images[index]);
    document.getElementById('#myImgs').appendChild(img);

    // if (index < images.length - 1) {
    //     index++;
    // } else {
    //     index = 0;
    // }

    // setTimeout("makeImage()", time);
}

