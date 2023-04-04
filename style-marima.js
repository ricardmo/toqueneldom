let teclasmarimba = ['a' , 's' , 'd' , 'f' , 'g' , 'h' , 'j' , 'k' ,];
const notasmarimba = ['/xilofono/nota-do.wav' , 
                    '/xilofono/nota-re.wav' , 
                    '/xilofono/nota-mi.wav' , 
                    '/xilofono/nota-fa.wav' , 
                    '/xilofono/nota-sol.wav' , 
                    '/xilofono/nota-la.wav' ,
                    '/xilofono/nota-si.wav' , 
                    '/xilofono/nota-do2.wav' ,
]
//function tocarTeclado (){
    for(let index = 0 ; index < teclasmarimba.length ; index++ ) {
    const tecla = teclasmarimba[index];

    console.log(tecla , notasmarimba);

    document.addEventListener('keypress', (e) => {
        if(e.key === tecla){
        let notamarimba = notasmarimba[index];
        let audio = document.createElement('audio');
        audio.setAttribute('src', notamarimba);
        //console.log(audio) crear appenchild para evento click
        audio.play();
}
})
}

