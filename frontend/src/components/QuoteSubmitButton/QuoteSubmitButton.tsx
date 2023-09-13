"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "../Button/Button";

export function QuoteSubmitButton(props: { ["data-testid"]: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} {...props}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
