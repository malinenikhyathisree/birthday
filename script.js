function openSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.add("show");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    createHearts();
}


/* Floating hearts */

function createHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";

            heart.innerHTML =
                Math.random() > 0.5
                ? "💖"
                : "💕";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                15 + Math.random() * 30 + "px";

            heart.style.animationDuration =
                4 + Math.random() * 4 + "s";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 8000);

        }, i * 150);

    }

}


/* Continuous small hearts */

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💗";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        12 + Math.random() * 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}, 1200);