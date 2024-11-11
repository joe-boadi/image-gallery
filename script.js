// script.js
import { IMAGES } from "./image.js";

const galleryContainer = document.querySelector('.gallery-container');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
function createThumbnails() {
    IMAGES.forEach((image, index) => {
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
    lightboxImage.src = IMAGES[currentIndex].full;
    caption.textContent = IMAGES[currentIndex].caption;
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === IMAGES.length - 1 ? 'none' : 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showNextImage() {
    if (currentIndex < IMAGES.length - 1) {
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

document.addEventListener("DOMContentLoaded", createThumbnails)
