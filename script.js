// Birthday website settings
// Target: 29 September 2026, 12:00 AM IST
const birthdayTarget = new Date("2026-09-29T00:00:00+05:30");

function updateCountdown(){
  const now = new Date();
  const diff = birthdayTarget - now;
  const enter = document.getElementById("enterBtn");
  const msg = document.getElementById("countdownMessage");
  if(!document.getElementById("days")) return;

  if(diff <= 0){
    ["days","hours","minutes","seconds"].forEach(id=>document.getElementById(id).textContent="00");
    msg.textContent = "The moment has arrived! Happy Birthday, Susi! 🎂❤️";
    enter.classList.remove("disabled");
    return;
  }
  const days=Math.floor(diff/86400000);
  const hours=Math.floor(diff%86400000/3600000);
  const minutes=Math.floor(diff%3600000/60000);
  const seconds=Math.floor(diff%60000/1000);
  document.getElementById("days").textContent=String(days).padStart(2,"0");
  document.getElementById("hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");
  msg.textContent="The surprise unlocks at midnight on 29 September 2026 ✨";
}
updateCountdown();
setInterval(updateCountdown,1000);

const gift=document.getElementById("gift");
if(gift){
  gift.addEventListener("click",()=>{
    document.getElementById("surpriseMessage").classList.remove("hidden");
    document.getElementById("giftHint").textContent="Surprise unlocked! 🎉";
    gift.style.animation="none";
    gift.textContent="🎊";
    launchConfetti();
  });
}

function launchConfetti(){
  for(let i=0;i<45;i++){
    const c=document.createElement("span");
    c.textContent=["✨","💕","🎉","💖","⭐"][Math.floor(Math.random()*5)];
    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top="-30px";
    c.style.fontSize=(14+Math.random()*20)+"px";
    c.style.zIndex=99;
    c.style.transition="transform 3s ease, opacity 3s ease";
    document.body.appendChild(c);
    requestAnimationFrame(()=>{
      c.style.transform=`translate(${(Math.random()-.5)*160}px, ${window.innerHeight+80}px) rotate(${Math.random()*720}deg)`;
      c.style.opacity="0";
    });
    setTimeout(()=>c.remove(),3200);
  }
}
