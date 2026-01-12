fetch("https://2024tonegonproject.github.io/Hell-of-World-official-site/projects.json?v=" + Date.now())
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("scratch-projects");

   projects.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const link = document.createElement("a");
  link.href = `https://scratch.mit.edu/projects/${item.id}/`;
  link.target = "_blank";

  const img = document.createElement("img");
  img.src = item.image;
  img.classList.add("scratch-thumb");
  img.style.animationDelay = `${index * 0.1}s`;

  const title = document.createElement("div");
  title.classList.add("project-title");
  title.textContent = item.title;

  const author = document.createElement("div");
  author.classList.add("project-author");
  author.textContent = `by ${item.author}`;

  link.appendChild(img);
  card.appendChild(link);
  card.appendChild(title);
  card.appendChild(author);
  container.appendChild(card);
});


  });
