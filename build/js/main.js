"use strict";
// Define the AutoSlideShow class
class AutoSlideShow {
    // Define the class constructor
    constructor(slides, slideDuration, slideContainer, captionContainer) {
        // Initialize the class properties
        this.slides = slides;
        this.currentSlideIndex = 0;
        this.slideDuration = slideDuration;
        this.slideContainer = document.querySelector(slideContainer);
        if (!this.slideContainer) {
            throw new Error('Could not find slide container element');
        }
        this.captionContainer = document.querySelector(captionContainer);
        if (!this.captionContainer) {
            throw new Error('Could not find caption container element');
        }
        this.timerId = null;
    }
    // Start the slideshow
    start() {
        this.renderSlide(); // render the current slide
        this.timerId = setInterval(() => {
            this.nextSlide(); // go to the next slide
        }, this.slideDuration);
    }
    // Stop the slideshow
    stop() {
        clearInterval(this.timerId); // clear the timer
        this.timerId = null;
    }
    // Render the current slide
    renderSlide() {
        const currentSlide = this.slides[this.currentSlideIndex];
        if (this.slideContainer) {
            this.slideContainer.setAttribute('src', currentSlide.src); // set the image source
        }
        if (this.captionContainer) {
            this.captionContainer.innerText = currentSlide.caption.toString(); // set the caption text
        }
    }
    // Go to the next slide
    nextSlide() {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length; // increment the current slide index
        this.renderSlide(); // render the new current slide
    }
}
// Example usage
const slides = [
    { src: 'images/image1.jpg', caption: 'Image 1' },
    { src: 'images/image2.jpg', caption: 'Image 2' },
    { src: 'images/image3.jpg', caption: 'Image 3' },
    { src: 'images/image4.jpg', caption: 'Image 4' }
];
const slideShow = new AutoSlideShow(slides, 3000, '#slide-container', '#caption-container'); // initialize the AutoSlideShow object
slideShow.start(); // start the slideshow
