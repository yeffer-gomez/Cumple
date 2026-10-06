const giftButton = document.getElementById("giftButton");
const againButton = document.getElementById("againButton");
const hero = document.getElementById("hero");
const message = document.getElementById("message");
const confetti = document.getElementById("confetti");
const hearts = document.getElementById("hearts");

// ✏️ CAMBIA ESTE NOMBRE POR EL DE LA PERSONA
document.getElementById("name").textContent = "Nombre";

function launchConfetti() {
  confetti.innerHTML = "";
  const pieces = ["●", "■", "◆", "✦"];
  for (let i = 0; i < 130; i++) {
    const el = document.createElement("span");
    el.className = "confetti";
    el.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (8 + Math.random() * 12) + "px";
    el.style.animationDuration = (2.5 + Math.random() * 3) + "s";
    el.style.animationDelay = Math.random() * .7 + "s";
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.appendChild(el);
  }
}

function launchHearts() {
  hearts.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = Math.random() > .5 ? "❤️" : "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.setProperty("--drift", (Math.random() * 160 - 80) + "px");
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heart.style.animationDelay = Math.random() * 3 + "s";
    hearts.appendChild(heart);
  }
}

function openGift() {
  hero.style.display = "none";
  message.classList.remove("hidden");
  document.body.style.overflow = "auto";
  launchConfetti();
  launchHearts();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function reset() {
  message.classList.add("hidden");
  hero.style.display = "flex";
  confetti.innerHTML = "";
  hearts.innerHTML = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

giftButton.addEventListener("click", openGift);
againButton.addEventListener("click", reset);
