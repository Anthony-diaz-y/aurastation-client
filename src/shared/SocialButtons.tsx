import { GoogleIcon } from "@/src/shared/icons/GoogleIcon";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";
const cleanApiUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;

export default function SocialButtons() {
  return (
    <div className="flex justify-center gap-3">
      <a
        href={`${cleanApiUrl}/auth/google`}
        aria-label="Iniciar sesión con Google"
        className="w-12 h-12 mb-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 active:scale-95 transition cursor-pointer"
      >
        <GoogleIcon />
      </a>
    </div>
  );
}
