import React from 'react';
import Image from 'next/image';

const EventDetails = ({ event }) => {
    if (!event) return <p>Event not found!</p>;

    const {
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

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">

                {/* Event Image */}
                <figure className="relative h-72 md:h-96 w-full">
                    <Image
                        src={imageUrl}
                        alt={eventName}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </figure>

                <div className="card-body p-6 md:p-10">

                    {/* Category and Price */}
                    <div className="flex flex-wrap justify-between items-center gap-3">
                        <span className="badge badge-primary badge-lg">
                            {category}
                        </span>

                        <p className="text-2xl font-bold text-primary">
                            ৳{ticketPrice}
                            <span className="text-sm font-normal text-base-content">
                                / ticket
                            </span>
                        </p>
                    </div>

                    {/* Event Title */}
                    <h1 className="text-3xl md:text-4xl font-bold mt-4">
                        {eventName}
                    </h1>

                    <p className="text-base-content/70 leading-relaxed mt-2">
                        {description}
                    </p>

                    <div className="divider"></div>

                    {/* Event Information */}
                    <h2 className="text-xl font-bold mb-4">
                        Event Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="flex gap-3 items-start">
                            <span className="text-2xl">📅</span>
                            <div>
                                <p className="font-semibold">Event Date</p>
                                <p className="text-base-content/70">
                                    {new Date(eventDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <span className="text-2xl">⏰</span>
                            <div>
                                <p className="font-semibold">Event Time</p>
                                <p className="text-base-content/70">
                                    {startTime} - {endTime}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <span className="text-2xl">📍</span>
                            <div>
                                <p className="font-semibold">Location</p>
                                <p className="text-base-content/70">{location}</p>
                                <p className="text-sm text-base-content/60">{venue}</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <span className="text-2xl">👤</span>
                            <div>
                                <p className="font-semibold">Organizer</p>
                                <p className="text-base-content/70">{organizer}</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <span className="text-2xl">🎟️</span>
                            <div>
                                <p className="font-semibold">Available Seats</p>
                                <p className="text-base-content/70">
                                    {totalSeats} seats
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="divider"></div>

                    {/* Booking Button */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                            <p className="text-sm text-base-content/60">
                                Ticket Price
                            </p>
                            <p className="text-3xl font-bold text-primary">
                                ৳{ticketPrice}
                            </p>
                        </div>

                        <button className="btn btn-primary p-2 rounded-xl bg-blue-600 btn-lg w-full sm:w-auto">
                            Book Your Ticket
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventDetails;