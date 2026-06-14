import { GoogleIcon } from "@/src/shared/icons/GoogleIcon";

export default function SocialButtons() {
  return (
    <div className="flex justify-center gap-3">
      <button
        type="button"
        aria-label="Google"
        className="w-12 h-12 mb-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 active:scale-95 transition cursor-pointer"
      >
        <GoogleIcon />
      </button>
    </div>
  );
}
