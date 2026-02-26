const audio=document.getElementById("audio");
const video=document.getElementById("video");
const audioTime=document.getElementById("audioTime");
const videoTime=document.getElementById("videoTime");

audio.addEventListener("timeupdate",()=>{
audioTime.textContent="Current Time: "+Math.floor(audio.currentTime)+" sec";
});

video.addEventListener("timeupdate",()=>{
videoTime.textContent="Current Time: "+Math.floor(video.currentTime)+" sec";
});