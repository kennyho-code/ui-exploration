"use client";

import { useActionState } from "react";

const p1 = new Promise((resolve) => {
  setTimeout(resolve, 1000);
});

function asyncAction(previousState, formData) {
  return previousState + 1;
  console.log("previousState:", previousState);
  console.log("formData:", formData);
}

function Page() {
  const [state, formAction, isPending] = useActionState(asyncAction, "idle");

  return (
    <div>
      <div>{isPending ? "loading" : state}</div>
      <form action={formAction}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Page;
