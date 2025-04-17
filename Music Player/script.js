// Get Elements
const playPauseBtn = document.getElementById('play-pause');
const audio = document.getElementById('audio');
const seekBar = document.getElementById('seek-bar');
const volumeControl = document.getElementById('volume-control');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const songTitle = document.getElementById('song-title');
const songInfo = document.getElementById('song-info');
const playlist = document.getElementById('playlist');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Playlist with Popular Pakistani OST and Bollywood Songs
let songs = [
    { title: 'Maand', artist: '	Bayaan, Hasan Raheem, Rovalio', url: 'https://raag.fm/files/mp3/128/Hindi/28811/Maand - (Raag.Fm).mp3' },
    { title: 'Nahin Milta', artist: ' Bayaan', url: 'https://hindi2.djpunjab.app/load/_bH5-NF47Zz6eFG6JdxQhQ==/Nahin%20Milta.mp3'  },
    { 
        title: 'Kesariya', 
        artist: 'Arijit Singh', 
        url: 'https://hindi2.djpunjab.app/load/actual_mp3_link_here.mp3' 
      }
      
];

// Display Playlist
function displayPlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        
        li.onclick = () => playSong(index);
        playlist.appendChild(li);
    });
}

// Play Song
function playSong(index) {
    const song = songs[index];
    audio.src = song.url;
    songTitle.textContent = song.title;
    songInfo.textContent = `${song.artist}`;
    audio.play();
    playPauseBtn.textContent = 'Pause';
    playPauseBtn.classList.remove('play');
    playPauseBtn.classList.add('pause');
}

// Update Time Display
audio.addEventListener('timeupdate', () => {
    let currentTimeText = formatTime(audio.currentTime);
    let durationText = formatTime(audio.duration);
    
    currentTime.textContent = currentTimeText;
    duration.textContent = durationText;
    
    let progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
});

// Format time to MM:SS
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${minutes}:${sec < 10 ? '0' + sec : sec}`;
}

// Play/Pause Function
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
        playPauseBtn.classList.remove('play');
        playPauseBtn.classList.add('pause');
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
        playPauseBtn.classList.remove('pause');
        playPauseBtn.classList.add('play');
    }
});

// Prev/Next Song
prevBtn.addEventListener('click', () => {
    let currentIndex = songs.findIndex(song => song.url === audio.src);
    let prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    playSong(prevIndex);
});

nextBtn.addEventListener('click', () => {
    let currentIndex = songs.findIndex(song => song.url === audio.src);
    let nextIndex = currentIndex === songs.length - 1 ? 0 : currentIndex + 1;
    playSong(nextIndex);
});

// Initialize Playlist
displayPlaylist();
