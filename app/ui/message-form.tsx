"use client";

import { useFormState, useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button className="transition py-2 px-4 bg-amber-900 hover:bg-amber-600">
      {pending ? "processing..." : "ok"}
    </button>
  );
}

export default function MessageForm() {
  return (
    <form action="" className="flex justify-center">
      <textarea
        className="focus:drop-shadow-form bg-stone-800 outline-2 focus:border-none focus:outline-orange-300 h-36 w-[70vw] max-w-[500px] p-4 text-neutral-200"
        name="message"
        id="message"
      ></textarea>
      <FormButton />
    </form>
  );
}
