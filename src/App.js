import React, { useState, useEffect } from 'react';
import Area from './Components/Area';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';
import AsyncStorage from '@react-native-community/async-storage'; // Import the deprecated AsyncStorage
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from AsyncStorage when the app loads
  useEffect(() => {
    loadNotes();
  }, []);

  // Function to load notes from AsyncStorage
  async function loadNotes() {
    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Function to add a new note and save to AsyncStorage
  async function addNote(newNote) {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.log(error);
    }
  }

  // Function to delete a note by its id and update AsyncStorage
  async function deleteNote(id) {
    const updatedNotes = notes.filter((noteItem, index) => index !== id);
    setNotes(updatedNotes);
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Header />
      <Area onAdd={addNote} />
      <div className="notes-container">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
