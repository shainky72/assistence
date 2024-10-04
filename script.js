let btn = document.querySelector("#btn");
let content = document.querySelector("#content");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";  // Hindi with UK accent
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good morning sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon sir");
    } else {
        speak("Good evening sir");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript.toLowerCase();  // Convert to lowercase
    
    content.innerText = transcript;  // Display the recognized text in the 'content' element
    takeCommand(transcript);  // Execute a command based on the recognized text
};

btn.addEventListener("click", () => {
    recognition.start();  // Start speech recognition on button click
});

function takeCommand(message) {
    if (message.includes("hello") || message.includes("hi")) {
        speak("Hello sir, what can I help you with?");
    } 
    else if (message.includes("who are you")) {
        speak("I am your virtual assistant, created by Shailendra sir.");
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com");
    } 
    else if (message.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com");
    }
    else if (message.includes("open chrome")) {
        speak("Opening Chrome");
        window.open("https://www.google.com");
    } 
    else if (message.includes("open calculator")) {
        speak("Opening Calculator");
        window.open("https://www.calculator.com");  // Use an online calculator
    }
    else if (message.includes("open camera")) {
        speak("Opening Camera");
        // Opening native camera is not supported in browsers. You may use a camera interface from a web page.
    }
    else if (message.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com");
    } 
    else if (message.includes("open lead code")) {
        speak("Opening LeetCode");
        window.open("https://leetcode.com");
    } 
    else if (message.includes("open voice recorder")) {
        speak("Opening Voice Recorder");
        window.open("https://online-voice-recorder.com");  // You can use an online voice recorder
    }
}
