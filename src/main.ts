// Define the slide interface
interface Slide<T> {
    src: string; // the path to the image file
    caption: T & { toString(): string }; // the caption for the slide
}

// Define the AutoSlideShow class
class AutoSlideShow<T> {
    // Define the class properties
    private slides: Slide<T>[]; // an array of Slide objects
    private currentSlideIndex: number; // the index of the current slide
    private slideDuration: number; // the duration of each slide in milliseconds
    private slideContainer: HTMLElement; // the HTML element that displays the slide
    private captionContainer: HTMLElement; // the HTML element that displays the caption
    private timerId: NodeJS.Timer | number | null; // the ID of the timer that controls the slideshow

    // Define the class constructor
    constructor(
        slides: Slide<T>[],
        slideDuration: number,
        slideContainer: string,
        captionContainer: string
    ) {
        // Initialize the class properties
        this.slides = slides;
        this.currentSlideIndex = 0;
        this.slideDuration = slideDuration;
        this.slideContainer = document.querySelector(slideContainer) as HTMLElement;
        if (!this.slideContainer) {
            throw new Error('Could not find slide container element');
        }
        this.captionContainer = document.querySelector(captionContainer) as HTMLElement;
        if (!this.captionContainer) {
            throw new Error('Could not find caption container element');
        }
        this.timerId = null;
    }

    // Start the slideshow
    public start() {
        this.renderSlide(); // render the current slide
        this.timerId = setInterval(() => {
            this.nextSlide(); // go to the next slide
        }, this.slideDuration);
    }

    // Stop the slideshow
    public stop() {
        clearInterval(this.timerId as number); // clear the timer
        this.timerId = null;
    }

    // Render the current slide
    private renderSlide() {
        const currentSlide = this.slides[this.currentSlideIndex];
        if (this.slideContainer) {
            this.slideContainer.setAttribute('src', currentSlide.src); // set the image source
        }
        if (this.captionContainer) {
            this.captionContainer.innerText = currentSlide.caption.toString(); // set the caption text
        }
    }

    // Go to the next slide
    private nextSlide() {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length; // increment the current slide index
        this.renderSlide(); // render the new current slide
    }
}

// Example usage
const slides: Slide<string>[] = [
    { src: 'images/image1.jpg', caption: 'Image 1' },
    { src: 'images/image2.jpg', caption: 'Image 2' },
    { src: 'images/image3.jpg', caption: 'Image 3' },
    { src: 'images/image4.jpg', caption: 'Image 4' }
];

const slideShow = new AutoSlideShow(slides, 3000, '#slide-container', '#caption-container'); // initialize the AutoSlideShow object
slideShow.start(); // start the slideshow
