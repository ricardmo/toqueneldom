const context = new AudioContext();

function playSound(audio) {
  let sound = new Audio(audio);
  sound.play();
}

function jsNota(note) {
  playSound(note.dataset.note);
}

document.addEventListener("keydown", function(event) {
  let note = document.querySelector(`[data-key="${event.keyCode}"]`);       //NO FUNCIONA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//
  if (note) {
    jsNota(note);
  }
});

const keys = document.querySelectorAll('.set li');

keys.forEach(function(key) {        
  key.addEventListener('click', function() {
    jsNota(this);
  });
});
