let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
  li.addEventListener("click", () => {
    switcherLis.forEach((li) => {
      li.classList.remove("active");
    });

    li.classList.add("active");

    imgs.forEach((img) => {
      img.style.display = "none";
    });

    document.querySelectorAll(li.dataset.cat).forEach((img) => {
      img.style.display = "block";
    });
  });
});
