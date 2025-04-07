// 🌞 Dynamic Greeting (only on home page)
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const hour = new Date().getHours();
  let greetingText = "Hello!";
  if (hour < 12) greetingText = "Good Morning!";
  else if (hour < 18) greetingText = "Good Afternoon!";
  else greetingText = "Good Evening!";
  greetingEl.innerText = greetingText;
}

// 🌙 Theme Toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  };

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
}

// 🔍 Scrollspy (only if nav links exist)
const navLinks = document.querySelectorAll(".nav-link");
if (navLinks.length > 0) {
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100;
    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
}

// 💼 Projects Section
const projectContainer = document.getElementById("projectContainer");
if (projectContainer) {
  const projects = [
    { title: "Personal Website", category: "website", image: "img2.jpg" },
    { title: "Library System", category: "system", image: "img3.jpg" },
    { title: "Social Media App", category: "socialmedia", image: "img4.jpg" },
    { title: "Encryption & Decryption App", category: "app", image: "img5.jpg" },
  ];

  window.displayProjects = function (category = "all") {
    projectContainer.innerHTML = "";
    projects
      .filter(p => category === "all" || p.category === category)
      .forEach(p => {
        projectContainer.innerHTML += `
          <div class="project">
            <img src="${p.image}" alt="${p.title}" width="100%" />
            <h3>${p.title}</h3>
            <p>Category: ${p.category}</p>
          </div>`;
      });
  };

  displayProjects(); // Initial load
}

// 📝 Blog Section
const blogContainer = document.getElementById("blogContainer");
const blogSearch = document.getElementById("blogSearch");
if (blogContainer && blogSearch) {
  const blogs = [
    { title: "Why I Love Coding", content: "Lorem ipsum...", tag: "coding" },
    { title: "My Journey in Tech", content: "Dolor sit amet...", tag: "career" },
  ];

  function displayBlogs(filter = "") {
    blogContainer.innerHTML = "";
    blogs
      .filter(b => b.title.toLowerCase().includes(filter.toLowerCase()))
      .forEach(b => {
        blogContainer.innerHTML += `
          <article>
            <h3>${b.title}</h3>
            <p>${b.content}</p>
            <hr/>
          </article>`;
      });
  }

  blogSearch.addEventListener("input", e => {
    displayBlogs(e.target.value);
  });

  displayBlogs(); // Initial load
}

// 📬 Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    if (!name || !email || !message || !email.includes("@")) {
      feedback.textContent = "Please enter valid details.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Message sent successfully!";
      feedback.style.color = "green";
      this.reset();
    }
  });
}

// ✨ Scroll Reveal Animation
const faders = document.querySelectorAll('.fade-in');
if (faders.length > 0) {
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
}

// ⬆ Back to Top Button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
  });

  backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
