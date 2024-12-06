import * as React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting:", { email, name });
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col flex-1 shrink whitespace-nowrap basis-0 max-w-[520px] min-w-[320px] max-md:max-w-full"
      role="form"
      aria-label="Contact form"
    >
      <div className="flex flex-col w-full text-lg leading-loose text-zinc-800 max-md:max-w-full">
        <label htmlFor="name" className="sr-only">Enter your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="flex overflow-hidden gap-2.5 items-start px-6 py-4 w-full bg-zinc-100 rounded-lg max-w-[520px] min-w-[320px] max-md:px-5 max-md:max-w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="email" className="sr-only">Enter your email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="flex overflow-hidden gap-2.5 items-start px-6 py-4 mt-3 w-full bg-zinc-100 rounded-lg max-w-[520px] min-w-[320px] max-md:px-5 max-md:max-w-full"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          aria-required="true"
        />
      </div>
      <button
        type="submit"
        className="gap-2.5 self-start px-16 py-6 mt-6 text-xl font-semibold text-center text-white bg-zinc-800 rounded-lg max-md:px-5"
        aria-label="Submit form"
      >
        Submit
      </button>
    </form>
  );
}
