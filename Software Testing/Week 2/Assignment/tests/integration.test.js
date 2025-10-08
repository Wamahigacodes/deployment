const { saveNote, getNotes, clearNotes } = require('./notes');

describe('Integration Tests - Note Creation and Display', () => {
    beforeEach(() => {
        clearNotes();
    });

    test('should create and retrieve multiple notes correctly', () => {
        // Save first note
        const note1 = saveNote('First Note', 'First content');
        expect(note1).toBeTruthy();

        // Save second note
        const note2 = saveNote('Second Note', 'Second content');
        expect(note2).toBeTruthy();

        // Check if both notes are stored
        const allNotes = getNotes();
        expect(allNotes).toHaveLength(2);
        expect(allNotes[0].title).toBe('First Note');
        expect(allNotes[1].title).toBe('Second Note');
    });

    test('should handle note creation and verification flow', () => {
        // Simulate user creating a note
        const userTitle = 'Shopping List';
        const userContent = 'Milk, Eggs, Bread';
        
        const savedNote = saveNote(userTitle, userContent);
        
        // Verify the note was saved correctly
        expect(savedNote).toBeTruthy();
        expect(savedNote.title).toBe(userTitle);
        expect(savedNote.content).toBe(userContent);
        
        // Verify it appears in the notes list
        const notes = getNotes();
        expect(notes).toHaveLength(1);
        expect(notes[0].id).toBe(savedNote.id);
    });

    test('should maintain data integrity between operations', () => {
        // Create initial note
        saveNote('Initial', 'Content');
        expect(getNotes()).toHaveLength(1);

        // Try to create invalid note (should not affect existing data)
        saveNote('', 'Invalid content');
        expect(getNotes()).toHaveLength(1); // Should still have only the valid note

        // Create another valid note
        saveNote('Valid', 'Another content');
        expect(getNotes()).toHaveLength(2);
    });
});