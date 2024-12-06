import * as React from "react";
import { FestiveCard } from "./FestiveCard";

const festiveData = [
  {
    image: '/gaijatra.webp', // Use the imported image
    title: "Gai Jatra",
    description: "The festival of satiric street performances",
  },
  {
    image: '/Indra_jatra.webp', // Use the imported image
    title: "Indrajatra",
    description: "A festival honoring Lord Indra with processions and performances",
  },
  {
    image: "/gunla.webp",
    title: "Gunla and Panchadan (Panchara) Parva", 
    description: "Panchara: The Festivals of Buddhism and Community Giving"
  },
  {
    image: "/khamay.webp",
    title: "Khamay Jatra",
    description: "Khame Jatra: The Unique Festival of Bhaktapur"
  },
  {
    image: "/chandu.webp",
    title: "Chandeshwori Jatra",
    description: "Chandeshwori Jatra: The Festival of Chandeshwori Devotion and Unity"
  },
  {
    image: "/Bisket_Jatra_VIbes.webp",
    title: "Bisket Jatra",
    description: "A fusion of tradition and uniqueness"
  }
];

export function UpcomingFestives() {
  return (
    <section
  className="flex flex-col px-6 py-11 bg-gray-50 text-gray-800"
  aria-labelledby="festives-heading"
>
  <h1
    id="festives-heading"
    className="self-center text-3xl font-semibold leading-none text-center"
  >
    Upcoming Festives
  </h1>
  <div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11 w-full"
  >
    {festiveData.map((festive, index) => (
      <FestiveCard
        key={index}
        image={festive.image}
        title={festive.title}
        description={festive.description}
      />
    ))}
  </div>
</section>

  );
}

export default UpcomingFestives;