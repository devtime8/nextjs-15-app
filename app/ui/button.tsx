"use client";

import { useActionState } from "react";
import { createPost } from "../actions";

export function Button() {
  // const [state, action, pending] = useActionState(createPost, false);

  return <button formAction={createPost}>Create</button>;
}
