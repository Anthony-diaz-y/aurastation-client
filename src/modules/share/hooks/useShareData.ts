import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  SHARE_DAYS_MEASUREMENTS_ENDPOINT,
  SHARE_LIST_BY_ME_ENDPOINT,
  SHARE_LIST_WITH_ME_ENDPOINT,
  SHARE_USERS_ENDPOINT,
} from "../constants/share.constants";
import type {
  DaysWithMeasurements,
  SearchUserResult,
  SharedItem,
} from "../interfaces/share.interfaces";

interface ShareDataState {
  allUsers: SearchUserResult[];
  sharedByMe: SharedItem[];
  sharedWithMe: SharedItem[];
  daysWithMeasurements: DaysWithMeasurements;
  isLoadingUsers: boolean;
  isLoadingList: boolean;
}

export function useShareData() {
  const [state, setState] = useState<ShareDataState>({
    allUsers: [],
    sharedByMe: [],
    sharedWithMe: [],
    daysWithMeasurements: {},
    isLoadingUsers: false,
    isLoadingList: true,
  });

  const loadAllUsers = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, isLoadingUsers: true }));
      const res = await axios.get(`${SHARE_USERS_ENDPOINT}?q=`, {
        withCredentials: true,
      });
      setState((prev) => ({ ...prev, allUsers: res.data }));
    } catch (error) {
      console.error("Error loading users:", error);
    } finally {
      setState((prev) => ({ ...prev, isLoadingUsers: false }));
    }
  }, []);

  const loadLists = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, isLoadingList: true }));
      const [byMeRes, withMeRes] = await Promise.all([
        axios.get(SHARE_LIST_BY_ME_ENDPOINT, { withCredentials: true }),
        axios.get(SHARE_LIST_WITH_ME_ENDPOINT, { withCredentials: true }),
      ]);
      setState((prev) => ({
        ...prev,
        sharedByMe: byMeRes.data,
        sharedWithMe: withMeRes.data,
      }));
    } catch (error) {
      console.error("Error loading share lists:", error);
      toast.error("Error al cargar las relaciones de compartir");
    } finally {
      setState((prev) => ({ ...prev, isLoadingList: false }));
    }
  }, []);

  const loadDaysWithMeasurements = useCallback(async () => {
    try {
      const res = await axios.get(SHARE_DAYS_MEASUREMENTS_ENDPOINT, {
        withCredentials: true,
      });
      setState((prev) => ({ ...prev, daysWithMeasurements: res.data }));
    } catch (error) {
      console.error("Error loading days with measurements:", error);
    }
  }, []);

  useEffect(() => {
    let active = true;
    const fetchInitial = async () => {
      if (!active) return;
      await Promise.all([loadAllUsers(), loadLists(), loadDaysWithMeasurements()]);
    };
    void fetchInitial();
    return () => {
      active = false;
    };
  }, [loadAllUsers, loadLists, loadDaysWithMeasurements]);

  return {
    allUsers: state.allUsers,
    sharedByMe: state.sharedByMe,
    sharedWithMe: state.sharedWithMe,
    daysWithMeasurements: state.daysWithMeasurements,
    isLoadingUsers: state.isLoadingUsers,
    isLoadingList: state.isLoadingList,
    loadLists,
    loadDaysWithMeasurements,
  };
}