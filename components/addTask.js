import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task =  createTask(evento);
    list.appendChild(task);
};
// lo de abajo de comento pues esa linea se movio a otro lado y se modifico a la vez
//const taskList = [];  // el const no quiere decir que no podamos cambiar el conteniedo de la lista

const createTask = (evento) => {
    evento.preventDefault();
    // **** || []   le dice que si lo primero es null, entonces lo que hara es poner todo en vacio
    // agregamos JSON.parsepara pasar de string a ojbeto  
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(taskList);
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]");  
    const value = input.value;
    const date = calendar.value;  
    const dateFormat = moment(date).format('DD/MM/YYYY');
    console.log(dateFormat);  
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');

    const taskObj = {
    value,
    dateFormat
    };

    taskList.push(taskObj);

    localStorage.setItem("tasks", JSON.stringify(taskList))  // (llave, valor)

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElement = document.createElement('span') //recuerda la etiqueta span es html
    dateElement.innerHTML = dateFormat; // que es para agregarle el contenido
    task.appendChild(taskContent);
    task.appendChild(dateElement);  //para que se muestre en el html o en la web
    task.appendChild(deleteIcon());
    return task;
};