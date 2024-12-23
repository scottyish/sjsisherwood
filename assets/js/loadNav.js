// Dynamically load the navigation pane
document.addEventListener('DOMContentLoaded', () => {
    // Select the placeholder element where the nav will be injected
    const navPlaceholder = document.getElementById('nav-placeholder');

    // Fetch the external nav.html file
    fetch('Nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load navigation pane: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            navPlaceholder.innerHTML = data; // Inject the navigation pane
        })
        .catch(error => {
            console.error(error); // Log any errors
        });
});