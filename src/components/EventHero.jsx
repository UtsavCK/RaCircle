import * as React from "react";
import img01 from "/nyatapola.jpg";

function EventHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${img01})`,
          backgroundAttachment: "fixed", // Keeps the background fixed
          backgroundSize: "cover", // Ensures the image covers the entire screen
          backgroundPosition: "center", // Keeps the image centered
          height: "100vh", // Ensures the section takes up full screen height
        }}
      />

      {/* Full Screen Text and Content */}
      <div className="relative z-10 flex flex-wrap gap-11 justify-center items-center px-6 py-20 font-semibold text-white max-md:px-5 h-screen">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 max-w-[620px] min-w-[320px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-xl max-md:max-w-full">
              Volunteer Events
            </div>
            <div className="mt-6 text-7xl max-md:max-w-full max-md:text-4xl">
              A step to protect.
            </div>
            <div className="mt-6 text-lg leading-loose max-md:max-w-full">
              Take a step ahead to serve the community that engulfs you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHero;
