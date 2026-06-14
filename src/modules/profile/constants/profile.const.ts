import { FieldDef } from "../interfaces/profile.interfaces";
import { annoyedFaceSvg } from "@/public/svgs/profiles/annoyed_face";
import { concernedFaceSvg } from "@/public/svgs/profiles/concerned_face";
import { happyFaceSvg } from "@/public/svgs/profiles/happy_face";
import { angryFaceSvg } from "@/public/svgs/profiles/angry_face";
import { cheekyFaceSvg } from "@/public/svgs/profiles/cheeky_face";
import { deadFaceSvg } from "@/public/svgs/profiles/dead_face";
import { uncertainFaceSvg } from "@/public/svgs/profiles/uncertain_face";
import { seriousFaceSvg } from "@/public/svgs/profiles/serious_face";
import { pleadingFaceSvg } from "@/public/svgs/profiles/pleading_face";
import { surpriseFaceSvg } from "@/public/svgs/profiles/surprise_face";
import { joyfulFaceSvg } from "@/public/svgs/profiles/joyful_face";
import { silentFaceSvg } from "@/public/svgs/profiles/silent_face";

export const FIELD_DEFS: FieldDef[] = [
  { key: "name", label: "Nombre", type: "text" },
  { key: "birthdate", label: "Fecha de nacimiento", type: "text" },
  {
    key: "email",
    label: "Correo electrónico",
    type: "email",
    extraClass: "break-all",
  },
  {
    key: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "Nueva contraseña",
  },
  { key: "address", label: "Dirección", type: "text" },
  { key: "phone", label: "Teléfono", type: "text" },
];

export const PROFILE_AVATARS = [
  { id: "annoyed", component: annoyedFaceSvg },
  { id: "concerned", component: concernedFaceSvg },
  { id: "happy", component: happyFaceSvg },
  { id: "angry", component: angryFaceSvg },
  { id: "cheeky", component: cheekyFaceSvg },
  { id: "dead", component: deadFaceSvg },
  { id: "uncertain", component: uncertainFaceSvg },
  { id: "serious", component: seriousFaceSvg },
  { id: "pleading", component: pleadingFaceSvg },
  { id: "surprise", component: surpriseFaceSvg },
  { id: "joyful", component: joyfulFaceSvg },
  { id: "silent", component: silentFaceSvg },
];
