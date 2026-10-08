/* =====================================
   ADD YOUR PHOTOS HERE
===================================== */

const photos = [

    {
        src: "images/thivya01.jpg",
        caption: "Oru beautiful little moment 🌻",
        type: "normal"
    },

    {
        src: "images/thivya02.jpg",
        caption: "That smile ✨",
        type: "normal"
    },

    {
        src: "images/thivya03.jpg",
        caption: "Just being herself 🌻",
        type: "normal"
    },

    {
        src: "images/thivya04.jpg",
        caption: "Oru memory worth keeping ✨",
        type: "normal"
    },

    {
        src: "images/thivya05.jpg",
        caption: "Dance mode activated 💃",
        type: "normal"
    },

    {
        src: "images/thivya06.jpg",
        caption: "Some moments don't need words 🌻",
        type: "normal"
    },

    {
        src: "images/thivya07.jpg",
        caption: "Keep smiling 😊",
        type: "normal"
    },

    {
        src: "images/thivya08.jpg",
        caption: "Another little memory ✨",
        type: "normal"
    },

    {
        src: "images/thivya09.jpg",
        caption: "Beautiful moment 🌻",
        type: "normal"
    },

    {
        src: "images/thivya10.jpg",
        caption: "Simply Thivya ✨",
        type: "normal"
    },

    {
        src: "images/thivya11.jpg",
        caption: "One more memory 🌻",
        type: "normal"
    },

    {
        src: "images/thivya12.jpg",
        caption: "A little happiness ✨",
        type: "normal"
    },

    {
        src: "images/funny01.jpg",
        caption: "Okay... Bagheera has entered 😂🐆",
        type: "funny"
    },

    {
        src: "images/funny02.jpg",
        caption: "Idhu separate chapter 😂🐆",
        type: "funny"
    }

];


/* =====================================
   CREATE ALBUM
===================================== */

const grid =
    document.getElementById("photoGrid");


photos.forEach((photo, index) => {

    const card =
        document.createElement("div");

    card.className =
        "photo-card";


    if (photo.type === "funny") {

        card.classList.add("bagheera");

    }


    card.innerHTML = `

        ${
            photo.type === "funny"
            ?
            `<div class="bagheera-label">
                🐆 BAGHEERA MOMENT 😂
             </div>`
            :
            ""
        }

        <img
            src="${photo.src}"
            alt="Thivya photo"
            loading="lazy"
        >

        <div class="caption">
            ${photo.caption}
        </div>

    `;


    card.addEventListener("click", () => {

        openPhoto(index);

    });


    grid.appendChild(card);

});


/* =====================================
   LIGHTBOX
===================================== */

const lightbox =
    document.getElementById("lightbox");

const image =
    document.getElementById("lightboxImage");

const caption =
    document.getElementById("lightboxCaption");

const counter =
    document.getElementById("counter");


let current = 0;


function openPhoto(index) {

    current = index;

    updatePhoto();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function updatePhoto() {

    image.src = photos[current].src;

    caption.textContent =
        photos[current].caption;

    counter.textContent =
        `${current + 1} / ${photos.length}`;
}


function closePhoto() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


function nextPhoto() {

    current++;

    if (current >= photos.length) {

        current = 0;

    }

    updatePhoto();
}


function previousPhoto() {

    current--;

    if (current < 0) {

        current = photos.length - 1;

    }

    updatePhoto();
}


document
    .getElementById("closeBtn")
    .addEventListener("click", closePhoto);


document
    .getElementById("nextBtn")
    .addEventListener("click", nextPhoto);


document
    .getElementById("prevBtn")
    .addEventListener("click", previousPhoto);


document.addEventListener("keydown", event => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closePhoto();
    }

    if (event.key === "ArrowRight") {
        nextPhoto();
    }

    if (event.key === "ArrowLeft") {
        previousPhoto();
    }

});


function goPage4() {

    window.location.href = "page4.html";

}