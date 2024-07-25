const textInput = document.getElementById('textInput');
const mandarinButton = document.getElementById('mandarinButton');
const guoyuButton = document.getElementById('guoyuButton');
const cantoneseButton = document.getElementById('cantoneseButton');

mandarinButton.addEventListener('click', () => {
    readAloud('zh-CN'); // Mandarin
});

guoyuButton.addEventListener('click', () => {
    readAloud('zh-TW'); // Taiwanese Mandarin
});

cantoneseButton.addEventListener('click', () => {
    readAloud('zh-HK'); // Cantonese
});

northeasternButton.addEventListener('click', () => {
    readAloud('zh-CN-liaoning'); 
});

singaporeenglishButton.addEventListener('click', () => {
    readAloud('en-SG'); 
});

usenglishButton.addEventListener('click', () => {
    readAloud('en-US'); 
});

ukenglishButton.addEventListener('click', () => {
    readAloud('en-GB'); 
});

indiaenglishButton.addEventListener('click', () => {
    readAloud('en-IN'); 
});


function readAloud(language) {
    const text = textInput.value;
    
    let utterance = new SpeechSynthesisUtterance();
    utterance.lang = language;
    utterance.text = text;
    utterance.rate = 1;
    
    speechSynthesis.speak(utterance);
}
