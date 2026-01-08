import React from "react";

const EventItem = ({ event, onEdit, onDelete }) => {
  return (
    <li>
      <strong>{event.name}</strong> <br />
      {new Date(event.date).toDateString()} <br />
      {event.location} <br />

      <button onClick={() => onEdit(event)}>Edit</button>
      <button onClick={() => onDelete(event._id)}>Delete</button>
    </li>
  );
};

export default EventItem;
