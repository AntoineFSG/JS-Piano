const keyboard=[81,87,69,82,84,89,85,73,79,80,65,83,68,70,71,72,74,75,76,90,88,67,86,66,78,77]
console.log(keyboard.length)
const notes=['c1','d1','e1','f1','g1','a1','b1','c2','d2','e2','f2','g2','a2','b2','c3','d3','e3','f3','g3','a3','b3','c4','d4','e4','f4','g4']
console.log(notes.length)

function playSound(obj){
    console.log(obj)
        let keyCode= obj;
        console.log(keyCode);
        let audio= document.querySelector(`audio[data-key='${keyCode}']`);
        console.log(audio)
        if(!audio){
            return
        }
            audio.currentTime=0;
            console.log('playing')
            audio.play();
}

window.addEventListener('keydown',function(e){
    let keyCode= e.keyCode;
    console.log(keyCode);
    let audio= document.querySelector(`audio[data-key='${keyCode}']`);
    document.querySelector(`button[data-key='${keyCode}']`).classList.add('isPressed')
    setTimeout(function(){
        document.querySelector(`button[data-key='${keyCode}']`).classList.remove('isPressed')
    },500)
    console.log(audio)
    if(!audio){
        return
    }
        audio.currentTime=0;
        console.log('playing')
        audio.play();
    
});

