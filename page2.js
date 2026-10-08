const photos = [
    "images/thivya01.jpg",
    "images/thivya02.jpg",
    "images/thivya03.jpg",
    "images/thivya04.jpg",
    "images/thivya05.jpg",
    "images/thivya06.jpg",
    "images/thivya07.jpg",
    "images/thivya08.jpg"
];


const quotes = [

    "Sila moments-ku words thevaiye illa. 🌻",

    "Just oru simple smile... but romba beautiful. ✨",

    "Nee nee-ah irukkuradhu dhaan special. 🌻",

    "Indha moment paatha automatic-ah smile varudhu. 😊",

    "Dance mode ON... 💃✨",

    "Oru chinna memory, aana romba nice feeling. 🌻",

    "Some moments simply stay in our mind. ✨",

    "Idhu just oru photo illa... oru memory. ❤️"

];


let current = 0;


const image =
    document.getElementById("journeyImage");

const quote =
    document.getElementById("quote");

const number =
    document.getElementById("photoNumber");

const progress =
    document.getElementById("progressBar");

const next =
    document.getElementById("nextButton");

const finalMessage =
    document.getElementById("finalMessage");


next.addEventListener("click", () => {

    current++;

    if (current >= photos.length) {

        current = photos.length - 1;

        next.style.display = "none";

        finalMessage.classList.add("show");
    }


    image.style.opacity = "0";
    image.style.transform = "scale(1.08)";


    setTimeout(() => {

        image.src = photos[current];

        quote.textContent = quotes[current];

        number.textContent =
            `${current + 1} / ${photos.length}`;

        progress.style.width =
            `${((current + 1) / photos.length) * 100}%`;

        image.style.opacity = "1";
        image.style.transform = "scale(1)";

    }, 300);

});


/* MUSIC */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.textContent =
            "⏸ Pause Music";

    } else {

        music.pause();

        musicButton.textContent =
            "🎵 Play Music";
    }

});


function goPage3() {

    window.location.href = "page3.html";

}


/* SUNFLOWER PETALS */

const petals =
    document.getElementById("petals");


for (let i = 0; i < 20; i++) {

    const petal =
        document.createElement("span");

    petal.innerHTML = "🌻";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.top = "-50px";
    petal.style.fontSize =
        Math.random() * 12 + 10 + "px";
    petal.style.opacity =
        Math.random() * 0.5 + 0.2;
    petal.style.animation =
        `fall ${Math.random() * 8 + 7}s linear infinite`;
    petal.style.animationDelay =
        Math.random() * 5 + "s";
    petal.style.pointerEvents = "none";

    petals.appendChild(petal);
}


const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall {

    to {
        transform:
            translateY(110vh)
            rotate(360deg);
    }

}

`;

document.head.appendChild(style);