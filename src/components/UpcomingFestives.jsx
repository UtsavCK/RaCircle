import * as React from "react";
import { FestiveCard } from "./FestiveCard";

const festiveData = [
  {
    image: "../images/gaijatra.webp",
    title: "Gai Jatra",
    description: "the festival of satiric street performances"
  },
  {
    image: "../images/Indra_jatra.webp",
    title: "Indra Jatra",
    description: "Indra Jatra: A Glimpse into Bhaktapur's Celebration"
  },
  {
    image: "../images/gunla.webp",
    title: "Gunla and Panchadan (Panchara) Parva", 
    description: "Panchara: The Festivals of Buddhism and Community Giving"
  },
  {
    image: "../images/khamay.webp",
    title: "Khamay Jatra",
    description: "Khame Jatra: The Unique Festival of Bhaktapur"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/03221e061b9e2f8598d5e7f1048399362a3d874f078a8a4dafcaf3f00b62d751?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Project title",
    description: "UI, Art drection"
  },
  {
    image: "../images/Bisket_Jatra_vibes.webp",
    title: "Bisket Jatra",
    description: "A fusion of tradition and uniqueness"
  }
];

export function UpcomingFestives() {
  return (
    <section className="flex overflow-hidden flex-col self-stretch px-6 py-11 bg-white text-zinc-800 max-md:px-5" aria-labelledby="festives-heading">
      <h1 id="festives-heading" className="self-center text-3xl font-semibold leading-none text-center">
        Upcoming Festives
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 items-start mt-11 w-full max-md:mt-10 max-md:max-w-full sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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