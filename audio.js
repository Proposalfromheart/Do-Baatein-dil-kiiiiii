document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio-player');

  const playAudio = () => {
    audio.play().then(() => {
      console.log("Audio is playing");
    }).catch(error => {
      console.error('Playback prevented:', error);
    });
  };

  // Attempt to play the audio immediately (for desktop)
  playAudio();

  // If playback fails due to user interaction requirements, wait for a click or touch event
  document.addEventListener('click', playAudio, { once: true });
  document.addEventListener('touchstart', playAudio, { once: true });
});

