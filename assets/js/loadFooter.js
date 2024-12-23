// Dynamically load the navigation pane
document.addEventListener('DOMContentLoaded', () => {
    // Select the placeholder element where the nav will be injected
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Fetch the external nav.html file
    fetch('Footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            footerPlaceholder.innerHTML = data; // Inject the footer
        })
        .catch(error => {
            console.error(error); // Log any errors
        });
});