'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const PUBLIC_ROUTES = ['/', '/auth/login', '/auth/register'];

if (typeof window !== "undefined") {
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("access_token");
      const isPublic = PUBLIC_ROUTES.includes(pathname);

      if (!token && !isPublic) {
        setAuthorized(false);
        router.push("/auth/login");
      } else if (token && isPublic) {
        setAuthorized(false);
        router.push("/home");
      } else {
        setAuthorized(true);
      }
    };

    checkAuth();
  }, [pathname, router]);

  const isPublic = PUBLIC_ROUTES.includes(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      {!authorized && !isPublic ? (
        <div className="min-h-screen flex items-center justify-center bg-[#0f2d6e]">
          <div className="w-8 h-8 border-4 border-[#5ecfea]/30 border-t-[#5ecfea] rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </QueryClientProvider>
  );
}
