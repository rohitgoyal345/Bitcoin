

document.addEventListener("scroll", function () {
    const nab = document.querySelector(".nab");
    const navLinks = document.querySelectorAll(".nav-link");
    if (window.scrollY > 50) { 
      nab.style.backgroundColor = "black";
      navLinks.forEach(link => link.style.color = "white");
    } else {
      nab.style.backgroundColor = "initial";
      navLinks.forEach(link => link.style.color = "");
    }
  });
  
 
  // mouse curose effect js
  
  const queryCursor = document.querySelector(".cursor");
  
  var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $cursor: queryCursor,
  
    init: function () {
      this.outlineSize = this.$cursor.offsetWidth;
      this.setupEventListeners();
      this.animateDotOutline();
    },
  
    setupEventListeners: function () {
      var self = this;
  
      // On Hover Some Elements
      document.querySelectorAll("img").forEach(function (el) {
        el.addEventListener("mouseover", function () {
          self.cursorEnlarged = true;
          queryCursor.classList.add("active");
        });
        el.addEventListener("mouseout", function () {
          self.cursorEnlarged = false;
          queryCursor.classList.remove("active");
        });
      });
      
      // On Hover Disappears 
      document.querySelectorAll("a, input, textarea").forEach(function (el) {
        el.addEventListener("mouseover", function () {
          self.cursorEnlarged = true;
          queryCursor.classList.add("hidden");
        });
        el.addEventListener("mouseout", function () {
          self.cursorEnlarged = false;
          queryCursor.classList.remove("hidden");
        });
      });
  
      document.addEventListener("mousemove", function (e) {
        // Show the cursor
        self.cursorVisible = true;
        self.toggleCursorVisibility();
  
        // Position the dot
        self.endX = e.pageX;
        self.endY = e.pageY;
      });
  
      // Hide/show cursor
      document.addEventListener("mouseenter", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$cursor.style.opacity = 1;
      });
  
      document.addEventListener("mouseleave", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$cursor.style.opacity = 0;
      });
    },
  
    animateDotOutline: function () {
      var self = this;
  
      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$cursor.style.top = self._y + "px";
      self.$cursor.style.left = self._x + "px";
  
      requestAnimationFrame(this.animateDotOutline.bind(self));
    },
  
    toggleCursorVisibility: function () {
      var self = this;
  
      if (self.cursorVisible) {
        self.$cursor.style.opacity = 1;
      } else {
        self.$cursor.style.opacity = 0;
      }
    }
  };
  cursor.init();
  
 
  
  // Run the check on page load as well
  // document.addEventListener("DOMContentLoaded", function () {
  //   const container = document.querySelector(".container");
  //   if (container) {
  //       if (window.innerWidth > 992) {
  //           container.classList.remove("container");
  //           container.classList.add("container-fluid");
  //       } else {
  //           container.classList.remove("container-fluid");
  //           container.classList.add("container");
  //       }
  //   }
  // });
  