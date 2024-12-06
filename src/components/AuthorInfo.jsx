import * as React from "react";

function AuthorInfo({ image, name }) {
  return (
    <img
      loading="lazy"
      src={image}
      className="object-contain shrink-0 rounded-full aspect-square w-[50px]"
      alt={`Profile picture of ${name}`}
    />
  );
}

export default AuthorInfo;