function closeOverlay() {
    const player = document.getElementById('anna_sound');

    player.pause();
    document.querySelector('.DN--audio-container').classList.add('is-hidden');
    document.documentElement.style.overflow = '';
    document.documentElement.style.height = '';
};

function showOverlay() {    
    document.querySelector('.DN--audio-container').classList.remove('is-hidden');
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';

    const player = document.getElementById('anna_sound');

    player.play();
};