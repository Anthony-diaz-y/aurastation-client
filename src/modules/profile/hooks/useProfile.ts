"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PROFILE_AVATARS } from "../constants/profile.const";
import { loginService } from "@/src/modules/auth/login/services/login.service";
import axios from "axios";
import { toast } from "sonner";

export type ViewType = "profile" | "avatar";

export interface ProfileField {
  avatarId: string;
  name: string;
  birthdate: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface UseProfileReturn {
  // Navigation
  view: ViewType;
  goToAvatarView: () => void;
  goToProfileView: () => void;
  handleBack: () => void;
  handleLogout: () => void;

  // Profile data
  fields: ProfileField;
  avatarComponent: () => React.ReactElement;
  avatars: typeof PROFILE_AVATARS;

  // Inline edit
  editingField: string | null;
  editValue: string;
  setEditValue: (v: string) => void;
  startEditing: (field: string, currentValue: string) => void;
  cancelEditing: () => void;
  saveField: (field: string, value: string) => void;

  // Temporary Avatar Selection (Aceptar/Volver flow)
  tempAvatarId: string;
  setTempAvatarId: (id: string) => void;
  tempAvatarComponent: () => React.ReactElement;
  handleConfirmAvatar: () => void;
}

export function useProfile(): UseProfileReturn {
  const router = useRouter();
  const [view, setView] = useState<ViewType>("profile");

  const [avatarId, setAvatarId] = useState("happy");
  const [tempAvatarId, setTempAvatarId] = useState("happy");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("••••••••");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API_URL}auth/me`, {
          withCredentials: true,
        });
        const user = response.data;
        if (user) {
          setAvatarId(user.avatarId || "happy");
          setTempAvatarId(user.avatarId || "happy");
          setName(user.name || "");
          setBirthdate(user.birthdate || "");
          setEmail(user.email || "");
          setPassword("••••••••");
          setAddress(user.address || "");
          setPhone(user.phone || "");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Error al cargar los datos del perfil");
      }
    };

    fetchProfile();
  }, []);

  const saveField = async (field: string, value: string) => {
    try {
      const fieldMap: Record<string, string> = {
        avatar: 'avatarId',
        name: 'name',
        birthdate: 'birthdate',
        email: 'email',
        password: 'password',
        address: 'address',
        phone: 'phone',
      };
      const dbField = fieldMap[field] || field;

      await axios.patch(
        `${API_URL}users/me`,
        { [dbField]: value },
        { withCredentials: true }
      );

      switch (field) {
        case "avatar":
          setAvatarId(value);
          break;
        case "name":
          setName(value);
          break;
        case "birthdate":
          setBirthdate(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "password":
          setPassword("••••••••");
          break;
        case "address":
          setAddress(value);
          break;
        case "phone":
          setPhone(value);
          break;
      }
      toast.success("Perfil actualizado correctamente");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast.error(
        error.response?.data?.message || "Error al actualizar el perfil"
      );
    }
    setEditingField(null);
  };

  const startEditing = (field: string, currentValue: string) => {
    setEditingField(field);
    setEditValue(currentValue === "••••••••" ? "" : currentValue);
  };

  const cancelEditing = () => setEditingField(null);

  const currentAvatar =
    PROFILE_AVATARS.find((a) => a.id === avatarId) || PROFILE_AVATARS[2];
  const avatarComponent = currentAvatar.component;

  const tempAvatar =
    PROFILE_AVATARS.find((a) => a.id === tempAvatarId) || PROFILE_AVATARS[2];
  const tempAvatarComponent = tempAvatar.component;

  const handleConfirmAvatar = () => {
    saveField("avatar", tempAvatarId);
    setView("profile");
  };

  return {
    view,
    goToAvatarView: () => {
      setTempAvatarId(avatarId);
      setView("avatar");
    },
    goToProfileView: () => setView("profile"),
    handleBack: () =>
      view === "avatar" ? setView("profile") : router.push("/home"),
    handleLogout: async () => {
      try {
        await loginService.logout();
      } catch (err) {
        console.error("Error during logout:", err);
      } finally {
        window.location.href = "/auth/login";
      }
    },

    fields: { avatarId, name, birthdate, email, password, address, phone },
    avatarComponent,
    avatars: PROFILE_AVATARS,

    editingField,
    editValue,
    setEditValue,
    startEditing,
    cancelEditing,
    saveField,

    // Temp Avatar fields
    tempAvatarId,
    setTempAvatarId,
    tempAvatarComponent,
    handleConfirmAvatar,
  };
}
