"use client"
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }) => {
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
    description,
  } = event;

  const formattedDate = new Date(
    `${eventDate}T00:00:00`
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Event Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
        width={400}
        height={400}
          src={imageUrl}
          alt={eventName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-md">
          {category}
        </span>

        {/* Ticket Price */}
        <div className="absolute bottom-4 right-4 rounded-xl bg-base-100 px-4 py-2 shadow-lg">
          <p className="text-xs text-base-content/60">Ticket Price</p>
          <p className="text-lg font-bold text-cyan-500">
            {ticketPrice === 0 ? "Free" : `৳${ticketPrice}`}
          </p>
        </div>
      </div>

      {/* Event Content */}
      <div className="space-y-4 p-5">

        {/* Date */}
        <div className="flex items-center gap-2 text-sm font-medium text-cyan-500">
          <span>📅</span>
          <span>{formattedDate}</span>
          <span className="text-base-content/40">|</span>
          <span>{startTime}</span>
        </div>

        {/* Event Name */}
        <h2 className="line-clamp-1 text-xl font-bold transition-colors group-hover:text-cyan-500">
          {eventName}
        </h2>

        {/* Description */}
        

        {/* Location */}
        <div className="flex items-start gap-3 text-sm text-base-content/70">
          <span>📍</span>
          <div>
            <p className="font-semibold">{location}</p>
            <p className="line-clamp-1 text-xs text-base-content/50">
              {venue}
            </p>
          </div>
        </div>

        {/* Organizer and Seats */}
        <div className="flex items-center justify-between border-t border-base-300 pt-4">
          <div>
            <p className="text-xs text-base-content/50">Organized by</p>
            <p className="max-w-36 truncate text-sm font-semibold">
              {organizer}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-base-content/50">Total Seats</p>
            <p className="text-sm font-semibold">{totalSeats} Seats</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <Link
            href={`/all-events/${_id}`}
            className="flex-1 rounded-xl border border-cyan-500 py-3 text-center text-sm font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
          >
            View Details
          </Link>

          <Link
            href={`/all-events/${_id}`}
            className="flex-1 rounded-xl bg-cyan-500 py-3 text-center text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            Book Ticket
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EventCard;
