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
function duplicateLookbookIfWide() {
  const lookbook = document.querySelector('.lookbook');
  if (window.innerWidth > 431 && !lookbook.classList.contains('duplicated')) {
    lookbook.innerHTML += lookbook.innerHTML;
    lookbook.classList.add('duplicated');
  }
}

document.addEventListener("DOMContentLoaded", duplicateLookbookIfWide);
window.addEventListener("resize", duplicateLookbookIfWide);
  
// Page 4 image automatic scroll horizontal
// document.addEventListener("DOMContentLoaded", () => {
//     const lookbook = document.querySelector('.lookbook');
//     lookbook.innerHTML += lookbook.innerHTML; // duplicate content
//   });



// // page 4 gallery img scroll vertical
// document.addEventListener("DOMContentLoaded", () => {
//   let targetOffset = 0;
//   let currentOffset = 0;
//   let direction = -1;

//   window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY;
//     direction = scrollY > targetOffset ? -1 : 1;
//     targetOffset = scrollY;
//   });

//   function animateMedia() {
//     currentOffset += (targetOffset - currentOffset) * 0.05;

//     document.querySelectorAll('.collection img, .collection video').forEach((media, index) => {
//       const offset = (currentOffset * 0.015 + index * 5) * direction;
//       media.style.transform = `translateY(${offset}px)`;
//     });

//     requestAnimationFrame(animateMedia);
//   }

//   animateMedia();
// });





// For page 5 form phoneumber country locator
// document.addEventListener("DOMContentLoaded", function () {
//   const input = document.querySelector("#phone");
//   window.intlTelInput(input, {
//     initialCountry: "ng",
//     utilsScript: "Website\utils.js"
//   });
// });