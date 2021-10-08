var timeDelay = 500;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function pressSpaceButton() {
    var keyup = jQuery.Event('keyup');
    keyup.which = 32;
    $('#inputfield').trigger(keyup);
}

async function walkWords(){
    var words = document.getElementById("row1").innerText;
    var listWords = words.split(' ');
    for(i = 0; i < listWords.length; i++){
        await sleep(timeDelay);
        document.getElementById('inputfield').value = listWords[i];
        pressSpaceButton();
    }
}

walkWords();
