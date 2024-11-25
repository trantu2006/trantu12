const images = [
    "banner11.jpg",
    "banner2.webp",
    "banner 3.jpg"
];

let currentIndex = 0;


function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBanner();
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBanner();
}


function updateBanner() {
    const bannerImage = document.getElementById("banner-image");
    bannerImage.src = images[currentIndex];
}
