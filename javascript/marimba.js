//teclado//
let teclasmarimba = ['a' , 's' , 'd' , 'f' , 'g' , 'h' , 'j' , 'k' ,];
const notasmarimba = ['/sounds/xilofono/nota-do.wav' , 
                    '/sounds/xilofono/nota-re.wav' , 
                    '/sounds/xilofono/nota-mi.wav' , 
                    '/sounds/xilofono/nota-fa.wav' , 
                    '/sounds/xilofono/nota-sol.wav' , 
                    '/sounds/xilofono/nota-la.wav' ,
                    '/sounds/xilofono/nota-si.wav' , 
                    '/sounds/xilofono/nota-do2.wav' ,
];

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
//click//
/*
function clickMarimba (){
    let notasMusicales = ['not1','not2','not3','not4','not5','not6','not7','not8',];
    let audioMarimba = document.createElement('audio');
    
    for (let index = 0; index < notasMusicales.length ; index++ ){
        let nota = document.getElementById(notasMusicales[index])
        nota.addEventListener('click', () => {
        audioMarimba.setAttribute('src', rutasAudio[index])
        audioMarimba.play();
})
}
}
clickMarimba(); */






