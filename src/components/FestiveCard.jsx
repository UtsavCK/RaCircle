import * as React from "react";

export function FestiveCard({ image, title, description }) {
  return (
    <article
  className="flex flex-col flex-1 shrink transition-all cursor-pointer basis-0 min-w-[320px] bg-white rounded-lg border border-gray-200 shadow hover:shadow-md"
  tabIndex="0"
>
  <img
    loading="lazy"
    src={image}
    alt={title}
    className="w-full h-48 object-cover rounded-t-lg"
  />
  <div className="flex flex-col p-4">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
  </div>
</article>

  );
}

export default FestiveCard;