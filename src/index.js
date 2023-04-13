
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo(e.target.newtaskdescription.value);
  })
});

//input.addEventListener('submit', addToDo);

function addToDo(task) {
  const p = document.createElement('p');
  p.textContent = task;
  document.querySelector('#list').appendChild(p);
}


