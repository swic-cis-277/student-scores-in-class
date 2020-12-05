import db from "/db";
import store from "/store";

const addStudent = ({ name, score }) => {
  db.collection("students")
    .add({
      name,
      score,
    })
    // Get the document reference back after it's successfully written
    .then(({ id }) => {
      store.setData({ id, name, score });
    })
    .catch((err) => {
      console.error(`Got an err: ${err.msg}`);
    });
};

const processForm = (form) => Object.fromEntries(new FormData(form));
