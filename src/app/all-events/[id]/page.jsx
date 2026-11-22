// import EventDetails from '@/components/EventDetails';

import EventDetails from "@/components/EventDetails";

const EventDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/events/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return <div className="text-center py-20">Event not found!</div>;
    }

    const event = await res.json();

    return <EventDetails event={event} />;
};

export default EventDetailsPage;