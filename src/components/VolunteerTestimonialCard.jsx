import * as React from "react";

export default function VolunteerTestimonialCard({ authorImage, authorName, company, badge, quote }) {
    return (
      <div className="flex flex-col items-center justify-center text-center w-64 shrink-0 mx-4">
        {/* Profile Picture (Increased size) */}
        <img
          src={authorImage}
          alt={authorName}
          className="w-32 h-32 rounded-full border-2 border-gray-200 object-cover"
        />
        {/* Name */}
        <div className="mt-4 text-lg font-semibold text-zinc-800">{authorName}</div>
        {/* Badge (Rank in Volunteering) */}
        <div className="mt-2 px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
          {badge}
        </div>
        {/* Quote */}
        <div className="mt-3 text-sm italic text-zinc-500">{`"${quote}"`}</div>
        {/* Company */}
        <div className="mt-2 text-sm text-zinc-500">{company}</div>
      </div>
    );
  }
  