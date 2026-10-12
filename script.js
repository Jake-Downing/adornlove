
const yesButtons = document.querySelectorAll(".yes-button");
const answerMessage = document.querySelector("#answer-message");
const heartsContainer = document.querySelector("#hearts");

const musicButton = document.querySelector("#music-button");
const song = document.querySelector("#song");
const musicStatus = document.querySelector("#music-status");

let answered = false;

yesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (answered) return;
    answered = true;

    answerMessage.textContent =
      "AHHH!! ♡ you just made me the happiest person ever!! " +
      "here's to us and all the memories still to come <3";

    yesButtons.forEach((b) => {
      b.textContent = "YAY!! ♡";
      b.disabled = true;
    });

    for (let i = 0; i < 45; i++) {
      setTimeout(createHeart, i * 80);
    }

    answerMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

musicButton.addEventListener("click", async () => {
  if (song.paused) {
    try {
      await song.play();
      musicButton.textContent = "❚❚ pause our song";
      musicStatus.textContent = "playing just for you ♡";
    } catch (error) {
      console.error("Music playback error:", error);

      musicStatus.textContent =
        "Music error: " + error.message;
    }
  } else {
    song.pause();
    musicButton.textContent = "▶ play our song ♡";
    musicStatus.textContent = "paused ♡";
  }
});

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♡", "♥", "💕", "✿"][
    Math.floor(Math.random() * 4)
  ];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (18 + Math.random() * 22) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  heartsContainer.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove());
}
