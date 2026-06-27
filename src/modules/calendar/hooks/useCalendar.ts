import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  type CalendarLog,
  type SaveLogPayload,
} from "../interfaces/calendar.interfaces";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

export function useCalendar() {
  const queryClient = useQueryClient();

  const {
    data: logs = [],
    isLoading,
    error,
  } = useQuery<CalendarLog[]>({
    queryKey: ["calendar-logs"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}calendar`, {
        withCredentials: true,
      });
      return response.data;
    },
  });

  const saveLogMutation = useMutation({
    mutationFn: async (payload: SaveLogPayload) => {
      const response = await axios.post(`${API_URL}calendar`, payload, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calendar-logs"] });
    },
  });

  return {
    logs,
    isLoading,
    error,
    saveLog: saveLogMutation.mutate,
    isSaving: saveLogMutation.isPending,
  };
}
