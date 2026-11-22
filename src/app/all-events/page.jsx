import EventCard from '@/components/EventCard';
import React from 'react';

const AllEvents = async() => {
   
     const res = await fetch('http://localhost:5000/events', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  const events = await res.json();
    return (
        <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-8">

            <h1 className="text-3xl py-10 font-bold mb-8">
                All Events
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    events.map((event) => (
                        <EventCard
                            key={event._id}
                            event={event}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AllEvents;
   