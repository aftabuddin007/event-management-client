"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, DateField, Label } from "@heroui/react";
import { Calendar } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

const BookingCard = ({ event }) => {
    if (!event) return null;

    const { _id, ticketPrice,eventDate, totalSeats,eventName,category,location,venue,imageUrl } = event;
const [eventsDate,setEventDate]= useState(null)
 const {data:session}=authClient.useSession()
  const user = session?.user;
  const handleBooking=async()=>{
    const bookingData={
        UserId:user.id,
        eventId:_id,
        userName: user?.name,
        userEmail: user?.email,
        eventDate:new Date(eventsDate),
        ticketPrice,
        eventName,
        category:category,
        location:location,
        venue:venue,
imageUrl:imageUrl,  



    }
    const res = await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    console.log(data)
    // console.log(bookingData)
  }

    return (
        <div className="w-full max-w-md mx-auto my-6 p-1">
            <div className="card bg-base-100 border border-base-300 rounded-2xl shadow-xl overflow-hidden">
                <div className="card-body p-6 sm:p-7">

                    <p className="text-sm text-base-content/60">
                        Ticket Price
                    </p>

                    <h2 className="text-3xl font-bold text-primary">
                        ৳{ticketPrice}
                        <span className="text-sm font-normal text-base-content/60">
                            / person
                        </span>
                    </h2>

                    <div className="divider my-1"></div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm text-base-content/70">
                            Available Seats
                        </span>
                        <span className="font-semibold">
                            {totalSeats}
                        </span>
                    </div>

                    <DateField onChange={setEventDate} className="w-[256px]" name="date">
                        <Label>Date</Label>
                        <DateField.Group>
                            <DateField.Input>
                                {(segment) => (
                                    <DateField.Segment segment={segment} />
                                )}
                            </DateField.Input>
                            <DateField.Suffix>
                                <Calendar className="size-4 text-muted" />
                            </DateField.Suffix>
                        </DateField.Group>
                    </DateField>

                    
                        <Button onClick={handleBooking} variant="primary">Book Now</Button>
                    

                    <p className="text-xs text-center text-base-content/50">
                        Secure your seat today!
                    </p>

                </div>
            </div>
        </div>
    );
};

export default BookingCard;