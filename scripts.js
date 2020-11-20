import api from "./api.js";
import createTable from "./lib.js";

(async () => {
  try {
    const data = await api.index();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
