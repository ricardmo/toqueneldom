let teclaspiano = ['a' , 'w' , 'd' , 'r' , 'f' , 't' , 'g' , 'h' , 'u' , 'j' , 'i' , 'k' ,];
  for(let index = 0 ; index < teclaspiano.length ; index++ ) {

    document.addEventListener('keypress', (e) => {
      if(e.key === teclaspiano[index]){
        console.log(e.key)
      }
      })
      
  }