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

// TODO: Abstract this into a 'form handler'
api.create({ name: "Mark Davis", score: 49 });
