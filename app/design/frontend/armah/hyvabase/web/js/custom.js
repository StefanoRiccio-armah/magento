document.addEventListener('DOMContentLoaded', () => {
    
    const selectors = [
        '[data-content-type="image"] .pagebuilder-mobile-hidden',
        '[data-content-type="image"] .pagebuilder-mobile-only',
        '.footer img',
        '.blog-list img'
    ];
    const images = document.querySelectorAll(selectors.join(','));

    images.forEach(image => {
        image.loading = 'lazy';

        const setDimensions = () => {
            const { clientWidth: width, clientHeight: height } = image;
            if (width > 0 && height > 0) {
                image.width = width;
                image.height = height;
            }
        };

        const handleImageLoad = () => {
            requestAnimationFrame(setDimensions);
        };

        if (image.complete) {
            handleImageLoad();
        } else {
            image.addEventListener('load', handleImageLoad);
        }
    });
})