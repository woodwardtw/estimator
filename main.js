const pasteArea = document.getElementById('counter');
const calculate = document.getElementById('calculate')

calculate.addEventListener('click', (event) => {
    let paste = pasteArea.value; 
    doEstimate(paste);                         
});

pasteArea.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    doEstimate(paste);                         
});

pasteArea.addEventListener('input', function () {
    pasteArea.style.height = "";
    pasteArea.style.height = this.scrollHeight + "px";
 });

 function doEstimate(paste){
    let wordCount = paste.match(/(\w+)/g).length;
    let timeEstimate = wordCount/2.75;//this is a rough estimate
    console.log(timeEstimate);
    if (timeEstimate > 60){
        var finalNumber = Math.round(timeEstimate/60) + ' minutes';
    } else {
        var finalNumber = Math.round(timeEstimate) + ' seconds' ;
    }
    //event.preventDefault();
    let msg = new SpeechSynthesisUtterance();
    msg.text = 'Estimated time to read this passage is ' + finalNumber;
    window.speechSynthesis.speak(msg);       
 }