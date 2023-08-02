function openNav() {
  let x = document.getElementById("sideNav");
  x.style.display = "block";
  setTimeout(() => {
    if (window.innerWidth < 761) x.style.width = "100%";
    else x.style.width = "500px";
  }, 0);
  document.querySelector("body").style.overflow = "hidden";
}

function closeNav() {
  let x = document.getElementById("sideNav");
  x.style.width = "0";
  setTimeout(() => (x.style.display = "none"), 800);
  document.querySelector("body").style.overflow = "auto";
}

window.addEventListener("resize", function () {
  if (
    window.innerWidth < 500 &&
    document.getElementById("sideNav").style.display === "block"
  ) {
    document.getElementById("sideNav").style.width = "100%";
  }

  if (
    window.innerWidth > 500 &&
    window.innerWidth < 1130 &&
    document.getElementById("sideNav").style.display === "block"
  ) {
    document.getElementById("sideNav").style.width = "500px";
  }

  if (window.innerWidth > 1130) {
    document.getElementById("sideNav").style.width = "0";
    setTimeout(
      () => (document.getElementById("sideNav").style.display = "none"),
      800
    );
    document.querySelector("body").style.overflow = "auto";
  }
});

function allCategory() {
  let icon = document.getElementById("drop-down-icon");

  let page = document.getElementById("drop-down-page");
  if (page.classList.contains("hidden")) {
    page.classList.remove("hidden");
    page.classList.add("flex");
    setTimeout(() => {
      page.classList.remove("opacity-in");
    }, 500);
    icon.style.transform = "rotate(180deg)";
  } else {
    page.classList.add("opacity-out");
    setTimeout(() => {
      page.classList.remove("flex");
      page.classList.add("hidden");
      page.classList.remove("opacity-out");
      page.classList.add("opacity-in");
    }, 400);
    icon.style.transform = "rotate(0deg)";
  }
}

function profileBoxToggle() {
  let box = document.getElementById("profile-box");
  if (box.classList.contains("hidden")) {
    box.classList.remove("hidden");
    box.classList.add("flex");
  } else {
    box.classList.remove("flex");
    box.classList.add("hidden");
  }
}

// Hiding profile box when screen is smaller
window.addEventListener("resize", function () {
  if (window.innerWidth < 1130) {
    document.getElementById("profile-box").classList.remove("flex");
    document.getElementById("profile-box").classList.add("hidden");
  }
});

//Toggling location box's display property
function locationBoxToggle() {
  const arrow = document.getElementById("location-arrow");

  const box = document.getElementById("location-box");
  if (box.classList.contains("hidden")) {
    box.classList.remove("hidden");
    arrow.style.transform = "rotate(180deg)";
  } else {
    box.classList.add("hidden");
    arrow.style.transform = "rotate(0deg)";
  }
}

function onFavClick(e) {
  e.preventDefault();
  alert("worked!");
}
