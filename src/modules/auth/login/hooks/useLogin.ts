"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginService } from "../services/login.service";
import { toast } from "sonner";

export function useLogin() {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: loginService.login,

    onSuccess: (data) => {
      if (data.accessToken) {
        localStorage.setItem("access_token", data.accessToken);
      }
      if (data.user?.avatarId) {
        localStorage.setItem("user_avatar_id", data.user.avatarId);
      }
      toast.success("¡Bienvenido! Inicio de sesión exitoso");
      router.push("/home");
    },

    onError: (error: Error) => {
      toast.error(error.message || "Credenciales incorrectas");
    },
  });

  return {
    login: mutate,
    isPending,
  };
}
