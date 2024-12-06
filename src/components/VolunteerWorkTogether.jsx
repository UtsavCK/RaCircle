import * as React from "react";
import VolunteerSocialIcon from "./VolunteerSocialIcon";
import VolunteerContactForm from "./VolunteerContactForm";

export default function WorkTogether() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b10dcb48e9146d896dc462ff71727f3ae14118a045a83a4347166113ffe03ad?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce", alt: "Social media icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/104ad65626b37e665e12b66532aff5ea6b851187729a5769907f28985718c2fd?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce", alt: "Social media icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ec12eeecbe23c0894aa5f47b5d8cf292417be9542a3a4a1a2b9aeead30a99cb?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce", alt: "Social media icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b2404683cc53d00e2348ff9415a5f0040c11995d43ec806fc5190a44c184065?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce", alt: "Social media icon 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed87f68bf4dd925518b255b20efc9e5ff758462311b62788679e674afb05be4d?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce", alt: "Social media icon 5" }
  ];

  return (
    <main className="flex flex-col px-6 pt-11 pb-20 bg-black max-md:px-5">
      <h1 className="text-3xl font-semibold leading-none text-white max-md:max-w-full">
        Lets work together
      </h1>
      <div className="flex flex-wrap gap-11 items-start mt-6 w-full max-md:max-w-full">
        <section className="flex flex-col flex-1 shrink basis-0 min-w-[320px] max-md:max-w-full">
          <p className="w-full text-lg leading-7 text-white max-md:max-w-full">
            To serve the community the community itself should also work
            together and its a neccesity as community can only be saved by
            community.
          </p>
          <div className="flex flex-wrap gap-6 items-start mt-11 w-full max-md:mt-10 max-md:max-w-full">
            {socialIcons.map((icon, index) => (
              <VolunteerSocialIcon
                key={index}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </section>
        <VolunteerContactForm />
      </div>
    </main>
  );
}