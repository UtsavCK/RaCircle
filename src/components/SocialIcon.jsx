import * as React from "react";

export default function SocialIcon({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 w-9 aspect-square"
    />
  );
}

