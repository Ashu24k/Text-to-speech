let textArea = document.querySelector('textarea');
let convertBtn = document.querySelector('button');

let textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textArea.value;

    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

convertBtn.addEventListener('click', textToSpeech)