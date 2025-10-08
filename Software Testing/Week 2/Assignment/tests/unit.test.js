const { saveNote, clearNotes } = require('./notes');

describe('Unit Tests - saveNote function', () => {
    beforeEach(() => {
        clearNotes(); // Reset notes before each test
    });

    test('should save a note with valid title and content', () => {
        const result = saveNote('Test Title', 'Test Content');
        
        expect(result).toBeTruthy();
        expect(result.title).toBe('Test Title');
        expect(result.content).toBe('Test Content');
        expect(result.id).toBeDefined();
    });

    test('should not save note when title is empty', () => {
        const result = saveNote('', 'Test Content');
        
        expect(result).toBeNull();
    });

    test('should not save note when content is empty', () => {
        const result = saveNote('Test Title', '');
        
        expect(result).toBeNull();
    });

    test('should not save note when both title and content are empty', () => {
        const result = saveNote('', '');
        
        expect(result).toBeNull();
    });

    test('should save note with special characters', () => {
        const result = saveNote('Title @#$%', 'Content &*()');
        
        expect(result).toBeTruthy();
        expect(result.title).toBe('Title @#$%');
        expect(result.content).toBe('Content &*()');
    });
});