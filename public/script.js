fetch("/students")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("students");

    data.forEach(student => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${student.name}</h3>
        <p>${student.message}</p>
      `;
      container.appendChild(div);
    });
  });