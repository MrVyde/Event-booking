//For the scroll effect
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navigation");
    var scrollThreshold = 150; // Adjust this value to control when navbar becomes fixed

    if (window.scrollY > scrollThreshold) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
})


//   // Header nav-links dropbtn -Close other dropdowns and open this one
  document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown");

    dropBtn.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    });

    // Optional: click outside to close dropdown
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  });


// Header ham-sidebar nav-links
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerbtn");
    const nav2 = document.querySelector(".nav-2");

    hamburgerBtn.addEventListener("click", () => {
      nav2.classList.toggle("show");
    });

    // Optional: close menu if any nav item is clicked
    document.querySelectorAll(".nav-links-2 li a").forEach(link => {
      link.addEventListener("click", () => {
        nav2.classList.remove("show");
      });
    });
  });

// Page 4 image automatic scroll horizontal
document.addEventListener("DOMContentLoaded", () => {
  const lookbook = document.querySelector(".lookbook");
  const dots = document.querySelectorAll(".dot");

  // Only duplicate on wide screens
if (window.innerWidth > 767 && !lookbook.classList.contains("duplicated")) {
  const items = lookbook.querySelectorAll('.collection');
  items.forEach(item => {
    const clone = item.cloneNode(true);
    lookbook.appendChild(clone);
  });
  lookbook.classList.add("duplicated");
}


  // Clean scroll and pagination logic for all screens
  lookbook.scrollLeft = 0;

  lookbook.addEventListener("scroll", () => {
    const index = Math.round(lookbook.scrollLeft / lookbook.offsetWidth);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  });
});
