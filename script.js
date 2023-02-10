import { addTask } from "./components/addTask.js";

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);  //btn.addEventListener('click', createTask);

