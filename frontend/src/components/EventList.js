import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <ul>
      {events.map(event => (
        <EventItem
          key={event._id}
          event={event}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default EventList;
