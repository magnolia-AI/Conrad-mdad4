"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Event } from "../types/event";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";
interface EventCardProps {
  event: Event;
}
export function EventCard({ event }: EventCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleBooking = () => {
    setIsDialogOpen(false);
    // Add booking logic here
  };
  return (
    <>
      <Card className="overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{event.description}</p>
          <div className="mt-4">
            <p>Date: {format(new Date(event.date), "MMMM dd, yyyy")}</p>
            <p>Price: ${event.price}</p>
            <p>Available Seats: {event.availableSeats}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full">Book Now</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Book Event: {event.title}</DialogTitle>
                <DialogDescription>
                  Are you sure you want to book this event?
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>Date: {format(new Date(event.date), "MMMM dd, yyyy")}</p>
                <p>Price: ${event.price}</p>
                <p>Available Seats: {event.availableSeats}</p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleBooking}>Confirm Booking</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
}