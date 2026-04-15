document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById("book");

    // Check if device is mobile
    const isMobile = () => window.innerWidth < 768;

    const pageFlip = new St.PageFlip(book, {
        width: 550, 
        height: 700,
        
        
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,

        showCover: true, 
        drawShadow: true, 
        
        // --- CAROUSEL ENHANCEMENTS ---
        flippingTime: 600, // Faster flip speed for carousel feel (default is ~1000)
        maxShadowOpacity: 0.3, // Subtle shadows for a cleaner look
        showPageCorners: true, // Shows small corners to hint that it's interactive
        disableFlipByClick: false, // Allows clicking the side to "slide" to next page
        // -----------------------------

        mode: isMobile() ? "portrait" : "double",
        mobileScrollSupport: true // Set to true to allow swipe gestures on mobile
    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    window.addEventListener('resize', () => {
        pageFlip.update({
            mode: isMobile() ? "portrait" : "double"
        });
    });
});