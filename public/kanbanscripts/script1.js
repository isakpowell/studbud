//script for In-Progress

const notesContainer1 = document.getElementById("kanban1");
const addNoteButton1 = notesContainer1.querySelector(".createKanban");

kanbanNotes1().forEach((note) => {
  const noteElement1 = kanbanComponent1(note.class, note.content);
  notesContainer1.insertBefore(noteElement1, addNoteButton1);
});

addNoteButton1.addEventListener("click", () => createKanban1());

function kanbanNotes1() {
  return JSON.parse(localStorage.getItem("kanban-notes1") || "[]");
}

function saveNotes1(notes1) {
  localStorage.setItem("kanban-notes1", JSON.stringify(notes1));
}

function kanbanComponent1(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Create Your Kanban!";

  element.addEventListener("change", () => {
    updateNote1(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete1 = confirm(
      "Do you want to delete this sticky note?"
    );

    if (doDelete1) {
      deleteNote1(id, element);
    }
  });

  return element;
}

function createKanban1() {
  const notes1 = kanbanNotes1();
  const noteObject1 = {
    class: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement1 = kanbanComponent1(noteObject1.class, noteObject1.content);
  notesContainer1.insertBefore(noteElement1, addNoteButton1);

  notes1.push(noteObject1);
  saveNotes1(notes1);
}

function updateNote1(id, newContent1) {
  const notes1 = kanbanNotes1();
  const targetNote1 = notes1.filter((note) => note.class == id)[0];

  targetNote1.content = newContent1;
  saveNotes1(notes1);
}

function deleteNote1(id, element) {
  const notes1 = kanbanNotes1().filter((note) => note.class != id);

  saveNotes1(notes1);
  notesContainer1.removeChild(element);
}
