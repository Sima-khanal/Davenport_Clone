document.addEventListener("DOMContentLoaded", function() {
    // Set the current date
    const currentDateElement = document.getElementById("current-date");
    const calendarElement = document.getElementById("calendar");
    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    currentDateElement.textContent = formattedDate;

    // Set the calendar to today's date
    const today = now.toISOString().split('T')[0];
    calendarElement.value = today;

    // Quotes functionality
    const quotes = [
        "You can have anything you want in life if you dress for it.",
        "Clothes mean nothing until someone lives in them.",
        "Style is a way to say who you are without having to speak.",
        "Fashion is like eating, you shouldn't stick to the same menu."
    ];
    let currentQuoteIndex = 0;
    const quoteElement = document.getElementById("quote");
    
    function updateQuote() {
        quoteElement.textContent = quotes[currentQuoteIndex];
    }

    document.getElementById("prev-quote").addEventListener("click", function() {
        currentQuoteIndex = (currentQuoteIndex === 0) ? quotes.length - 1 : currentQuoteIndex - 1;
        updateQuote();
    });

    document.getElementById("next-quote").addEventListener("click", function() {
        currentQuoteIndex = (currentQuoteIndex === quotes.length - 1) ? 0 : currentQuoteIndex + 1;
        updateQuote();
    });

    setInterval(function() {
        currentQuoteIndex = (currentQuoteIndex === quotes.length - 1) ? 0 : currentQuoteIndex + 1;
        updateQuote();
    }, 15000); // Change quote every 15 seconds

    // Initialize the first quote
    updateQuote();

    
});


document.addEventListener("DOMContentLoaded", function() {
    const viewCountElement = document.getElementById('viewCount');
    let views = parseInt(localStorage.getItem('views')) || 12318;

    views++;
    localStorage.setItem('views', views);

    viewCountElement.textContent = `${views} views`;
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const previews = document.querySelectorAll('.preview');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    previews.forEach(preview => preview.style.opacity = "0.6");

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].style.display = "block";
    previews[slideIndex].style.opacity = "1";
}

function nextSlide() {
    showSlide(++slideIndex);
}

function previousSlide() {
    showSlide(--slideIndex);
}

function selectSlide(index) {
    showSlide(slideIndex = index);
}

showSlide(slideIndex);

setInterval(nextSlide, 3000);
