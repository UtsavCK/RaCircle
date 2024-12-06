import * as React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    id: 1,
    text: "A way to properly preserve culture by action rather than by archiving.",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1657346bf6ea59c45631fbf30aee9937c9fa62187ea89fd815146c56f6a8fc01?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    authorName: "Gemma Nolen",
    company: "Google",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/5246ecc07c909c420fb44af746a3b0eb88e59abbfc8e7d547b4e28a6e9b7b49f?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 2,
    text: "this is a test 002 and it worked",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/45c7307d7ca17ed5b5abf6a966f6e61833271b0ca6068ee9a01f4179fbe89eb1?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    authorName: "Gemma Nolen",
    company: "Google",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9fe4b3a4f7701dab7157e5fa93f1c613fd292fb3de2f906514931a8134de96c?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 3,
    text: "58 people are the reasons.",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6ef7041a939a8e2fca1aaecec245ac108a67b3e466131b7174739ed10f9fbd?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    authorName: "Gemma Nolen",
    company: "Google",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/05f60210e22fb26697c8619aae350d8e03d2f242a339dd634789ce8565971cc0?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 4,
    text: "May thy lord have peace upon ur mind.",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1657346bf6ea59c45631fbf30aee9937c9fa62187ea89fd815146c56f6a8fc01?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    authorName: "Gemma Nolen",
    company: "Google",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/5246ecc07c909c420fb44af746a3b0eb88e59abbfc8e7d547b4e28a6e9b7b49f?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 5,
    text: "The world is a quiet place when its winter.",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/45c7307d7ca17ed5b5abf6a966f6e61833271b0ca6068ee9a01f4179fbe89eb1?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    authorName: "Gemma Nolen",
    company: "Google",
    ratingStars: 5,
    starImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9fe4b3a4f7701dab7157e5fa93f1c613fd292fb3de2f906514931a8134de96c?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
  },
  {
    id: 6,
    text: "7689490203948324 ihfsdkbfiu",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6ef7041a939a8e2fca1aaecec245ac108a67b3e466131b7174739ed10f9fbd?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    authorName: "Gemma Nolen",
    company: "Google",
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



