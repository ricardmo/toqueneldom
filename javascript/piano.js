let teclaspiano = ['a' , 'w' , 'd' , 'r' , 'f' , 't' , 'g' , 'h' , 'u' , 'j' , 'i' , 'k'];
const audiopiano = {
  a: 'sounds/do.wav',
  w: 'sounds/re.wav',
  d: 'sounds/re2.wav',
  r: 'sounds/mi.wav',
  f: 'sounds/mi2.wav',
  t: 'sounds/fa.wav',
  g: 'sounds/fa2.wav',
  h: 'sounds/sol.wav',
  u: 'sounds/la.wav',
  j: 'sounds/la2.wav',
  i: 'sounds/si.wav',
  k: 'sounds/do.wav',
}

for(let index = 0 ; index < Object.keys(audiopiano).length ; index++ ) {
  const tecla = teclaspiano[index];
  const archivo = audiopiano[tecla];
  const piano = new Audio(archivo);

  document.addEventListener('keypress', (e) => {
    if(e.key === tecla){
      piano.play();
    }
  })
}
