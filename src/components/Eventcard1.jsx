
"use client";
import EditEventModal from "@/components/EditEventModal";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EventCard1 = ({ event }) => {
  const {
    _id,
    eventName,
    category,
    organizer,
    location,
    venue,
    ticketPrice,
    totalSeats,
    eventDate,
    startTime,
    endTime,
    imageUrl,
    
  } = event;

  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${eventName}"?`
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/events/${_id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete event");
      }

      const data = await res.json();

      if (data.deletedCount === 1) {
        setDeleted(true);
        alert("Event deleted successfully!");
      } else {
        alert("Event not found or already deleted.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Hide the card after successful deletion
  if (deleted) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      {/* Event Image */}
      <div className="relative h-52 w-full">
<Image
  src={imageUrl || "/default-event.jpg"}
  alt={eventName || "Event image"}
  fill
  className="object-cover"
  unoptimized
/>

        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white">
          {category}
        </span>
      </div>

      {/* Event Content */}
      <div className="space-y-4 p-5">

        <div>
          <p className="text-sm font-medium text-blue-600">
            Organized by {organizer}
          </p>

                  <h2 className="mt-2 text-xl font-bold text-gray-900">
            {eventName}
          </h2>

         
        </div>

        {/* Event Information */}
        <div className="space-y-3 border-y border-gray-100 py-4 text-sm">

          <div className="flex items-center gap-3">
            <span>📅</span>
            <span className="text-gray-600">{eventDate}</span>
          </div>

          <div className="flex items-center gap-3">
            <span>⏰</span>
            <span className="text-gray-600">
              {startTime} - {endTime}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>📍</span>
            <span className="text-gray-600">
              {venue}, {location}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>🎟️</span>
            <span className="text-gray-600">
              {totalSeats} Total Seats
            </span>
          </div>
        </div>

        {/* Price and Actions */}
       <div className="flex items-center justify-between">
  <div>
    <p className="text-xs text-gray-500">Ticket Price</p>
    <p className="text-2xl font-bold text-blue-600">
      ৳{ticketPrice}
    </p>
  </div>

  <div className="flex gap-2">
    <EditEventModal event={event} />

    <button
      onClick={handleDelete}
      disabled={loading}
      className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  </div>
</div>
      </div>
    </div>
  );
};

export default EventCard1;
