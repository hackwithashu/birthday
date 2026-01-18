function reveal() {
    document.getElementById("surprise").style.display = "block";
    confetti();
}

function playMusic() {
    document.getElementById("music").play();
}

function confetti() {
    for (let i = 0; i < 50; i++) {
        let div = document.createElement("div");
        div.innerHTML = "🎉";
        div.style.position = "absolute";
        div.style.left = Math.random() * 100 + "%";
        div.style.top = "-20px";
        div.style.fontSize = "20px";
        div.style.animation = "fall 3s linear";
        document.body.appendChild(div);

        setTimeout(() => div.remove(), 3000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(110vh); }
}`;
document.head.appendChild(style);
