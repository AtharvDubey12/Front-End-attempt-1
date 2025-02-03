const roms= document.getElementById("roms");
const emulators= document.getElementById("emulators");
const bios= document.getElementById("bios");
const donate= document.getElementById("nav-final-button");
const navExpConst= document.getElementById("nav-exp-const");
const romexp= document.getElementById("rom-expand");
const emuExp= document.getElementById("emu-exp");
const biosexp= document.getElementById("bios-exp");
const donateexp= document.getElementById("donate-exp");
const slideIds= ["rating1-1", "rating1-2", "rating1-3"];
const imageIds= ["littleign", "littlemeta", "littlegs"];
const ratingIds= ['r1','r2','r3'];
let currentIndex=0;


roms.addEventListener("mouseenter", ()=>{
    navExpConst.style.transform= "translateY(250px)";
    romexp.style.transform= "translateY(200px)";
    emuExp.style.transform= "translateY(0px)";
    biosexp.style.transform= "translateY(0px)";
    donateexp.style.transform= "translateY(0px)";
    emuExp.style.opacity= 0;
    romexp.style.opacity= 1;
    biosexp.style.opacity= 0;
    donateexp.style.opacity= 0;
});
navExpConst.addEventListener("mouseenter", ()=>{
    navExpConst.style.transform= "translateY(250px)";
});
navExpConst.addEventListener("mouseleave", ()=>{
    navExpConst.style.transform= "translateY(0px)";
    romexp.style.transform= "translateY(0px)";
    emuExp.style.transform= "translateY(0px)";
    biosexp.style.transform= "translateY(0px)";
    donateexp.style.transform= "translateY(0px)";
    romexp.style.opacity= 0;
    emuExp.style.opacity= 0;
    biosexp.style.opacity= 0;
    donateexp.style.opacity= 0;
});
romexp.addEventListener("mouseenter", ()=>{
    romexp.style.transform= "translateY(200px)";
    romexp.style.opacity= 1;
});
emuExp.addEventListener("mouseenter", ()=>{
    emuExp.style.transform= "translateY(200px)";
    emuExp.style.opacity= 1;
});
biosexp.addEventListener("mouseenter", ()=>{
    biosexp.style.transform= "translateY(200px)";
    biosexp.style.opacity= 1;
});
donateexp.addEventListener("mouseenter", ()=>{
    donateexp.style.transform= "translateY(200px)";
    donateexp.style.opacity= 1;
});

bios.addEventListener("mouseenter", ()=> {
    navExpConst.style.transform= "translateY(250px)";
    romexp.style.transform= "translateY(0px)";
    emuExp.style.transform= "translateY(0px)";
    donateexp.style.transform= "translateY(0px)";
    biosexp.style.transform= "translateY(200px)";
    emuExp.style.opacity= 0;
    romexp.style.opacity= 0;
    donateexp.style.opacity= 0;
    biosexp.style.opacity= 1;
});

emulators.addEventListener("mouseenter", ()=>{
    navExpConst.style.transform= "translateY(250px)";
    romexp.style.transform= "translateY(0px)";
    biosexp.style.transform= "translateY(0px)";
    donateexp.style.transform= "translateY(0px)";
    emuExp.style.transform= "translateY(200px)";
    emuExp.style.opacity= 1;
    romexp.style.opacity= 0;
    biosexp.style.opacity= 0;
    donateexp.style.opacity= 0;
});
donate.addEventListener("mouseenter", ()=>{
    navExpConst.style.transform= "translateY(250px)";
    romexp.style.transform= "translateY(0px)";
    biosexp.style.transform= "translateY(0px)";
    donateexp.style.transform= "translateY(200px)";
    emuExp.style.transform= "translateY(0px)";
    emuExp.style.opacity= 0;
    romexp.style.opacity= 0;
    biosexp.style.opacity= 0;
    donateexp.style.opacity= 1;
});

emulators.addEventListener("mouseleave", ()=>{
    navExpConst.style.transform= "translateY(0px)";
    emuExp.style.transform= "translateY(0px)";
    emuExp.style.opacity= 0;
});
bios.addEventListener("mouseleave", ()=>{
    navExpConst.style.transform= "translateY(0px)";
    biosexp.style.transform= "translateY(0px)";
    biosexp.style.opacity= 0;
});
roms.addEventListener("mouseleave", ()=>{
    navExpConst.style.transform= "translateY(0px)";
    romexp.style.transform= "translateY(0px)";
    romexp.style.opacity= 0;
});
donate.addEventListener("mouseleave", ()=>{
    navExpConst.style.transform= "translateY(0px)";
    donateexp.style.transform= "translateY(0px)";
    donateexp.style.opacity= 0;
});




document.querySelectorAll(".table-cell").forEach(cell => {
    cell.addEventListener("mousemove", (e) => {
        const rect= cell.getBoundingClientRect();
        const x= e.clientX - rect.left;
        const y= e.clientY - rect.top;
        cell.style.setProperty('--x', `${x}px`);
        cell.style.setProperty('--y', `${y}px`);
        cell.style.setProperty('--mouse-x', x+"px");
        cell.style.setProperty('--mouse-y', y+"px");
    });
});

let slideIndex=0;
const slides= document.querySelector(".slides");
const dots= document.querySelectorAll(".dot");
let autoSlide= setInterval(()=> moveSlide(1), 3000);
function moveSlide(n){
    slideIndex= (slideIndex + n + 3)%3;
    updateSlide();
    resetTimer();
}
function currentSlide(n){
    slideIndex= n;
    updateSlide();
    resetTimer();
}
function updateSlide(){
    slides.style.transform= `translateX(-${slideIndex *100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}
function resetTimer(){
    clearInterval(autoSlide);
    autoSlide= setInterval(()=> moveSlide(1), 3000);
}
updateSlide();

function showNxt(){
    slideIds.forEach((id, index)=> {
        document.getElementById(id).style.opacity= index=== currentIndex ? "1":"0";
        document.getElementById(imageIds[index]).style.opacity= index === currentIndex ? "1":"0";
        document.getElementById(ratingIds[index]).style.opacity= index=== currentIndex ? "1":"0";
    });
    currentIndex= (currentIndex +1)%slideIds.length;
}
setInterval(showNxt, 5000);
showNxt();

let player;
function onYouTubeIframeAPIReady(){
    player= new YT.Player('player', {
        events:{
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerStateChange(event){
    const videoContainer= document.getElementById('abs-border');
    const videoContainer2= document.getElementById('abs-border2');
    if(event.data=== YT.PlayerState.PLAYING){
        videoContainer.style.opacity="1";
        videoContainer2.style.opacity="1";
    }
    else if (event.data===YT.PlayerState.PAUSED || event.data=== YT.PlayerState.ENDED){
        videoContainer.style.opacity="0";
        videoContainer2.style.opacity="0";
    }
}
