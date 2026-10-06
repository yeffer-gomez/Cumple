const giftButton=document.getElementById('giftButton');
const againButton=document.getElementById('againButton');
const hero=document.getElementById('hero');
const message=document.getElementById('message');
const confetti=document.getElementById('confetti');
const hearts=document.getElementById('hearts');

function launchConfetti(){confetti.innerHTML='';const symbols=['✦','•','◆','♡'];for(let i=0;i<110;i++){const e=document.createElement('span');e.className='confetti';e.textContent=symbols[Math.floor(Math.random()*symbols.length)];e.style.left=Math.random()*100+'vw';e.style.color=['#e7b7c3','#d7ad72','#fff1f4','#b9758b'][Math.floor(Math.random()*4)];e.style.fontSize=(8+Math.random()*13)+'px';e.style.animationDuration=(2.8+Math.random()*3.5)+'s';e.style.animationDelay=Math.random()*.6+'s';confetti.appendChild(e)}}
function launchHearts(){hearts.innerHTML='';for(let i=0;i<18;i++){const e=document.createElement('span');e.className='heart';e.textContent=Math.random()>.45?'♡':'♥';e.style.left=Math.random()*100+'vw';e.style.setProperty('--drift',(Math.random()*150-75)+'px');e.style.animationDuration=(5+Math.random()*5)+'s';e.style.animationDelay=Math.random()*2.5+'s';hearts.appendChild(e)}}
function openGift(){
  hero.style.display='none';

  const characterScene=document.getElementById('characterScene');
  characterScene.classList.remove('hidden');
  message.classList.add('hidden');

  launchConfetti();
  launchHearts();

  // Primero aparece el personaje y hace el movimiento de acercar el ramo.
  setTimeout(()=>{
    message.classList.remove('hidden');
    message.scrollIntoView({behavior:'smooth',block:'start'});
  },4400);
}

function reset(){
  message.classList.add('hidden');
  document.getElementById('characterScene').classList.add('hidden');
  hero.style.display='flex';
  confetti.innerHTML='';
  hearts.innerHTML='';
  window.scrollTo({top:0,behavior:'smooth'});
}

giftButton.addEventListener('click',openGift);againButton.addEventListener('click',reset);
