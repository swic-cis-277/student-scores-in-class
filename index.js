import api from "./api";
import { Main } from "./components";
import store from "./store";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = Main();
};

api.index().then((studentData) => {
  store.setData(studentData);
  render();
});
