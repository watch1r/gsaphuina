window.onload = function () {
  let entities = document.querySelectorAll(".entity");
  let fullscreen = document.querySelector(".fullscreen-entity");
  let fullscreenImage = document.querySelector(".fullscreen-image");
  let fullscreenName = document.querySelector(".fullscreen-name");
  let fullscreenDescription = document.querySelector(".fullscreen-description");
  let closeBtn = document.querySelector(".close-btn");
  let title = document.querySelector(".title");

  gsap.to(title, {
    opacity: 1,
    duration: 1,
    delay: 0.5,
  });

  gsap.to(entities[0], { opacity: 1, duration: 0.8, delay: 1.0 });
  gsap.to(entities[1], { opacity: 1, duration: 0.8, delay: 1.2 });
  gsap.to(entities[2], { opacity: 1, duration: 0.8, delay: 1.4 });
  gsap.to(entities[3], { opacity: 1, duration: 0.8, delay: 1.6 });

  entities[0].addEventListener("click", function () {
    showFullscreen(entities[0]);
  });

  entities[1].addEventListener("click", function () {
    showFullscreen(entities[1]);
  });

  entities[2].addEventListener("click", function () {
    showFullscreen(entities[2]);
  });

  entities[3].addEventListener("click", function () {
    showFullscreen(entities[3]);
  });

  function showFullscreen(entity) {
    let img = entity.querySelector(".entity-image");
    let name = entity.querySelector(".entity-name");
    let desc = entity.querySelector(".entity-description");

    fullscreenImage.src = img.src;
    fullscreenName.textContent = name.textContent;
    fullscreenDescription.textContent = desc.textContent;
    fullscreen.style.display = "flex";
  }

  closeBtn.addEventListener("click", function () {
    fullscreen.style.display = "none";
  });
};
