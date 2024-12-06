import * as React from "react";

function RatingStars({ count, starImage }) {
  return (
    <div className="flex gap-1.5 items-start self-start" role="img" aria-label={`Rating: ${count} out of 5 stars`}>
      {[...Array(count)].map((_, index) => (
        <img
          key={index}
          loading="lazy"
          src={starImage}
          className="object-contain shrink-0 w-5 aspect-square"
          alt=""
        />
      ))}
    </div>
  );
}

export default RatingStars;