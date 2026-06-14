"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { registerService } from "../services/register.service";
import { toast } from "sonner";

export function useRegister() {
  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: registerService.register,

    onSuccess: (data) => {
      toast.success("¡Cuenta creada exitosamente!");
      router.push("/auth/login");
    },

    onError: (error: any) => {
      toast.error(error.message || "Error al registrarse");
    },
  });

  return {
    register: mutate,
    isPending,
    error,
  };
}
