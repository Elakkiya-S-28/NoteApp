import React, { useState } from 'react';
import './Style.css';

function Area(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitChange(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" }); // Reset form after submission
    event.preventDefault();
  }

  return (
    <div className="Area">
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Type here"
          rows="3"
        />
        <button onClick={submitChange}>Add</button>
      </form>
    </div>
  );
}

export default Area;
