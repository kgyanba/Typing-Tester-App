// Get the html elements

var textAreaElement = document.querySelector('#text-area');
var textAreaBorder = document.querySelector('#text-area');
var originalTextElement = document.querySelector('.text-section-div p')
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds')
var resetButton = document.querySelector('#reset');
var greetingMessage = document.querySelector('.cong-section');

// Add event listeners for html element

textAreaElement.addEventListener('keypress',startTimer);
textAreaElement.addEventListener('keyup',matchText);
resetButton.addEventListener('click',resetAll);
var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning = false;
function resetAll() {
    clearInterval(interval);
     textAreaBorder.style.borderColor = 'gray';
     textAreaElement.value = '';
     minutesElement.textContent = "00";
     secondsElement.textContent = "00";
     greetingMessage.style.display = 'none';
}
function matchText() {
    var textEntered = textAreaElement.value;
    var originalText = originalTextElement.textContent.trim();
    var partialText = originalText.substring(0,textEntered.length);
    if(textEntered === originalText)
    {
        // green
        textAreaBorder.style.borderColor = 'forestgreen';
        // stop the timer
        clearInterval(interval);
        // display congratulation message
        greetingMessage.style.display = 'block';
    }
    else {
        if(textEntered === partialText){
            //blue
            textAreaBorder.style.borderColor = 'lightblue';
        }
        else {
            //red
            textAreaBorder.style.borderColor = 'orangered';
        }
    }
}
function startTimer() {
    var textEnteredLength = textAreaElement.value.length;
    if(textEnteredLength === 0 && !timerRunning)
    {
        // start the timer
      interval = setInterval(countTime,10);
      timerRunning = true;
    }
}
function countTime() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100)-(minutes * 60));
    minutesElement.textContent = prefixZero(minutes);
    secondsElement.textContent = prefixZero(seconds);
    timer++;
}
function prefixZero(time) {
    if(time <= 9)
    {
        return "0" + time;
    }
    else {
        return time;
    }
}