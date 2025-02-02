document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector('.submit-btn');

    submitButton.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
    });

    submitButton.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
})
