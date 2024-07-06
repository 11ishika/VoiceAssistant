const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Mam...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Mam...")
    }

    else{
        speak("Good Evenining Mam...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing Sam..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Mam, How May I Help You?");
    }
   else if(message.includes('your') || message.includes('yourself')){
        speak("My Name is Sam and I am your Assistant");
    }
   else if(message.includes('my') || message.includes('myself')){
        speak("Your Name is Ishika and You are very beautiful and talented");
    }
   else if(message.includes('intelligent') || message.includes('smart')){
        speak("Thank you Dear");
    }
   else if(message.includes('bye') || message.includes('later')){
        speak("bye mam talk you later");
    }
   else if(message.includes('marry') || message.includes('boyfriend')){
        speak("Not interested I am already married to Shivani and I love Anshu kumar kushwaha and Shovam Mahato");
    }
//    else if(message.includes('anshu') || message.includes('boyfriend')){
//         speak("he is so handsome boy ");
//     }
   else if(message.includes('between') || message.includes('boyfriend')){
        speak("they are dating each other");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("play")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube,Here You can listen music")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if(message.includes('spotify')) {
        window.open('Spotify:///')
        const finalText = "Opening Spotify";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}