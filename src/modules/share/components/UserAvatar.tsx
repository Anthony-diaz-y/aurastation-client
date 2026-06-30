import {
  AVATAR_BG_COLORS,
  AVATAR_MAP,
  DEFAULT_AVATAR_BG,
  DEFAULT_AVATAR_RENDERER,
} from "../constants/share.constants";
import type { UserAvatarProps } from "../interfaces/share.interfaces";

export default function UserAvatar({
  avatarId,
  className = "w-12 h-12 rounded-xl",
}: UserAvatarProps) {
  const Renderer = AVATAR_MAP[avatarId] ?? DEFAULT_AVATAR_RENDERER;
  const bgClass = AVATAR_BG_COLORS[avatarId] ?? DEFAULT_AVATAR_BG;

  return (
    <div
      className={`${className} ${bgClass} p-1 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block`}
    >
      <Renderer />
    </div>
  );
}
