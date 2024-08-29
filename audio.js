document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('backgroundMusic');

    // Function to start playing the music
    function playMusic() {
        music.play();
        document.removeEventListener('click', playMusic);
        document.removeEventListener('touchstart', playMusic);
        document.removeEventListener('swipe', playMusic);
    }

    // Add event listeners for user interaction
    document.addEventListener('click', playMusic);
    document.addEventListener('touchstart', playMusic);
    document.addEventListener('swipe', playMusic);
});
