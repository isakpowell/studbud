//script for Finished

const notesContainer3 = document.getElementById("kanban3");
const addNoteButton3 = notesContainer3.querySelector(".createKanban");

kanbanNotes3().forEach((note) => {
  const noteElement3 = kanbanComponent3(note.class, note.content);
  notesContainer3.insertBefore(noteElement3, addNoteButton3);
});

addNoteButton3.addEventListener("click", () => createKanban3());

function kanbanNotes3() {
  return JSON.parse(localStorage.getItem("kanban-notes3") || "[]");
}

function saveNotes3(notes3) {
  localStorage.setItem("kanban-notes3", JSON.stringify(notes3));
}

function kanbanComponent3(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Create Your Kanban!";

  element.addEventListener("change", () => {
    updateNote3(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete3 = confirm(
      "Do you want to delete this sticky note?"
    );

    if (doDelete3) {
      deleteNote3(id, element);
    }
  });

  return element;
}

function createKanban3() {
  const notes3 = kanbanNotes3();
  const noteObject3 = {
    class: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement3 = kanbanComponent3(noteObject3.class, noteObject3.content);
  notesContainer3.insertBefore(noteElement3, addNoteButton3);

  notes3.push(noteObject3);
  saveNotes3(notes3);
}

function updateNote3(id, newContent3) {
  const notes3 = kanbanNotes3();
  const targetNote3 = notes3.filter((note) => note.class == id)[0];

  targetNote3.content = newContent3;
  saveNotes3(notes3);
}

function deleteNote3(id, element) {
  const notes3 = kanbanNotes3().filter((note) => note.class != id);

  saveNotes3(notes3);
  notesContainer3.removeChild(element);
}
