window.addEventListener('DOMContentLoaded', (event) => {
    // Ambil elemen audio
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Autoplay prevented, user interaction required:', error);
    });
});

document.getElementById('wish-button').addEventListener('click', function() {
    // Redirect ke website yang dituju
    window.location.href = 'web3.html'; // Ganti dengan URL tujuan
});