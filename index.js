/* Select DOM elements */
let btn = document.getElementById('btnNote');
let formNote = document.querySelector('form');
let input = document.getElementById('noteInput');
let list = document.getElementById('noteList');
let deleteNote = document.getElementById('deletebtn');

console.log('references:', { btn, list, input });

/* Load notes from LocalStorage */
let notes = JSON.parse(localStorage.getItem('notes')) || [];

/* 
   RENDER FUNCTION
   @param {Array} data - The array of strings to display
   @param {HTMLElement} container - The list element where notes will be injected
*/

function renderNotes() {
  list.innerHTML = '';
  notes.forEach((noteText) => {
    let li = document.createElement('li');
    li.textContent = noteText + ' ';

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
      list.removeChild(li);
      console.log('Deleted');
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

/* Initial render passing specific parameters */
renderNotes();

/* 
   ADD NOTE FUNCTION
   @param {string} text - The content of the note
   @param {Array} data - The array to update
   @param {HTMLElement} container - The UI list to update
*/

function addNote() {
  if (input.value.trim() !== '') {
    /* Update the data array */
    notes.push(input.value);

    /* Update the UI */
    let newNote = document.createElement('li');
    newNote.textContent = input.value + ' ';

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
      list.removeChild(newNote);
      console.log('Deleted');
    });

    newNote.appendChild(deleteBtn);
    list.appendChild(newNote);

    /* Update Storage */
    localStorage.setItem('notes', JSON.stringify(notes));

    /* Reset the global input field */
    input.value = '';
    console.log('Note added');
  } else {
    alert('The input is empty');
  }
}

/* Event for Form Submission */
formNote.addEventListener('submit', (event) => {
  event.preventDefault();
  /* We pass the current value and the existing variables as arguments */
  addNote();
});

/* 
   DELETE LAST NOTE FUNCTION
   @param {Array} data - The array to remove the item from
   @param {HTMLElement} container - The UI list to remove the element from
*/
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
