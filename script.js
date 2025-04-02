// Dynamic greeting based on time
window.onload = () => {
  const hour = new Date().getHours();
  let message = "";
  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";
  document.getElementById("greeting").textContent = message;
};

// Theme Toggle with LocalStorage
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

// Blog Loader
const blogs = [
  { title: "My First Blog", category: "Web", content: "This is about web dev." },
  { title: "Data Project", category: "Data", content: "This is about data analysis." }
];

function loadBlogs() {
  const blogList = document.getElementById("blog-list");
  blogList.innerHTML = "";
  blogs.forEach(blog => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
    blogList.appendChild(div);
  });
}

document.getElementById("blog-search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = blogs.filter(b => b.title.toLowerCase().includes(value));
  const blogList = document.getElementById("blog-list");
  blogList.innerHTML = "";
  filtered.forEach(blog => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
    blogList.appendChild(div);
  });
});

loadBlogs();
