import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import {
  SEARCH_DEBOUNCE_MS,
  SHARE_USERS_ENDPOINT,
} from "../constants/share.constants";
import type { SearchUserResult } from "../interfaces/share.interfaces";
import { filterUsersByQuery } from "../utils/calendarUtils";

export function useShareSearch(allUsers: SearchUserResult[]) {
  const [query, setQuery] = useState("");
  const [serverResults, setServerResults] = useState<SearchUserResult[] | null>(
    null,
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!query.trim()) {
      setServerResults(null);
      return;
    }

    const quick = filterUsersByQuery(allUsers, query);

    timerRef.current = setTimeout(async () => {
      try {
        const res = await axios.get(
          `${SHARE_USERS_ENDPOINT}?q=${encodeURIComponent(query)}`,
          { withCredentials: true },
        );
        setServerResults(res.data);
      } catch (error) {
        console.error("Error searching users:", error);
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query, allUsers]);

  const filteredUsers = useMemo<SearchUserResult[]>(() => {
    if (!query.trim()) return allUsers;
    return serverResults ?? filterUsersByQuery(allUsers, query);
  }, [allUsers, query, serverResults]);

  return {
    query,
    setQuery,
    filteredUsers,
    clear: () => setQuery(""),
  };
}