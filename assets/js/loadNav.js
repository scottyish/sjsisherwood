// // Dynamically load the navigation pane
// document.addEventListener('DOMContentLoaded', () => {
//     // Select the placeholder element where the nav will be injected
//     const navPlaceholder = document.getElementById('nav-placeholder');

//     // Fetch the external nav.html file
//     fetch('Nav.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to load navigation pane: ' + response.statusText);
//             }
//             return response.text();
//         })
//         .then(data => {
//             navPlaceholder.innerHTML = data; // Inject the navigation pane
//         })
//         .catch(error => {
//             console.error(error); // Log any errors
//         });
// });

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

            // Re-initialize any JavaScript functionality needed for the navigation
            reinitializeNavigation();
        })
        .catch(error => {
            console.error(error); // Log any errors
        });
});

// Function to reinitialize navigation functionality
function reinitializeNavigation() {
    // Example: Re-apply Dropotron
    const nav = document.getElementById('nav');
    if (nav) {
        jQuery(nav).dropotron({
            alignment: 'right',
            mode: 'fade',
            offsetY: -15,
        });
    }
}