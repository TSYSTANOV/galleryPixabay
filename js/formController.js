import { API_component } from "./api.js";
import { GRID_CONTROLLER_component } from "./gridController.js";

const form = document.querySelector("form");

class Form {
  controller() {
    form.addEventListener("submit", async () => {
      event.preventDefault();
      const searchInfo = form.search.value;
      form.reset();
      form.search.blur();
      const data = await API_component.getData(searchInfo);

      GRID_CONTROLLER_component.render(data);
    });
  }
}

const FORM_CONTROLLER_component = new Form();
export { FORM_CONTROLLER_component };
