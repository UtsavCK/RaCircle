import * as React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    id: 1,
    text: "A way to properly preserve culture by action rather than by archiving.",
    authorImage: "/user.png",
    authorName: "John Doe",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/5246ecc07c909c420fb44af746a3b0eb88e59abbfc8e7d547b4e28a6e9b7b49f?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 2,
    text: "Volunteering here has deepened my appreciation for our cultural heritage. A truly fulfilling experience!",
    authorImage: "/user.png",
    authorName: "Gemma Nolen",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9fe4b3a4f7701dab7157e5fa93f1c613fd292fb3de2f906514931a8134de96c?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 3,
    text: "This platform is a beautiful initiative to preserve traditions and connect communities.",
    authorImage: "/user.png",
    authorName: " Ramesh Karki",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/05f60210e22fb26697c8619aae350d8e03d2f242a339dd634789ce8565971cc0?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 4,
    text: "A wonderful way to get involved in safeguarding culture while learning so much about it.",
    authorImage: "/user.png",
    authorName: "Rama Shrestha",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/5246ecc07c909c420fb44af746a3b0eb88e59abbfc8e7d547b4e28a6e9b7b49f?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 5,
    text: "I joined to give back to my community, and I’ve gained more than I could have imagined.",
    authorImage: "/user.png",
    authorName: "Tara Devi",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9fe4b3a4f7701dab7157e5fa93f1c613fd292fb3de2f906514931a8134de96c?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 6,
    text: "The passion for cultural preservation here is contagious. I feel proud to contribute to such a meaningful cause.",
    authorImage: "/user.png",
    authorName: "Hari Bahadur",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/05f60210e22fb26697c8619aae350d8e03d2f242a339dd634789ce8565971cc0?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  }
];
function TestimonialGrid() {
  return (
    <section
      className="relative w-full max-w-screen-xl mx-auto mt-11 max-md:mt-10 overflow-hidden mb-12"
      aria-label="Testimonials"
    >
      <div className="flex gap-8 animate-marquee">
        {/* First instance of testimonial cards */}
        <div className="flex gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        {/* Duplicate of testimonial cards for continuous scroll */}
        <div className="flex gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={`duplicate-${testimonial.id}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialGrid;



