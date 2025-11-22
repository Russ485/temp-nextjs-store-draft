"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { actionFunction } from "@/utils/types";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
};

export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
      if (state.message) router.refresh();
      //to achieve toaster on client, because revalidatePath cause rerender before recieve response from useFormStatus and toaster is not visible
    }
  }, [state, toast, router]);

  return <form action={formAction}>{children}</form>;
}
