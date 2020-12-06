const assignGrade = (score) => {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  if (score >= 70) {
    return "C";
  }
  if (score >= 60) {
    return "D";
  }
  return "F";
};

export default ({ id, name, score }) => `
  <tr data-grade=${assignGrade(score)}>
    <td>${id}</td>
    <td>${name}</td>
    <td>${score}</td>
  </tr>
`;
