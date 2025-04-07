// Dynamic Greeting
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greetingText = "Hello!";
if (hour < 12) greetingText = "Good Morning!";
else if (hour < 18) greetingText = "Good Afternoon!";
else greetingText = "Good Evening!";
greetingEl.innerText = greetingText;

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
};
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Scrollspy
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(link => link.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// Projects
const projects = [
  { title: "Portfolio Site", category: "Web", image: "assets/project1.jpg" },
  { title: "Data Dashboard", category: "Data", image: "assets/project2.jpg" },
  { title: "AI Chatbot", category: "AI", image: "assets/project3.jpg" },
];
function displayProjects(category = "all") {
  const container = document.getElementById("projectContainer");
  container.innerHTML = "";
  projects
    .filter(p => category === "all" || p.category === category)
    .forEach(p => {
      container.innerHTML += `
        <div class="project">
          <img src="${p.image}" alt="${p.title}" width="100%" />
          <h3>${p.title}</h3>
          <p>Category: ${p.category}</p>
        </div>`;
    });
}
displayProjects();

// Blog
const blogs = [
  { title: "Why I Love Coding", content: "Lorem ipsum...", tag: "coding" },
  { title: "My Journey in Tech", content: "Dolor sit amet...", tag: "career" },
];
function displayBlogs(filter = "") {
  const container = document.getElementById("blogContainer");
  container.innerHTML = "";
  blogs
    .filter(b => b.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(b => {
      container.innerHTML += `
        <article>
          <h3>${b.title}</h3>
          <p>${b.content}</p>
          <hr/>
        </article>`;
    });
}
document.getElementById("blogSearch").addEventListener("input", e => {
  displayBlogs(e.target.value);
});
displayBlogs();

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
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
