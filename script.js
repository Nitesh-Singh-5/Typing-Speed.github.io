const setOfWords =[
    "Please take your dog, Cali, out for a walk – he really needs some exercise!",
    "What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.",
    "Rex Quinfrey, a renowned scientist, created plans for an invisibility machine.",
    "Do you know why all those chemicals are so hazardous to the environment?",
    "Max Joykner sneakily drove his car around every corner looking for his dog.",
    "The two boys collected twigs outside, for over an hour, in the freezing cold!",
    "Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.",
    "I have three things to do today: wash my car, call my mother, and feed my dog.",
    "Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside.",
    "The Reckson family decided to go to an amusement park on Wednesday.",
    "That herd of bison seems to be moving quickly; does that seem normal to you?",
    "You can lead a horse to water but you can't make him drink.",
    "What sorts of search phrases do you think they will be typing in on Google?",
    "He whipped out his phone and trotted down the stairs, typing a response to one of the many texts he'd received.",
    "The whole purpose of a site for generating HTML code is to save you the trouble of typing it in yourself.",
    "You can change value by either clicking the up/down arrows or typing into the text box - both methods are shown in the movie.",
    "The position will involve audio typing legal documents and letters for the Commercial Property department, using digital dictation.",
    "The thing I miss is the number keypad, I find typing numbers in using the numbers at the top extremely cumbersome!",
]

const msg = document.getElementById('msg');
const typedWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime, endTime;

let playGames=()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    // console.log(randomNumber)
    msg.innerText = setOfWords[randomNumber]
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done"
}

const endPlay=()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime)

    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);
    
    let speed = Math.round((wordCount / totalTime)*60);
    let finalmsg = `You typed total at ${speed} words per minute `
    finalmsg += comparewords(msg.innerText,totalStr);
    msg.innerText = finalmsg;
}

const comparewords=(str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
            }
    })
    let errorWords = (words1.length - cnt);
    return (` ${cnt} correct out of ${words1.length} words and the total number of error are ${errorWords} .`);
}

const wordCounter=(Str)=>{
    let response = Str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click',function(){
//     console.log(this)
    if(this.innerText == 'Start'){
        typedWords.disabled = false;
        playGames();
    }else if(this.innerText == "Done"){
        btn.innerText = "Start";
        endPlay();
        setTimeout(function () {
            window.location.reload(1);
        }, 8000); 
        
    }
})
