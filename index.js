let btn = document.getElementById('btnNote');
let formNote = document.querySelector('form');
let input = document.getElementById('noteInput');
let list = document.getElementById('noteList');
let deleteNote = document.getElementById('deletebtn');

console.log('references:', { btn, list, input });

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function renderNotes() {
  list.innerHTML = '';
  notes.forEach((noteText) => {
    let li = document.createElement('li');
    li.textContent = noteText;
    list.appendChild(li);
  });
}

renderNotes();

function addNote() {
  if (input.value.trim() !== '') {
    notes.push(input.value);

    let newNote = document.createElement('li');
    newNote.textContent = input.value;
    list.appendChild(newNote);

    localStorage.setItem('notes', JSON.stringify(notes));
    input.value = '';

    console.log('Note added');
  } else {
    alert('The input is empty');
  }
}

formNote.addEventListener('submit', (event) => {
  event.preventDefault();
  addNote();
});

deleteNote.addEventListener('click', () => {
  if (list.lastElementChild) {
    notes.pop();

    list.removeChild(list.lastElementChild);

    localStorage.setItem('notes', JSON.stringify(notes));

    console.log('The last note was removed');
  } else {
    console.log('No notes to delete');
  }
});

console.log(`The notes charged were ${notes.length} `);
