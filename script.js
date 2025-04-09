// Dynamic Greeting (only on home page)
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const hour = new Date().getHours();
  let greetingText = "Hello!";
  if (hour < 12) greetingText = "Good Morning!";
  else if (hour < 18) greetingText = "Good Afternoon!";
  else greetingText = "Good Evening!";
  greetingEl.innerText = greetingText;
}

// Theme Toggle
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

// Scrollspy (only if nav links exist)
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

// Projects Section
const projectContainer = document.getElementById("projectContainer");
if (projectContainer) {
  const projects = [
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
  
  window.filterProjects = function (btn, category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  displayProjects(category);
};


  displayProjects(); // Initial load
}

// Blog Section
const blogContainer = document.getElementById("blogContainer");
const blogSearch = document.getElementById("blogSearch");
if (blogContainer && blogSearch) {
  const blogs = [
    { title: "The Web and the Importance of Cybersecurity", content: "Cyberspace is a domain generated from the interconnection of computers and telecommunication networks around the world. It is used to store, modify, and exchange data via networked and related physical structures globally, regardless of physical geography.", tag: "web importance" },
    { title: "Applications and the Importance of Cybersecurity", content: "DAs apps become more popular, mobile has become a major target for cyber crime. According to the U.S. Computer Emergency Readiness Team, this could be due to the sheer number of mobile users. Currently, more than 197.4 million (79%) of the U.S. population use smartphones, with that number expected to surpass 90% by the end of 2017.", tag: "cyber" },
    { title: "The Origin and the Future of Firewalls", content: "A firewall serves the purpose of keeping danger from outside away from destroying something important. When trains were a popular form of transportation, they normally used coal furnaces. Unfortunately, these coal engines would explode at times, causing a great fire that quickly spread to the passenger sections of the train. In order to protect passengers, (after all, dead passengers don't aren't repeat riders) walls were built around the engines to prevent fires from spreading. These original firewalls are the basis of the modern firewall used to provide security to computer users on the Internet.", tag: "firewall" },
    { title: "Internet Forensics", content: "The Internet is the new frontier. It is a place many have gone, but there are still a lot of things to discover. In some ways it is like the Wild West; there is wild unknown country, and there is a lot of lawlessness going on. The problem is the newness, and as usual, criminals or thieves are a step ahead of law enforcement. If you like the idea of riding patrol on the Internet, looking for clues and gathering information that could solve a crime, Internet Forensics might be just for you.", tag: "forensics" },
    { title: "Data Security Within the Expanding Cloud Environment", content: "News stories of hackers and data leaks seem to be everyday occurrences. These stories make the cloud feel wild and dangerous with rogue bandits guarding every road on the super highway of the World Wide Web. The truth is that these stories are largely exceptions. If you consider the amount of data accessible to the web at any one point of time, these leaks are a tiny fraction of the data out there. The truth is that the vast majority of data is carefully protected and monitored by people with cybersecurity careers.", tag: "data security" },
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

// Form Validation
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

// Scroll Reveal Animation
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

// Back to Top Button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
  });

  backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
