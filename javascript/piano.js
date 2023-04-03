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

