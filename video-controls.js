// Function to detect mobile devices
function isMobileDevice() {
    return (window.innerWidth <= 768) || 
           (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the video element
    var videoElement = document.getElementById('promotional_video');
    
    if (videoElement) {
        // Set initial mute state based on device type
        if (isMobileDevice()) {
            videoElement.muted = true; // Mute on mobile
        } else {
            videoElement.muted = false; // Unmute on desktop
        }
        
        // Ensure video plays even if muted status changes
        videoElement.play().catch(function(error) {
            // If autoplay fails, try again with muted
            console.log("Autoplay failed, trying with muted: ", error);
            videoElement.muted = true;
            videoElement.play();
        });
        
        // Handle window resize (in case of orientation change or browser resize)
        window.addEventListener('resize', function() {
            videoElement.muted = isMobileDevice();
        });
    }
}); 
