import React, { useState, useEffect } from "react";

const EventForm = ({ onSave, selectedEvent }) => {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    location: "",
    description: ""
  });

  useEffect(() => {
    if (selectedEvent) {
      setEvent(selectedEvent);
    }
  }, [selectedEvent]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(event);
    setEvent({ name: "", date: "", location: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedEvent ? "Update Event" : "Create Event"}</h2>

      <input name="name" placeholder="Event Name" value={event.name} onChange={handleChange} required />
      <input name="date" type="date" value={event.date} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={event.location} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={event.description} onChange={handleChange} />

      <button type="submit">Save Event</button>
    </form>
  );
};

export default EventForm;
