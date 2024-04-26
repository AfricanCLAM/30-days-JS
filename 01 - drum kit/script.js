function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    //play sound when hitting key
    if (!audio) return; //stop function from running altogether
    audio.currentTime = 0; //rewind to start (simultaneous playing)
    audio.play();
    
    //animations when hitting key
    key.classList.add('playing');   
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if isn't a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);