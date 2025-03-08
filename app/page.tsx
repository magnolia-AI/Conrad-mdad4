'use client';
import { EventCard } from "@/components/event-card";
import { events } from "@/data/events";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Book Amazing Events
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Discover and book the most exciting events in your area.
          </p>
        </div>
      </section>
      {/* Events Grid */}
      <section className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Event Booking. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}