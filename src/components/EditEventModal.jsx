
"use client";

import { useState } from "react";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

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

export default function EditEventModal({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleUpdate = async (e, close) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedEvent = {
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

      const response = await fetch(
        `http://localhost:5000/events/${event._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedEvent),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update event");
      }

      if (result.matchedCount === 0) {
        throw new Error("Event not found!");
      }

      alert("Event updated successfully!");

      close();
      router.refresh();

    } catch (error) {
      console.error("Update error:", error);
      alert(error.message || "Something went wrong!");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Modal>
      {/* Edit Button */}
      <Button
        size="sm"
        variant="secondary"
        onPress={() => setIsOpen(true)}
      >
        Edit
      </Button>

      <Modal.Backdrop
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <Modal.Container
          placement="auto"
          size="lg"
          scroll="inside"
        >
          <Modal.Dialog>
            {({ close }) => (
              <form onSubmit={(e) => handleUpdate(e, close)}>

                <Modal.CloseTrigger />

                <Modal.Header>
                  <Modal.Heading>
                    Edit Event
                  </Modal.Heading>

                  <p className="mt-1 text-sm text-gray-500">
                    Update your event information below.
                  </p>
                </Modal.Header>

                <Modal.Body className="max-h-[65vh] space-y-5 p-6">

                  {/* Event Name */}
                  <TextField
                    name="eventName"
                    isRequired
                    defaultValue={event.eventName}
                  >
                    <Label>Event Name</Label>
                    <Input placeholder="Enter event name" />
                  </TextField>

                  {/* Category */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Event Category
                    </label>

                    <select
                      name="category"
                      defaultValue={event.category}
                      required
                      className="w-full rounded-xl border border-default-300 bg-default-50 px-3 py-3 outline-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Organizer */}
                  <TextField
                    name="organizer"
                    isRequired
                    defaultValue={event.organizer}
                  >
                    <Label>Organizer</Label>
                    <Input placeholder="Organizer name" />
                  </TextField>

                  {/* Location */}
                  <TextField
                    name="location"
                    isRequired
                    defaultValue={event.location}
                  >
                    <Label>Location</Label>
                    <Input placeholder="Event location" />
                  </TextField>

                  {/* Venue */}
                  <TextField
                    name="venue"
                    isRequired
                    defaultValue={event.venue}
                  >
                    <Label>Venue</Label>
                    <Input placeholder="Event venue" />
                  </TextField>

                  {/* Ticket Price */}
                  <TextField
                    name="ticketPrice"
                    type="number"
                    isRequired
                    defaultValue={String(event.ticketPrice)}
                  >
                    <Label>Ticket Price (BDT)</Label>
                    <Input min="0" placeholder="500" />
                  </TextField>

                  {/* Total Seats */}
                  <TextField
                    name="totalSeats"
                    type="number"
                    isRequired
                    defaultValue={String(event.totalSeats)}
                  >
                    <Label>Total Seats</Label>
                    <Input min="1" placeholder="200" />
                  </TextField>

                  {/* Event Date */}
                  <TextField
                    name="eventDate"
                    type="date"
                    isRequired
                    defaultValue={event.eventDate}
                  >
                    <Label>Event Date</Label>
                    <Input />
                  </TextField>

                  {/* Start Time */}
                  <TextField
                    name="startTime"
                    type="time"
                    isRequired
                    defaultValue={event.startTime}
                  >
                    <Label>Start Time</Label>
                    <Input />
                  </TextField>

                  {/* End Time */}
                  <TextField
                    name="endTime"
                    type="time"
                    isRequired
                    defaultValue={event.endTime}
                  >
                    <Label>End Time</Label>
                    <Input />
                  </TextField>

                  {/* Image URL */}
                  <TextField
                    name="imageUrl"
                    type="url"
                    isRequired
                    defaultValue={event.imageUrl}
                  >
                    <Label>Event Image URL</Label>
                    <Input placeholder="https://example.com/image.jpg" />
                  </TextField>

                  {/* Description */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Description
                    </label>

                    <textarea
                      name="description"
                      rows={4}
                      required
                      defaultValue={event.description}
                      placeholder="Describe your event..."
                      className="w-full rounded-xl border border-default-300 bg-default-50 p-3 outline-none focus:border-blue-500"
                    />
                  </div>

                </Modal.Body>

                <Modal.Footer>
                  <Button
                    type="button"
                    variant="secondary"
                    onPress={close}
                    isDisabled={isPending}
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    isDisabled={isPending}
                  >
                    {isPending ? "Updating..." : "Update Event"}
                  </Button>
                </Modal.Footer>

              </form>
            )}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
