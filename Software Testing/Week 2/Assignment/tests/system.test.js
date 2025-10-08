const { saveNote, getNotes, editNote, deleteNote, clearNotes } = require('./notes');

describe('System Tests - Complete User Flow', () => {
    beforeEach(() => {
        clearNotes();
    });

    test('complete CRUD workflow', () => {
        // 1. CREATE - Write and save a note
        console.log('Step 1: Creating a note...');
        const originalNote = saveNote('My Note', 'Original content');
        expect(originalNote).toBeTruthy();
        expect(getNotes()).toHaveLength(1);

        // 2. READ - Verify note is stored and retrievable
        console.log('Step 2: Reading the note...');
        const notes = getNotes();
        expect(notes[0].title).toBe('My Note');
        expect(notes[0].content).toBe('Original content');

        // 3. UPDATE - Edit the note
        console.log('Step 3: Editing the note...');
        const noteToEdit = editNote(originalNote.id);
        expect(noteToEdit).toBeTruthy();
        
        // Simulate editing by deleting and creating new
        deleteNote(originalNote.id);
        expect(getNotes()).toHaveLength(0);
        
        const updatedNote = saveNote('Updated Note', 'Updated content');
        expect(updatedNote).toBeTruthy();
        expect(getNotes()).toHaveLength(1);
        expect(getNotes()[0].title).toBe('Updated Note');

        // 4. DELETE - Remove the note
        console.log('Step 4: Deleting the note...');
        deleteNote(updatedNote.id);
        expect(getNotes()).toHaveLength(0);

        console.log('✅ Complete CRUD workflow test passed!');
    });

    test('multiple notes management workflow', () => {
        // Create multiple notes
        const note1 = saveNote('Work Tasks', 'Finish project, Meeting at 3 PM');
        const note2 = saveNote('Personal', 'Gym, Groceries');
        const note3 = saveNote('Ideas', 'New app concept');
        
        expect(getNotes()).toHaveLength(3);

        // Edit one note
        const editTarget = note2.id;
        deleteNote(editTarget);
        saveNote('Personal Updated', 'Gym, Groceries, Cook dinner');
        
        expect(getNotes()).toHaveLength(3);
        
        // Delete all notes one by one
        deleteNote(note1.id);
        expect(getNotes()).toHaveLength(2);
        
        deleteNote(note3.id);
        expect(getNotes()).toHaveLength(1);
        
        deleteNote(getNotes()[0].id);
        expect(getNotes()).toHaveLength(0);
    });

    test('edge cases in complete workflow', () => {
        // Try to delete non-existent note
        deleteNote(99999);
        expect(getNotes()).toHaveLength(0);

        // Create valid note after failed operations
        const validNote = saveNote('Valid', 'Content');
        expect(getNotes()).toHaveLength(1);

        // Try to edit non-existent note
        const nonExistent = editNote(99999);
        expect(nonExistent).toBeUndefined();

        // Original note should still exist
        expect(getNotes()).toHaveLength(1);
    });
});