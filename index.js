let btn = document.getElementById('btnNote');
let input = document.getElementById('noteInput');
let list = document.getElementById('noteList');

function addNote() {
  if (input.value.trim() !== '') {
    let newNotes = document.createElement('li');
    newNotes.textContent = input.value;
    list.appendChild(newNotes);
    input.value = '';
  }
}

btn.addEventListener('click', addNote);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addNote();
  }
});
