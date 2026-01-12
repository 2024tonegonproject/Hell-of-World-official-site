fetch("projects.json?v=" + Date.now())
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("scratch-projects");

    projects.forEach((project, index) => {
      const link = document.createElement("a");
      link.href = `https://scratch.mit.edu/projects/${project}/`;
      link.target = "_blank";

      const img = document.createElement("img");
      img.src = `https://cdn2.scratch.mit.edu/get_image/project/${project}_282x210.png`;
      img.classList.add("scratch-thumb");

      img.style.animationDelay = `${index * 0.1}s`;

      link.appendChild(img);
      container.appendChild(link);
    });
  });