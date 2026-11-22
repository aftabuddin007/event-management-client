"use client";

import { useState } from "react";

const categories = [
  "Conference",
  "Workshop",
  "Seminar",
  "Concert",
  "Wedding",
  "Birthday",
  "Corporate",
  "Sports",
  "Exhibition",
  "Other",
];

export default function AddEventPage() {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const eventData = {
    eventName: formData.get("eventName"),
    category: formData.get("category"),
    organizer: formData.get("organizer"),
    location: formData.get("location"),
    venue: formData.get("venue"),
    ticketPrice: Number(formData.get("ticketPrice")),
    totalSeats: Number(formData.get("totalSeats")),
    eventDate: formData.get("eventDate"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
    imageUrl: formData.get("imageUrl"),
    description: formData.get("description"),
  };

  try {
    setIsPending(true);

    const response = await fetch("http://localhost:5000/addEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to add event");
    }

    alert("Event added successfully!");

    form.reset();

  } catch (error) {
    console.error("Event submission error:", error);
    alert(error.message || "Something went wrong!");

  } finally {
    setIsPending(false);
  }
};

  return (
    <div className="min-h-screen bg-base-100 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Page Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-500">
            Event Management
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Create New Event
          </h1>

          <p className="mt-3 text-base-content/60">
            Fill in the details below to create and publish your event.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl border border-base-300 bg-base-200/40 shadow-sm">

          <form
            onSubmit={handleSubmit}
            className="space-y-8 p-6 md:p-10"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

              {/* Event Name */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Event Name *
                </label>

                <input
                  type="text"
                  name="eventName"
                  placeholder="e.g. Tech Innovation Summit 2026"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Event Category *
                </label>

                <select
                  name="category"
                  required
                  defaultValue=""
                  className="select select-bordered w-full rounded-2xl"
                >
                  <option value="" disabled>
                    Select category
                  </option>

                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Organizer */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Organizer Name *
                </label>

                <input
                  type="text"
                  name="organizer"
                  placeholder="Your organization name"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  City / Location *
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Dhaka, Bangladesh"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Venue */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Event Venue *
                </label>

                <input
                  type="text"
                  name="venue"
                  placeholder="International Convention City"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Ticket Price */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Ticket Price (BDT) *
                </label>

                <input
                  type="number"
                  name="ticketPrice"
                  min="0"
                  placeholder="500"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Total Seats */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Total Seats *
                </label>

                <input
                  type="number"
                  name="totalSeats"
                  min="1"
                  placeholder="200"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Event Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Event Date *
                </label>

                <input
                  type="date"
                  name="eventDate"
                  min={new Date().toISOString().split("T")[0]}
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Start Time */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Start Time *
                </label>

                <input
                  type="time"
                  name="startTime"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* End Time */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  End Time *
                </label>

                <input
                  type="time"
                  name="endTime"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Event Banner Image URL *
                </label>

                <input
                  type="url"
                  name="imageUrl"
                  placeholder="https://example.com/event-banner.jpg"
                  required
                  className="input input-bordered w-full rounded-2xl"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Event Description *
                </label>

                <textarea
                  name="description"
                  rows={5}
                  placeholder="Describe your event, activities, speakers, and what attendees can expect..."
                  required
                  className="textarea textarea-bordered w-full rounded-3xl"
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="border-t border-base-300 pt-6">
              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-none bg-cyan-500 px-6 py-4 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPending ? "Creating Event..." : "Create Event"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}