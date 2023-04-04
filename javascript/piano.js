 // ------------------------------------ RUTAS AUDIO --------------------------------


const rutasAudio = [
  '/sounds/piano/do.wav',
  '/sounds/piano/re.wav',
  '/sounds/piano/re2.wav',
  '/sounds/piano/mi.wav',
  '/sounds/piano/mi2.wav',
  '/sounds/piano/fa.wav',
  '/sounds/piano/fa2.wav',
  '/sounds/piano/sol.wav',
  '/sounds/piano/la.wav',
  '/sounds/piano/la2.wav',
  '/sounds/piano/si.wav',
  '/sounds/piano/do.wav',
]

 
 //--------------------------------------vvv TECLAS PIANO vvv------------------------------------------------------------------------
function Pianokeyboard (){

let teclasPiano = ['a' , 'w' , 'd' , 'r' , 'f' , 't' , 'g' , 'h' , 'u' , 'j' , 'i' , 'k'];

  for(let index = 0 ; index < teclasPiano.length ; index++ ) {
    const tecla = teclasPiano[index];
  
  //console.log(tecla , rutaAudio);
  
    document.addEventListener('keypress', (e) => {
      if(e.key === tecla){
        const rutaAudio = rutasAudio[index];
        let audio = document.createElement('audio');
        audio.setAttribute('src', rutaAudio);
        //console.log(audio) crear appenChild para evento click
        audio.play();
    }
    })
  }


}

Pianokeyboard();

//--------------------------------------vvv CLICK PIANO vvv------------------------------------------------------------------------

function ClickPiano() {
  let notasMusicales = ['note1', 'note2', 'note3', 'note4', 'note5', 'note6', 'note7', 'note8', 'note9', 'note10', 'note11', 'note12'];

  for (let index = 0; index < notasMusicales.length; index++) {
    let notasclick = document.getElementById(notasMusicales[index]);
    let rutaAudio = rutasAudio[index];
    
    notasclick.addEventListener('click', () => {
      let audioPiano = document.createElement('audio');
      audioPiano.setAttribute('src', rutaAudio);
      audioPiano.play();
    });
  }
}

ClickPiano()