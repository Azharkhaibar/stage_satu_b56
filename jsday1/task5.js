document.addEventListener("DOMContentLoaded", function () {
  const Form = document.querySelector(".container__form");
  const cardContainer = document.querySelector(".card__project__container");

  Form.addEventListener("submit", function (event) {
    event.preventDefault();

    const projectName = document.getElementById("name").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const description = document.getElementById("description").value;
    const imageUpload = document.getElementById("image_upload").files[0];

    const ImageNew = URL.createObjectURL(imageUpload); // Correct variable name
    const newCardProject = document.createElement("div");
    newCardProject.className = "card__project__item";

    newCardProject.innerHTML = `
      <img src="${ImageNew}" alt="Project Image" /> <!-- Use ImageNew here -->
      <div class="down__item">
        <h3>${projectName}</h3>
        <div class="start__end" style="display: flex;">
          <h4>${startDate}</h4>
          <h4>${endDate}</h4>
        </div>
        <p>${description}</p>
        <div class="icon" style="display: flex">
          <i class="fab fa-react"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-node-js"></i>
          <i class="fas fa-code"></i>
        </div>
        <div class="btn">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;

    newCardProject.querySelector(".delete-btn").addEventListener("click", function () {
        cardContainer.removeChild(newCardProject);
    });

    cardContainer.appendChild(newCardProject);

    Form.reset();
  });
});
