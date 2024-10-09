window.addEventListener('DOMContentLoaded', (event) => {
    // Ambil elemen audio
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Autoplay prevented, user interaction required:', error);
    });
});

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  