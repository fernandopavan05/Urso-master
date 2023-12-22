const nomeMusica = document.getElementById('nome-musica');
const nomeBanda = document.getElementById('nome-banda');
const audio = document.getElementById('audio');
const imagem = document.getElementById('imagem');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const barraProgresso = document.getElementById('barra-progresso');

const sayDontGo = {
    nomeMusica: "Say Don't Go",
    artist: "Taylor-Swift",
    File: "Say Don't Go"
};
const Enchanted = {
    nomeMusica: "Enchanted",
    artist: "Taylor-Swift",
    File: "Enchanted"
};
const Maria = {
    nomeMusica: "Maria",
    artist: "Jão",
    File: "Maria"
};

let isPlaying = false;
const playlist = [sayDontGo, Enchanted, Maria];
let index = 0;

function audioPlay() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    audio.play();
    isPlaying = true;
}

function audioPause() {
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    audio.pause();
    isPlaying = false;
}

function playPauseDecider() {
    if (isPlaying === true) {
        audioPause();
    } else {
        audioPlay();
        setInterval(updateProgressBar,100);
    }
}

function carregarMusica() {
    imagem.src = `Imagens/${playlist[index].File}.png`;
    audio.src = `Musicas/${playlist[index].File}.mp3`;
    nomeMusica.innerText = playlist[index].nomeMusica;
    nomeBanda.innerText = playlist[index].artist;
}

function previousSong() {
    if (index === 0) {
        index = playlist.length - 1;
    } else {
        index -= 1;
    }
    carregarMusica();
    audioPlay();
}

function nextSong() {
    if (index === playlist.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
    carregarMusica();
    audioPlay();
}

function updateProgressBar() {
        const larguraBarra = (audio.currentTime / audio.duration)*100;
        barraProgresso.style.setProperty('--progress', `${larguraBarra}%`);
    }

carregarMusica();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong)
next.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', updateProgressBar);
