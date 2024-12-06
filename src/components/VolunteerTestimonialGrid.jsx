import * as React from "react";
import VolunteerTestimonialCard from "./VolunteerTestimonialCard";

const testimonialData = [
  {
    id: 1,
    authorImage: "/volunteer_1.png",
    authorName: "Gemma Nolen",
    company: "Google",
    badge: "Gold Rank Volunteer",
    quote: "Service to others is the rent you pay for your room here on earth.",
  },
  {
    id: 2,
    authorImage: "/volunteer_2.png",
    authorName: "John Doe",
    company: "Microsoft",
    badge: "Silver Rank Volunteer",
    quote: "The best way to find yourself is to lose yourself in the service of others.",
  },
  {
    id: 3,
    authorImage: "/volunteer_3.png",
    authorName: "Jane Smith",
    company: "Amazon",
    badge: "Bronze Rank Volunteer",
    quote: "Volunteering is at the very core of being a human. No one has made it through life without someone else’s help.",
  },
  {
    id: 4,
    authorImage: "/volunteer_4.png",
    authorName: "Alice Brown",
    company: "Apple",
    badge: "Platinum Rank Volunteer",
    quote: "The meaning of life is to find your gift. The purpose of life is to give it away.",
  },
];

function VolunteerTestimonialGrid() {
  return (
    <section
      className="relative w-full overflow-hidden py-12 bg-zinc-100"
      aria-label="Infinite Testimonials"
    >
      <div className="flex gap-12 animate-marquee w-full px-8">
        {/* First set of testimonials */}
        {testimonialData.map((testimonial) => (
          <VolunteerTestimonialCard key={testimonial.id} {...testimonial} />
        ))}
        {/* Duplicate set for infinite scroll */}
        {testimonialData.map((testimonial) => (
          <VolunteerTestimonialCard key={`duplicate-${testimonial.id}`} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

export default VolunteerTestimonialGrid;
