document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("slideshowModal");
    const btn = document.getElementById("openSlideshow");
    const closeBtn = document.querySelector(".close");

    btn.onclick = function() {
        modal.style.display = "block";
        showSlides(slideIndex);
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let slideIndex = 0;

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    document.querySelector(".prev").onclick = function() {
        plusSlides(-1);
    }

    document.querySelector(".next").onclick = function() {
        plusSlides(1);
    }
});

// Function to open the modal
function openOrderModal() {
    document.getElementById("orderConfirmationModal").style.display = "block";
}

// Function to close the modal
function closeOrderModal() {
    document.getElementById("orderConfirmationModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("orderConfirmationModal");
    if (event.target === modal) {
        closeOrderModal();
    }
}
