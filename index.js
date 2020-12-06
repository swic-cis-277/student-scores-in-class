import api from "./api";
import formHandler from "./lib";
import { Main } from "./components";
import store from "./store";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = Main();
  formHandler()
    .then(() => {
      render();
    })
    .catch((error) => {
      console.error(error.msg);
    });
};

api.index().then((studentData) => {
  store.setData(studentData);
  render();
});
