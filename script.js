// Function to show the login page
function showLoginPage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    window.location.href = 'login.html'; // Redirect to the login page
}

// Infinite scroll to show deep fake results with a delay
let loading = false;

function loadResults() {
    if (loading) return;
    loading = true;

    setTimeout(() => {
        const resultsContainer = document.getElementById('resultsContainer');
        const newResult = document.createElement('div');
        newResult.classList.add('result-item');
        newResult.innerHTML = `
            <img src="https://via.placeholder.com/100x100.png?text=Result+Image" alt="Deep Fake Result Image">
            <div>
                <h3>Deep Fake Result</h3>
                <p>Detected face swap on frame 243 with 98% confidence. Action recommended.</p>
            </div>
        `;
        resultsContainer.appendChild(newResult);
        loading = false;
    }, 3000);
}

// Infinite scroll event listener
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadResults();
    }
});

// Auto-scroll function for the results section
function autoScroll() {
    const resultsContainer = document.getElementById('resultsContainer');
    setInterval(() => {
        resultsContainer.scrollBy(0, 1);
        if (resultsContainer.scrollTop + resultsContainer.clientHeight >= resultsContainer.scrollHeight) {
            resultsContainer.scrollTo(0, 0);
        }
    }, 20);
}

document.addEventListener('DOMContentLoaded', autoScroll);
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust this value to offset the scroll position
                behavior: 'smooth' // Ensures smooth scrolling
            });
        }
    });
});
