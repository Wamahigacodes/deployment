let notes = [];

function saveNote(title, content) {
    if (!title || !content) return null;
    const note = { id: Date.now(), title, content };
    notes.push(note);
    return note;
}

function getNotes() {
    return notes;
}

function editNote(id) {
    return notes.find(n => n.id === id);
}

function deleteNote(id) {
    notes = notes.filter(n => n.id !== id);
}

function clearNotes() {
    notes = [];
}

module.exports = {
    saveNote,
    getNotes,
    editNote,
    deleteNote,
    clearNotes
};