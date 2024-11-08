// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Check if on the onboarding page
    if (document.getElementById('startButton')) {
        document.getElementById('startButton').addEventListener('click', () => {
            // Redirect to the main dashboard (index.html)
            window.location.href = '../index.html';
        });
    }
});