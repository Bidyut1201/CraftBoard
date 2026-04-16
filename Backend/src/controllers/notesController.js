import Note from '../models/Note.js';


// GET all notes - only for logged in user
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId }); // 👈 filter by user
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// GET single note by id
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, userId: req.userId }); // 👈 only owner
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// CREATE note
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content, userId: req.userId }); // 👈 attach user
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// UPDATE note
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId }, // 👈 only owner can update
      req.body,
      { new: true }
    );
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// DELETE note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete(
      { _id: req.params.id, userId: req.userId } // 👈 only owner can delete
    );
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};