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

  const titleLink = document.createElement("a");
   titleLink.href = `https://scratch.mit.edu/projects/${item.id}/`; 
   titleLink.target = "_blank"; titleLink.classList.add("project-title"); 
   titleLink.textContent = item.title;

  const author = document.createElement("a"); 
  author.classList.add("project-author"); 
  author.href = `https://scratch.mit.edu/users/${item.username}/`; 
  author.target = "_blank"; 
  author.textContent = `by ${item.username}`;
  
  link.appendChild(img);
  card.appendChild(link);
  card.appendChild(titleLink);
  card.appendChild(author);
  container.appendChild(card);
});


  });
