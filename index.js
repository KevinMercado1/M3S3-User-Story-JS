let btn = document.getElementById('btnNote');
let input = document.getElementById('noteInput');
let list = document.getElementById('noteList');

btn.addEventListener('click', () => {
  let newNotes = document.createElement('li');
  newNotes.textContent = input.value;
  list.appendChild(newNotes);

  input.value = '';
  alert('Note added');
});

console.log('Input:', input);
console.log('Botón:', btn);
console.log('Lista:', list);
