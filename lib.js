const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

export default (data) => {
  data.forEach(({ name, score, id }) => {
    const newStudentRow = template.content.cloneNode(true);
    const newStudentTDs = newStudentRow.querySelectorAll("td");

    newStudentTDs[0].textContent = id;
    newStudentTDs[1].textContent = name;
    newStudentTDs[2].textContent = score;
    tbody.appendChild(newStudentRow);
  });
};
