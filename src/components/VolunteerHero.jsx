import * as React from "react";

function VolunteerHero() {
  return (
    <div className="flex flex-wrap gap-11 justify-center items-center px-6 py-11 font-semibold bg-white text-zinc-800 max-md:px-5">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 max-w-[620px] min-w-[320px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-xl max-md:max-w-full">
            Volunteer | To preserve
          </div>
          <div className="mt-6 text-7xl max-md:max-w-full max-md:text-4xl">
            A step to protect.
          </div>
          <div className="mt-6 text-lg leading-loose max-md:max-w-full">
            Take a step ahead to serve the community that engulfs you.
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f58bcf1376a7c95c86710eeb9eb6dfa0b70c9a863a5dea0e3cc1184dfbb494f?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce"
        alt="Volunteer community service illustration"
        className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.33] basis-0 max-w-[480px] min-w-[320px] rounded-[137px] max-md:max-w-full"
      />
    </div>
  );
}

export default VolunteerHero;