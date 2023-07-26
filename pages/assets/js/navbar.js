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

function onFavClick(e) {
  e.preventDefault();
  alert("worked!");
}
