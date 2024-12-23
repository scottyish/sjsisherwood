document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("#footer-placeholder"); // Replace with your footer's ID or class

    // Check if the footer ends before the viewport
    const viewportHeight = window.innerHeight;
    const footerBottom = footer.getBoundingClientRect().bottom;

    if (footerBottom < viewportHeight) {
        // Calculate the height of the blank space
        const blankSpaceHeight = viewportHeight - footerBottom;

        // Create a filler element
        const fillerDiv = document.createElement("div");
        fillerDiv.style.position = "absolute"; /* Position it outside normal flow */
        fillerDiv.style.top = `${footerBottom}px`; /* Start at the bottom of the footer */
        fillerDiv.style.left = 0;
        fillerDiv.style.width = "100%"; /* Full width of the page */
        fillerDiv.style.height = `${blankSpaceHeight}px`; /* Fill only the visible gap */
        fillerDiv.style.backgroundColor = "#011627"; /* Set your desired background color */
        fillerDiv.style.zIndex = -1; /* Ensure it doesn't interfere with other elements */

        // Append the filler div to the body
        document.body.appendChild(fillerDiv);
    }
});