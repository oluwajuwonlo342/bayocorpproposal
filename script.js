document.addEventListener('DOMContentLoaded', function() {
    const bookElement = document.getElementById("book");

    // helper function for mobile detection
    const isMobile = () => window.innerWidth < 768;

    const pageFlip = new St.PageFlip(bookElement, {
        width: 550, // base page width
        height: 750, // base page height
        
        size: "stretch", // Critical for responsiveness
        minWidth: 250,   // Smallest it can go (iPhone SE size)
        maxWidth: 1000,
        minHeight: 350,
        maxHeight: 1500,

        showCover: true,
        drawShadow: true,
        flippingTime: 600,

        // Switches to single-page on mobile for better visibility
        mode: isMobile() ? "portrait" : "double",
        
        mobileScrollSupport: true,
        clickEventForward: true
    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // Watch for window resize or rotation
    window.addEventListener('resize', () => {
        pageFlip.update({
            mode: isMobile() ? "portrait" : "double"
        });
    });
});