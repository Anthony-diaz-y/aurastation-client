"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PROFILE_AVATARS } from "../constants/profile.const";

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
}

export function useProfile(): UseProfileReturn {
  const router = useRouter();
  const [view, setView] = useState<ViewType>("profile");

  const [avatarId, setAvatarId] = useState("happy");
  const [name, setName] = useState("Juan Pérez");
  const [birthdate, setBirthdate] = useState("15/08/1995");
  const [email, setEmail] = useState("juan.perez@email.com");
  const [password, setPassword] = useState("••••••••");
  const [address, setAddress] = useState("Av. Larco 123, Lima");
  const [phone, setPhone] = useState("+51 987 654 321");

  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setAvatarId(localStorage.getItem("aurastation_profile_avatar") || "happy");
    setName(localStorage.getItem("aurastation_profile_name") || "Juan Pérez");
    setBirthdate(
      localStorage.getItem("aurastation_profile_birthdate") || "15/08/1995",
    );
    setEmail(
      localStorage.getItem("aurastation_profile_email") ||
        "juan.perez@email.com",
    );
    setPassword(
      localStorage.getItem("aurastation_profile_password") || "••••••••",
    );
    setAddress(
      localStorage.getItem("aurastation_profile_address") ||
        "Av. Larco 123, Lima",
    );
    setPhone(
      localStorage.getItem("aurastation_profile_phone") || "+51 987 654 321",
    );
  }, []);

  const saveField = (field: string, value: string) => {
    localStorage.setItem(`aurastation_profile_${field}`, value);
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
        setPassword(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
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

  return {
    view,
    goToAvatarView: () => setView("avatar"),
    goToProfileView: () => setView("profile"),
    handleBack: () =>
      view === "avatar" ? setView("profile") : router.push("/home"),
    handleLogout: () => router.push("/auth/login"),

    fields: { avatarId, name, birthdate, email, password, address, phone },
    avatarComponent,
    avatars: PROFILE_AVATARS,

    editingField,
    editValue,
    setEditValue,
    startEditing,
    cancelEditing,
    saveField,
  };
}
