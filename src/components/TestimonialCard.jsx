import * as React from "react";
import RatingStars from "./RatingStars";
import AuthorInfo from "./AuthorInfo";

function TestimonialCard({ text, authorImage, authorName, company, ratingStars, starImage }) {
  return (
    <article className="flex flex-col shrink p-11 h-full min-h-0 basis-0 bg-zinc-100 flex-[1_1_calc(33.33%_-_24px)] max-w-[calc(33%_-_24px)] min-w-[320px] max-md:px-5 max-md:flex-[1_1_calc(50%_-_24px)] max-md:max-w-[calc(50%_-_24px)] max-sm:max-w-full max-sm:flex-[1_1_100%]">
      <h2 className="text-xl font-semibold leading-8 text-zinc-800">
        {text}
      </h2>
      <div className="flex gap-4 items-start mt-16 w-full max-md:mt-10">
        <AuthorInfo 
          image={authorImage} 
          name={authorName} 
          company={company} 
        />
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <RatingStars count={ratingStars} starImage={starImage} />
          <div className="flex flex-col mt-3 w-full text-zinc-800">
            <div className="text-xl font-semibold">{authorName}</div>
            <div className="text-lg leading-loose">{company}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;