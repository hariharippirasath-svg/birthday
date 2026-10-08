const cakeArea = document.getElementById("cakeArea");
const intro = document.querySelector(".intro");
const surprise = document.getElementById("surprise");

cakeArea.addEventListener("click", () => {

    cakeArea.style.display = "none";
    intro.style.display = "none";

    surprise.classList.add("show");

    createFireworks();
});


function createFireworks() {

    for (let i = 0; i < 25; i++) {

        const spark = document.createElement("div");

        spark.innerHTML = "✨";

        spark.style.position = "fixed";
        spark.style.left = Math.random() * 100 + "%";
        spark.style.top = Math.random() * 100 + "%";
        spark.style.fontSize = Math.random() * 20 + 10 + "px";
        spark.style.pointerEvents = "none";
        spark.style.animation = "firework 1s ease";

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
}


function goNext() {

    window.location.href = "page2.html";

}