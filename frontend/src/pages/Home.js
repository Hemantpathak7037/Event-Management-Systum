import React, { useEffect, useState } from "react";
import { getEvents, createEvent, updateEvent, deleteEvent } from "../api/eventApi";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const loadEvents = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const saveEvent = async (event) => {
    if (event._id) {
      await updateEvent(event._id, event);
    } else {
      await createEvent(event);
    }
    setSelectedEvent(null);
    loadEvents();
  };

  const removeEvent = async (id) => {
    await deleteEvent(id);
    loadEvents();
  };

  return (
    <div>
      <h1>Event Management System</h1>
      <EventForm onSave={saveEvent} selectedEvent={selectedEvent} />
      <EventList events={events} onEdit={setSelectedEvent} onDelete={removeEvent} />
    </div>
  );
};

export default Home;
