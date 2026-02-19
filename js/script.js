"use strict";

const tags = document.querySelectorAll(".tag");
const sections = document.querySelectorAll(".cards");

tags.forEach(tag => {
    tag.addEventListener("click", () => {

        tags.forEach(t => t.classList.remove("active"));
        tag.classList.add("active");

        const category = tag.dataset.category;

        sections.forEach(sec => {
            if(category === "all"){
                sec.style.display = "block";
            } else {
                sec.style.display = sec.classList.contains(category)
                    ? "block" : "none";
            }
        });
    });
});

const form = document.getElementById("calcForm");
const overlay = document.getElementById("overlay");
const resultText = document.getElementById("resultText");
const closeBtn = document.getElementById("closeBtn");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const length = Number(document.getElementById("length").value);
    const width = Number(document.getElementById("width").value);
    const height = Number(document.getElementById("height").value);

    if(length <=0 || width<=0 || height<=0){
        alert("Az értékek nem lehetnek 0 vagy negatív számok!");
        return;
    }

    const volume = (length*width*height)/1000;

    resultText.textContent = `Szükséges térfogat: ${volume} liter`;

    form.reset();
    overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () =>{
    overlay.style.display = "none";
});
