import { useCallback, useState } from "react";
import { useShareData } from "./useShareData";
import { useShareMutations } from "./useShareMutations";
import { useShareSearch } from "./useShareSearch";
import type {
  SearchUserResult,
  SharedLogDetailResponse,
  ViewMode,
} from "../interfaces/share.interfaces";
import { shiftMonth } from "../utils/calendarUtils";

interface UseShareFlowResult {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  searchQuery: string;
  setSearchQuery: (value: string) => void;
  filteredUsers: SearchUserResult[];

  sharedByMe: ReturnType<typeof useShareData>["sharedByMe"];
  sharedWithMe: ReturnType<typeof useShareData>["sharedWithMe"];
  daysWithMeasurements: ReturnType<typeof useShareData>["daysWithMeasurements"];
  isLoadingUsers: boolean;
  isLoadingList: boolean;

  selectedUserToShare: SearchUserResult | null;
  shareDate: string;
  selectedLogId: number | null;
  calendarYear: number;
  calendarMonth: number;
  selectUserToShare: (user: SearchUserResult) => void;
  selectDate: (dateStr: string) => void;
  selectLog: (id: number | null) => void;
  cancelShare: () => void;
  submitShare: () => Promise<void>;
  prevMonth: () => void;
  nextMonth: () => void;
  isSubmittingShare: boolean;

  activeSharedLog: SharedLogDetailResponse | null;
  activeSharedUser: SearchUserResult | null;
  openReportDetail: (
    relId: number,
    sender: SearchUserResult,
  ) => Promise<void>;
  closeReportDetail: () => void;
  isLoadingDetail: boolean;

  deleteShare: (id: number, name: string) => Promise<void>;
}

export function useShareFlow(): UseShareFlowResult {
  const [viewMode, setViewMode] = useState<ViewMode>("all");

  const [selectedUserToShare, setSelectedUserToShare] =
    useState<SearchUserResult | null>(null);
  const [shareDate, setShareDate] = useState("");
  const [selectedLogId, setSelectedLogId] = useState<number | null>(null);
  const [calendarYear, setCalendarYear] = useState<number>(() =>
    new Date().getFullYear(),
  );
  const [calendarMonth, setCalendarMonth] = useState<number>(() =>
    new Date().getMonth(),
  );

  const [activeSharedLog, setActiveSharedLog] =
    useState<SharedLogDetailResponse | null>(null);
  const [activeSharedUser, setActiveSharedUser] =
    useState<SearchUserResult | null>(null);

  const {
    allUsers,
    sharedByMe,
    sharedWithMe,
    daysWithMeasurements,
    isLoadingUsers,
    isLoadingList,
    loadLists,
  } = useShareData();

  const { query, setQuery, filteredUsers, clear } = useShareSearch(allUsers);

  const {
    isSubmittingShare,
    isLoadingDetail,
    createShare,
    deleteShare: deleteShareRequest,
    fetchSharedLogDetail,
  } = useShareMutations({
    onShareSuccess: () => {
      setSelectedUserToShare(null);
      setShareDate("");
      setSelectedLogId(null);
      clear();
      loadLists();
    },
    onDeleteSuccess: () => {
      loadLists();
    },
  });

  const prevMonth = useCallback(() => {
    setCalendarYear((prevYear) => {
      const next = shiftMonth(prevYear, calendarMonth, -1);
      if (next.year !== prevYear) return next.year;
      setCalendarMonth(next.month);
      return prevYear;
    });
  }, [calendarMonth]);

  const nextMonth = useCallback(() => {
    setCalendarYear((prevYear) => {
      const next = shiftMonth(prevYear, calendarMonth, 1);
      if (next.year !== prevYear) return next.year;
      setCalendarMonth(next.month);
      return prevYear;
    });
  }, [calendarMonth]);

  const selectDate = useCallback((dateStr: string) => {
    setShareDate(dateStr);
    setSelectedLogId(null);
  }, []);

  const cancelShare = useCallback(() => {
    setSelectedUserToShare(null);
    setShareDate("");
    setSelectedLogId(null);
  }, []);

  const submitShare = useCallback(async () => {
    if (!selectedUserToShare) return;
    await createShare({
      recipient: selectedUserToShare,
      shareDate,
      logId: selectedLogId,
    });
  }, [selectedUserToShare, shareDate, selectedLogId, createShare]);

  const selectUserToShare = useCallback((user: SearchUserResult) => {
    setSelectedUserToShare(user);
  }, []);

  const deleteShare = useCallback(
    async (id: number, name: string) => {
      await deleteShareRequest(id, name);
    },
    [deleteShareRequest],
  );

  const openReportDetail = useCallback(
    async (relId: number, sender: SearchUserResult) => {
      const result = await fetchSharedLogDetail(relId, sender);
      if (result) {
        setActiveSharedLog(result.log);
        setActiveSharedUser(result.user);
      }
    },
    [fetchSharedLogDetail],
  );

  const closeReportDetail = useCallback(() => {
    setActiveSharedLog(null);
    setActiveSharedUser(null);
  }, []);

  return {
    viewMode,
    setViewMode,
    searchQuery: query,
    setSearchQuery: setQuery,
    filteredUsers,
    sharedByMe,
    sharedWithMe,
    daysWithMeasurements,
    isLoadingUsers,
    isLoadingList,
    selectedUserToShare,
    shareDate,
    selectedLogId,
    calendarYear,
    calendarMonth,
    selectUserToShare,
    selectDate,
    selectLog: setSelectedLogId,
    cancelShare,
    submitShare,
    prevMonth,
    nextMonth,
    isSubmittingShare,
    activeSharedLog,
    activeSharedUser,
    openReportDetail,
    closeReportDetail,
    isLoadingDetail,
    deleteShare,
  };
}