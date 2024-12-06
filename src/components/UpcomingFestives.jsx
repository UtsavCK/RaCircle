import * as React from "react";
import { FestiveCard } from "./FestiveCard";

const festiveData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5bf7c857dd70097536fa708f71c3657d1eeebc453ee7e5a1e344bb6fad47bf03?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Bisket Jatra",
    description: "The festive of colors"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/13ac6baacff336c5ec86a3a7c24d78bca124211e58b24046c293be2a758c931b?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Project title",
    description: "UI, Art drection"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/278e56aedd70a45030a4f0e4f0b6e0e38404a42db32adc79e32e5db889b768ae?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Project title", 
    description: "UI, Art drection"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ad4adda293d5aefd8cdd79632ccf012fe7201e39bdb666b8db06ea3947113aa?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Project title",
    description: "UI, Art drection"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/03221e061b9e2f8598d5e7f1048399362a3d874f078a8a4dafcaf3f00b62d751?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Project title",
    description: "UI, Art drection"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e1316726d99d7fc66a544c53107724781bddaf6984301ee1d5599a99f5aa150?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Project title",
    description: "UI, Art drection"
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