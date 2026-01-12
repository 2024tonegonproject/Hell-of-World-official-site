fetch("https://api.scratch.mit.edu/studios/50976499/projects?v=" + Date.now())
  .then(res => res.json())

  .then(projects => {
    const container = document.getElementById("scratch-projects");

    projects.forEach((item, index) => {

      const id = item.id;
      const title = item.title;
      const image = item.image;
      const username = item.username;

      const link = document.createElement("a");
      link.href = `https://scratch.mit.edu/projects/${id}/`;
      link.target = "_blank";

      const img = document.createElement("img");
      img.src = image;
      img.classList.add("scratch-thumb");

      img.style.animationDelay = `${index * 0.1}s`;

      link.appendChild(img);
      container.appendChild(link);
    });
  });
