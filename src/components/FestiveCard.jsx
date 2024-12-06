import * as React from "react";

export function FestiveCard({ image, title, description }) {
  return (
    <article className="flex flex-col flex-1 shrink transition-all cursor-pointer basis-0 min-w-[320px]" tabIndex="0">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain w-full aspect-[1.2]"
      />
      <div className="flex flex-col mt-6 w-full">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-lg leading-loose">{description}</p>
      </div>
    </article>
  );
}

export default FestiveCard;