import { VIEW_MODE_TITLES } from "../constants/share.constants";
import type { ShareHeaderProps } from "../interfaces/share.interfaces";

export default function ShareHeader({ viewMode }: ShareHeaderProps) {
  const title = VIEW_MODE_TITLES[viewMode] ?? VIEW_MODE_TITLES.all;

  return (
    <div className="text-center pt-7 pb-3 px-5 shrink-0">
      <h1 className="text-2xl font-black tracking-wide uppercase drop-shadow-md">
        {title}
      </h1>
      <div className="mt-1.5 mx-auto h-1 w-12 rounded-full bg-white/30" />
    </div>
  );
}