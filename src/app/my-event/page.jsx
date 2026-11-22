
// import EventCard1 from "@/components/EventCard1";

import EventCard1 from "@/components/Eventcard1";

const MyEvent = async () => {
  const res = await fetch("http://localhost:5000/events", {
    cache: "no-store",
  });

  const events = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          My Events
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard1
              key={event._id}
              event={{
                event,
                _id: event._id.toString(),
              }}
            />
          ))}
        </div>

        {events.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            No events found!
          </p>
        )}

      </div>
    </div>
  );
};

export default MyEvent;
