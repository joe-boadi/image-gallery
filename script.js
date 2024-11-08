// script.js
import {images } from "images.js"
const images = [
    {
        full: './img/abstract_autumn.jpg',
        thumb: './img/abstract_autumn.jpg',
        caption: 'Abstract autumn beauty multi colored leaf vein pattern'
    },
    {
        full: './img/fieldGarden.jpg',
        thumb: './img/fieldGarden.jpg',
        caption: 'A garden field'
    },
    {
        full: './img/couple.jpg',
        thumb: './img/couple.jpg',
        caption: 'Couple sits by lake gazing full moon surrounded by trees'
    },
    {
        full: './img/mysterious_dark_forest.jpg',
        thumb: './img/mysterious_dark_forest.jpg',
        caption: 'Mysterious dark forest with stars in the sky night'
    },
    {
        full: './img/oak_tree.jpg',
        thumb: './img/oak_tree.jpg',
        caption: 'One big oak tree'
    },
    {
        full: './img/Chameleon.jpg',
        thumb: './img/Chameleon.jpg',
        caption: 'Attractive chamel'
    },
    {
        full: './img/analog.jpg',
        thumb: './img/analog.jpg',
        caption: 'Capturing memory'
    },
    {
        full: './img/coupleBoatFullMoon.jpg',
        thumb: './img/coupleBoatFullMoon.jpg',
        caption: 'couple boat full moon'
    },
    {
        full: './img/fieldGarden.jpg',
        thumb: './img/fieldGarden.jpg',
        caption: 'A Field Garden'
    },
    {
        full: './img/freeImages.jpg',
        thumb: './img/freeImages.jpg',
        caption: 'The randoms serves the good times'
    },
    {
        full: './img/MoonLake.jpg',
        thumb: './img/MoonLake.jpg',
        caption: 'A Moon Lake'
    },
    {
        full: './img/pexels-_souvenir.jpg',
        thumb: './img/pexels-_souvenir.jpg',
        caption: 'A good sunset at the bank of the river'
    },
    {
        full: './img/tree.jpg',
        thumb: './img/tree.jpg',
        caption: 'Settling sunset and a tree'
    },
];

const galleryContainer = document.querySelector('.gallery-container');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function createThumbnails() {
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.thumb;
        img.alt = image.caption;
        img.dataset.index = index;
        img.addEventListener('click', openLightbox);
        galleryContainer.appendChild(img);
    });
}

function openLightbox(event) {
    currentIndex = parseInt(event.target.dataset.index);
    updateLightbox();
    lightbox.style.display = 'flex';
}

function updateLightbox() {
    lightboxImage.src = images[currentIndex].full;
    caption.textContent = images[currentIndex].caption;
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showNextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateLightbox();
    }
}

function showPrevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateLightbox();
    }
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

createThumbnails();
