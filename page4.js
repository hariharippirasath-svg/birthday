const cards =
    document.querySelectorAll(".side-card");

const modal =
    document.getElementById("modal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");


cards.forEach(card => {

    card.addEventListener("click", () => {

        modalImage.src =
            card.dataset.image;

        modalTitle.textContent =
            card.dataset.title;

        modalText.textContent =
            card.dataset.text;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);


modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeModal();

    }

});


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});


function goPage5() {

    window.location.href = "page5.html";

}