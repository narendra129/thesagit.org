(function () {
  "use strict";

  var slides = [
    {
      title: "Providing What You Need",
      paragraphs: [
        "The Security Analytics Group is the one stop shop for all things related to Cyber Security. Fully protect your business with the tools and services provided by The Security Analytics Group, regardless of the size of your business. We are keen on providing quality network security services supported by years of experience and state-of-the-art technology solutions.",
        "The Security Analytics Group provides a broad range of services for your business. These services include network protection, endpoint protection, and much more. We also offer staff augmentation. With The Security Analytics Group, you are able to hire staff on contract or permanent basis. Our team of Cyber Security specialists first evaluates the current condition of your security, followed by a development period, and finally the optimum execution of your network security."
      ]
    },
    {
      title: "Why choose the Security Analytics Group",
      paragraphs: [
        "The Security Analytics Group ensures that your business remains secure as per the best possible standards of Cyber Security. Whether it is a small business or a large-scale one, we at The Security Analytics Group are fully equipped to safeguard your business from impending cyber threats. Our methods allow us to check for possible weaknesses in your current setup and take measures to fortify such areas. However, we don't stop there. We optimize and adjust your network security as we move forward. We try to work with you to enhance your business's online security to the max."
      ]
    },
    {
      title: "Our Approach",
      paragraphs: [
        "Our method to fully secure and safeguard your business is divided into 3 phases."
      ]
    },
    {
      title: "Evaluation & Assessment",
      paragraphs: [
        "We first assess and evaluate your business with respect to its setup, operations, and objectives. This way we can identify weak points and work to better them."
      ]
    },
    {
      title: "Planning & Development",
      paragraphs: [
        "In order to fulfill all the operational requirements, we need a development period in which we design and plan out everything your business model necessitates."
      ]
    },
    {
      title: "Execution & Optimization",
      paragraphs: [
        "After everything is planned out, we set up and install your security solutions. This is followed by an inspection, maintenance, and optimization for all the installed modules. In addition to this, our team of experts also offers on-site or online training for each module installed and configured for your business."
      ]
    }
  ];

  var current = 0;
  var titleEl = document.getElementById("carousel-title");
  var textEl = document.getElementById("carousel-text");
  var dotsEl = document.getElementById("carousel-dots");
  var prevBtn = document.getElementById("carousel-prev");
  var nextBtn = document.getElementById("carousel-next");

  function showSlide(index) {
    current = index;
    var slide = slides[current];
    titleEl.textContent = slide.title;
    textEl.innerHTML = slide.paragraphs.map(function (p) {
      return "<p>" + p + "</p>";
    }).join("");
    var dots = dotsEl.querySelectorAll(".carousel__dot");
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
  }

  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.className = "carousel__dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.addEventListener("click", function () { showSlide(i); });
    dotsEl.appendChild(dot);
  });

  showSlide(0);

  prevBtn.addEventListener("click", function () {
    showSlide(current === 0 ? slides.length - 1 : current - 1);
  });

  nextBtn.addEventListener("click", function () {
    showSlide(current === slides.length - 1 ? 0 : current + 1);
  });

  // Mobile menu
  var menuToggle = document.querySelector(".menu-toggle");
  var navMobile = document.querySelector(".nav-mobile");

  menuToggle.addEventListener("click", function () {
    var isOpen = navMobile.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  navMobile.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMobile.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Scroll to top
  var scrollTopBtn = document.getElementById("scroll-top");

  window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
