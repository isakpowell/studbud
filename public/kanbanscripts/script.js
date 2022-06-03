//script for TODO


const notesContainer = document.getElementById("kanban0");
const addNoteButton = notesContainer.querySelector(".createKanban");

kanbanNotes().forEach((note) => {
  const noteElement = kanbanComponent(note.class, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => createKanban());

function kanbanNotes() {
  return JSON.parse(localStorage.getItem("kanban-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("kanban-notes", JSON.stringify(notes));
}

function kanbanComponent(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Create Your Kanban!";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Do you want to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function createKanban() {
  const notes = kanbanNotes();
  const noteObject = {
    class: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = kanbanComponent(noteObject.class, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = kanbanNotes();
  const targetNote = notes.filter((note) => note.class == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = kanbanNotes().filter((note) => note.class != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
