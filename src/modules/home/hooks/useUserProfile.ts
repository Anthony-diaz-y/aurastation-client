import { useEffect, useState } from "react";
import axios from "axios";
import { USER_AVATAR_STORAGE_KEY } from "../constants/home.constants";
import { type UserProfile } from "../interfaces/home.interfaces";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

function getInitialUser(): UserProfile | null {
  if (typeof window === "undefined") return null;

  const cachedAvatar = localStorage.getItem(USER_AVATAR_STORAGE_KEY);
  if (cachedAvatar) {
    return { avatarId: cachedAvatar };
  }

  return null;
}

export function useUserProfile() {
  const [user, setUser] = useState<UserProfile | null>(getInitialUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}auth/me`);
        if (response.data) {
          setUser(response.data);
          if (response.data.avatarId) {
            localStorage.setItem(USER_AVATAR_STORAGE_KEY, response.data.avatarId);
          }
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUser();
  }, []);

  return { user };
}
