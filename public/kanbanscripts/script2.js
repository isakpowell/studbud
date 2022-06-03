//script for Review

const notesContainer2 = document.getElementById("kanban2");
const addNoteButton2 = notesContainer2.querySelector(".createKanban");

kanbanNotes2().forEach((note) => {
  const noteElement2 = kanbanComponent2(note.class, note.content);
  notesContainer2.insertBefore(noteElement2, addNoteButton2);
});

addNoteButton2.addEventListener("click", () => createKanban2());

function kanbanNotes2() {
  return JSON.parse(localStorage.getItem("kanban-notes2") || "[]");
}

function saveNotes2(notes2) {
  localStorage.setItem("kanban-notes2", JSON.stringify(notes2));
}

function kanbanComponent2(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Create Your Kanban!";

  element.addEventListener("change", () => {
    updateNote2(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete2 = confirm(
      "Do you want to delete this sticky note?"
    );

    if (doDelete2) {
      deleteNote2(id, element);
    }
  });

  return element;
}

function createKanban2() {
  const notes2 = kanbanNotes2();
  const noteObject2 = {
    class: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement2 = kanbanComponent2(noteObject2.class, noteObject2.content);
  notesContainer2.insertBefore(noteElement2, addNoteButton2);

  notes2.push(noteObject2);
  saveNotes2(notes2);
}

function updateNote2(id, newContent2) {
  const notes2 = kanbanNotes2();
  const targetNote2 = notes2.filter((note) => note.class == id)[0];

  targetNote2.content = newContent2;
  saveNotes2(notes2);
}

function deleteNote2(id, element) {
  const notes2 = kanbanNotes2().filter((note) => note.class != id);

  saveNotes2(notes2);
  notesContainer2.removeChild(element);
}
