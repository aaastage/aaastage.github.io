const images = {
    photo1: ['../ph´s/amady.jpg', '../ph´s/amady2.jpg', '../ph´s/amady3.png'],
    photo2: ['../ph´s/cami2.jpg', '../ph´s/cami3.jpg', '../ph´s/cami5.jpg'],
    photo3: ['../ph´s/eli.jpg', '../ph´s/eli2.jpg', '../ph´s/eli3.jpg'],
    photo4: ['../ph´s/sasha3.jpeg', '../ph´s/sasha.jpg', '../ph´s/sasha2.jpeg'],
    photo5: ['../ph´s/jing.jpg', '../ph´s/jing2.jpg', '../ph´s/jing2.jpg']
};

let currentIndex = {
    photo1: 0,
    photo2: 0,
    photo3: 0,
    photo4: 0,
    photo5: 0
};

function changeImage(photoId, direction) {
    const photoArray = images[photoId];
    currentIndex[photoId] = (currentIndex[photoId] + direction + photoArray.length) % photoArray.length;
    document.getElementById(photoId).src = photoArray[currentIndex[photoId]];
}
