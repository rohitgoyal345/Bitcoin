

document.addEventListener("scroll", function () {
    const nab = document.querySelector(".nab");
    const navLinks = document.querySelectorAll(".nav-link");
    if (window.scrollY > 50) { 
      nab.style.backgroundColor = "#040739";
      navLinks.forEach(link => link.style.color = "white");
    } else {
      nab.style.backgroundColor = "initial";
      navLinks.forEach(link => link.style.color = "");
    }
  });
  
 
