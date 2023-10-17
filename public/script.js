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

function hideOverlay2 () {  
    const player = document.getElementById('earthbnb');
    const container = document.getElementById('videoContainer');

    player.pause();
    container.classList.add('is-hidden');
    document.documentElement.style.overflow = '';
    document.documentElement.style.height = '';
};

function showOverlay2 () {
const player = document.getElementById('earthbnb');
const container = document.getElementById('videoContainer');

container.classList.remove('is-hidden');
document.documentElement.style.overflow = 'hidden';
document.documentElement.style.height = '100%';

player.play();
};