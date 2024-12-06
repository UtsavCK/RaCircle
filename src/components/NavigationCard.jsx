import React from 'react';

const NavigationCard = ({ imageSrc, title, description, onClick }) => {
  return (
    <article 
      className="flex flex-col flex-1 shrink justify-center px-11 py-16 bg-white basis-0 min-w-[320px] max-md:px-5"
      role="region"
      aria-labelledby={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div 
        className="cursor-pointer flex flex-col items-center" 
        onClick={onClick} 
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        role="button" 
        tabIndex={0}
        aria-label={`Navigate to ${title}`}
      >
        <img
          loading="lazy"
          src={imageSrc}
          alt={`Icon for ${title}`}
          className="object-contain overflow-hidden max-w-full aspect-square w-[124px]"
          width="124"
          height="124"
        />
        <div className="flex flex-col items-center mt-11 w-full max-md:mt-10">
          <h2 
            id={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-3xl font-semibold leading-loose text-center"
          >
            {title}
          </h2>
          <p className="mt-3 text-lg leading-7 text-center">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default NavigationCard;