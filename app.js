const media = document.querySelector('.video')

const playToggler = document.querySelector('.play-toggler')
const playTogglerIcon = document.querySelector('.play-toggler img')
media.addEventListener('click', playPauseMedia)
playToggler.addEventListener('click', playPauseMedia)
function playPauseMedia() {
    if (media.paused) {
      playTogglerIcon.src = 'ressources/pause.svg'
      playTogglerIcon.alt = 'pause icon'
      media.play();
    } else {
      playTogglerIcon.src = 'ressources/play.svg'
      playTogglerIcon.alt = 'play icon'
      media.pause();
    }
}


media.onloadedmetadata = () => displayTimeAndProgressBar();
media.addEventListener('timeupdate', displayTimeAndProgressBar)
const timeDisplayCurrent = document.querySelector('.current')
const timeDisplayTotal = document.querySelector('.total')
const progressBar = document.querySelector('.progress')
progressBarContainer = document.querySelector('.progress-bar')
progressBarContainer.addEventListener('click', (e) => media.currentTime = Math.ceil(e.x - (window.innerWidth - e.target.offsetWidth)/2)/e.target.offsetWidth * media.duration)
function displayTimeAndProgressBar() {
    const minutes = Math.floor(media.currentTime / 60).toString().padStart(2, '0')
    const seconds = Math.floor(media.currentTime - minutes * 60).toString().padStart(2, '0')
    const mediaTime = `${minutes}:${seconds}`;
    timeDisplayCurrent.textContent = mediaTime;

    const minutesTotal = Math.floor(media.duration / 60).toString().padStart(2, '0')
    const secondsTotal = Math.floor(media.duration - minutesTotal * 60).toString().padStart(2, '0')
    const mediaTimeTotal = `${minutesTotal}:${secondsTotal}`;
    timeDisplayTotal.textContent = mediaTimeTotal;
    progressBar.style.transform = `scaleX(${media.currentTime / media.duration})`
}


const volumeSlider = document.querySelector('.volume-slider')
volumeSlider.addEventListener('input', (e) => media.volume = e.target.value/100)


const muteToggler = document.querySelector('.mute-btn')
const muteTogglerIcon = document.querySelector('.mute-btn img')
muteToggler.addEventListener('click', muteUnmuteMedia)
function muteUnmuteMedia() {
    if (media.muted) {
      muteTogglerIcon.src = 'ressources/unmute.svg'
      muteTogglerIcon.alt = 'unmute icon'
      media.muted = false
      
    } else {
        muteTogglerIcon.src = 'ressources/mute.svg'
      muteTogglerIcon.alt = 'mute icon'
      media.muted = true
    }
}


const toggleFullscreenBtn = document.querySelector('.fullscreen-toggler')
toggleFullscreenBtn.addEventListener('click', () => media.requestFullscreen())
media.addEventListener('dblclick', () => media.requestFullscreen())