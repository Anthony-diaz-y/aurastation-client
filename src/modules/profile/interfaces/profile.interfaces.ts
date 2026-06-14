import { ProfileField } from "../hooks/useProfile";

export type FieldDef = {
  key: keyof Omit<ProfileField, "avatarId">;
  label: string;
  type: string;
  placeholder?: string;
  extraClass?: string;
};

