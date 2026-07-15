function toggleMenu() {
  const menu = document.getElementById("menu");
  const button = document.getElementById("menuButton");
  const leftArrow = document.querySelector(".left-arrow");

  menu.classList.toggle("open");

    if (leftArrow) {
    if (menu.classList.contains("open")) {
      leftArrow.style.opacity = "0";
      leftArrow.style.pointerEvents = "none";
    } else {
      leftArrow.style.opacity = "1";
      leftArrow.style.pointerEvents = "auto";
    }
  }

  if (menu.classList.contains("open")) {
    // Menu is open: make button white
    button.classList.remove("dark");
    button.classList.add("light");
  } else {
    // Menu is closed: restore color based on scroll position
    if (window.scrollY > document.querySelector(".hero").offsetHeight - 50) {
      button.classList.remove("dark");
      button.classList.add("light");
    } else {
      button.classList.remove("light");
      button.classList.add("dark");
    }
  }
}

// Scroll-based video play/pause
const videos = document.querySelectorAll(".scroll-video");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;

    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.5
});

videos.forEach(video => {
  observer.observe(video);
});

const menuButton = document.getElementById("menuButton");
const hero = document.querySelector(".hero");

if (menuButton && hero) {

  // Start with black over the hero
  menuButton.classList.add("dark");

  window.addEventListener("scroll", () => {

    if (window.scrollY > hero.offsetHeight - 50) {
      menuButton.classList.remove("dark");
      menuButton.classList.add("light");
    } else {
      menuButton.classList.remove("light");
      menuButton.classList.add("dark");
    }

  });

}

document.querySelectorAll("video").forEach(video => {
  video.addEventListener("click", () => {
    video.muted = !video.muted;
  });
});

// Vimeo video controls

const vimeoVideos = document.querySelectorAll(".vimeo-video");

vimeoVideos.forEach((iframe) => {

    const player = new Vimeo.Player(iframe);

    player.setMuted(true);

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    player.play();
                } else {
                    player.pause();
                }

            });

        },
        {
            threshold: 0.6
        }
    );

    observer.observe(iframe);

});