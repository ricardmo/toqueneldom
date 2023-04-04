const bateriaArray = [
    {
        'key': 'y',
        'link': '/sounds/bateria/crash.flac',
        'id': 'crash',
    },
    {
        'key': 'u',
        'link': '/sounds/bateria/ride.flac',
        'id': 'ride',
    },
    {
        'key': 'c',
        'link': '/sounds/bateria/hat.wav',
        'id': 'hihat',
    },
    {
        'key': 'r',
        'link': '/sounds/bateria/hihatclosed.wav',
        'id': 'hatClosed',
    },
    {
        'key': 'e',
        'link': '/sounds/bateria/hihatopen.wav',
        'id': 'hatOpen',
    },
    {
        'key': 'g',
        'link': '/sounds/bateria/tom1.wav',
        'id': 'tom1',
    },
    {
        'key': 'h',
        'link': '/sounds/bateria/tom2.wav',
        'id': 'tom2',
    },
    {
        'key': 'j',
        'link': '/sounds/bateria/floortom.wav',
        'id': 'tom3',
    },
    {
        'key': 'd',
        'link': '/sounds/bateria/snare.flac',
        'id': 'snare',
    },
    {
        'key': 'x',
        'link': '/sounds/bateria/kick.flac',
        'id': 'kick',
    },
]

//---------------------BATERIA KEYBOARD------------------

function bateriaKeyboard(){
    for(index = 0; index < bateriaArray.length; index++){
        let tecla = bateriaArray[index].key;
        let rutaAudio = bateriaArray[index].link;
        //console.log(bateriaArray[index].link);

        document.addEventListener('keypress', (e) => {
            if(e.key === tecla){
            
            let audio = document.createElement('audio');
            audio.setAttribute('src',rutaAudio);
            audio.play(); }
        });


    };
}

bateriaKeyboard();


//---------------------BATERIA CLICK --------------------


function  bateriaClick(){
    for(index = 0; index < bateriaArray.length; index++){
        let bateriaId = document.getElementById(bateriaArray[index].id);
       // console.log(bateriaArray[index].link)
        let audio = document.createElement('audio');
        audio.setAttribute('src', bateriaArray[index].link);

        bateriaId.addEventListener('click', () => {
        
        audio.play();
        })};
}

bateriaClick();
/*
let crash = document.getElementById('crash')
let audio = document.createElement('audio')

crash.addEventListener('click', () => {
    audio.setAttribute('src', '/sounds/bateria/crash.flac');
    audio.play();
})
*/
