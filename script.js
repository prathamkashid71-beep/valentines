document.addEventListener('DOMContentLoaded', function() {

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const romanticMessage = document.getElementById('romanticMessage');
const photoUpload = document.getElementById('photoUpload');
const uploadButton = document.getElementById('uploadButton');
const valentinePhoto = document.getElementById('valentinePhoto');
const musicToggle = document.getElementById('musicToggle');
const romanticMusic = document.getElementById('romanticMusic');

createHearts();

// 🔥 NO button run away premium
noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);

function moveNoButton(){
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    noButton.style.transition="0.2s";
}

// 💖 YES button cinematic
yesButton.addEventListener("click", ()=>{
    
    // play music automatically
    romanticMusic.play().catch(()=>{});

    // glow effect
    document.body.style.background="linear-gradient(135deg,#ff758c,#ff7eb3)";
    document.body.style.transition="1s";

    romanticMessage.style.display="block";
    romanticMessage.style.animation="fadeIn 1s ease";

    yesButton.innerHTML="I Love You ❤️";
    yesButton.style.background="linear-gradient(145deg,#00b894,#00a085)";
    yesButton.style.transform="scale(1.15)";
    yesButton.style.boxShadow="0 0 25px rgba(0,255,150,0.7)";

    noButton.style.display="none";

    createConfetti();
});

// 📸 upload photo premium reveal
uploadButton.addEventListener("click",()=>photoUpload.click());

photoUpload.addEventListener("change",(e)=>{
 if(e.target.files[0]){
   const reader=new FileReader();
   reader.onload=(ev)=>{
     valentinePhoto.src=ev.target.result;
     valentinePhoto.style.display="block";
     valentinePhoto.style.animation="fadeIn 1.5s ease";
     valentinePhoto.style.boxShadow="0 0 30px pink";
   };
   reader.readAsDataURL(e.target.files[0]);
 }
});

// 🎵 music toggle
let playing=false;
musicToggle.addEventListener("click",()=>{
 if(playing){
   romanticMusic.pause();
   musicToggle.innerHTML="🎵 Play Music";
   playing=false;
 }else{
   romanticMusic.play();
   musicToggle.innerHTML="⏸ Pause";
   playing=true;
 }
});

// floating hearts
function createHearts(){
 const container=document.querySelector(".hearts-background");
 const emojis=["❤️","💖","💘","💕","💗","💞"];
 for(let i=0;i<25;i++){
   const h=document.createElement("div");
   h.className="heart";
   h.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
   h.style.left=Math.random()*100+"%";
   h.style.fontSize=(Math.random()*20+15)+"px";
   h.style.animationDuration=(Math.random()*10+10)+"s";
   container.appendChild(h);
 }
}

// 🎉 confetti
function createConfetti(){
 for(let i=0;i<80;i++){
   let conf=document.createElement("div");
   conf.innerHTML="❤️";
   conf.style.position="fixed";
   conf.style.left=Math.random()*100+"vw";
   conf.style.top="-20px";
   conf.style.fontSize="20px";
   conf.style.zIndex="999";
   document.body.appendChild(conf);

   let fall=conf.animate([
     {transform:"translateY(0)"},
     {transform:`translateY(${window.innerHeight}px)`}
   ],{
     duration:2000+Math.random()*2000,
     easing:"linear"
   });

   fall.onfinish=()=>conf.remove();
 }
}

});document.addEventListener('DOMContentLoaded', function() {

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const romanticMessage = document.getElementById('romanticMessage');
const photoUpload = document.getElementById('photoUpload');
const uploadButton = document.getElementById('uploadButton');
const valentinePhoto = document.getElementById('valentinePhoto');
const musicToggle = document.getElementById('musicToggle');
const romanticMusic = document.getElementById('romanticMusic');

createHearts();

// 🔥 NO button run away premium
noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);

function moveNoButton(){
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    noButton.style.transition="0.2s";
}

// 💖 YES button cinematic
yesButton.addEventListener("click", ()=>{
    
    // play music automatically
    romanticMusic.play().catch(()=>{});

    // glow effect
    document.body.style.background="linear-gradient(135deg,#ff758c,#ff7eb3)";
    document.body.style.transition="1s";

    romanticMessage.style.display="block";
    romanticMessage.style.animation="fadeIn 1s ease";

    yesButton.innerHTML="I Love You ❤️";
    yesButton.style.background="linear-gradient(145deg,#00b894,#00a085)";
    yesButton.style.transform="scale(1.15)";
    yesButton.style.boxShadow="0 0 25px rgba(0,255,150,0.7)";

    noButton.style.display="none";

    createConfetti();
});

// 📸 upload photo premium reveal
uploadButton.addEventListener("click",()=>photoUpload.click());

photoUpload.addEventListener("change",(e)=>{
 if(e.target.files[0]){
   const reader=new FileReader();
   reader.onload=(ev)=>{
     valentinePhoto.src=ev.target.result;
     valentinePhoto.style.display="block";
     valentinePhoto.style.animation="fadeIn 1.5s ease";
     valentinePhoto.style.boxShadow="0 0 30px pink";
   };
   reader.readAsDataURL(e.target.files[0]);
 }
});

// 🎵 music toggle
let playing=false;
musicToggle.addEventListener("click",()=>{
 if(playing){
   romanticMusic.pause();
   musicToggle.innerHTML="🎵 Play Music";
   playing=false;
 }else{
   romanticMusic.play();
   musicToggle.innerHTML="⏸ Pause";
   playing=true;
 }
});

// floating hearts
function createHearts(){
 const container=document.querySelector(".hearts-background");
 const emojis=["❤️","💖","💘","💕","💗","💞"];
 for(let i=0;i<25;i++){
   const h=document.createElement("div");
   h.className="heart";
   h.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
   h.style.left=Math.random()*100+"%";
   h.style.fontSize=(Math.random()*20+15)+"px";
   h.style.animationDuration=(Math.random()*10+10)+"s";
   container.appendChild(h);
 }
}

// 🎉 confetti
function createConfetti(){
 for(let i=0;i<80;i++){
   let conf=document.createElement("div");
   conf.innerHTML="❤️";
   conf.style.position="fixed";
   conf.style.left=Math.random()*100+"vw";
   conf.style.top="-20px";
   conf.style.fontSize="20px";
   conf.style.zIndex="999";
   document.body.appendChild(conf);

   let fall=conf.animate([
     {transform:"translateY(0)"},
     {transform:`translateY(${window.innerHeight}px)`}
   ],{
     duration:2000+Math.random()*2000,
     easing:"linear"
   });

   fall.onfinish=()=>conf.remove();
 }
}

});