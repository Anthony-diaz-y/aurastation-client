import { useRef, useState } from "react";
import { toast } from "sonner";
import {
  type CalendarLog,
  type SaveLogPayload,
  type SelectedDay,
} from "../interfaces/calendar.interfaces";
import {
  formatDateStr,
  getLogsForDate,
  getNavLogsForDay,
} from "../utils/calendarUtils";

interface UseDayDetailParams {
  logs: CalendarLog[];
  saveLog: (payload: SaveLogPayload) => void;
}

export function useDayDetail({ logs, saveLog }: UseDayDetailParams) {
  const [selectedDay, setSelectedDay] = useState<SelectedDay | null>(null);
  const [noteText, setNoteText] = useState("");
  const [activeLogIdx, setActiveLogIdx] = useState(0);
  const lastSavedNoteRef = useRef("");

  const selectedDateStr = selectedDay
    ? formatDateStr(selectedDay.year, selectedDay.monthIndex, selectedDay.day)
    : "";

  const allDayLogs = selectedDateStr ? getLogsForDate(logs, selectedDateStr) : [];
  const navLogs = getNavLogsForDay(allDayLogs);
  const dayLog = navLogs[activeLogIdx];

  const handleSelectDay = (day: number, year: number, monthIndex: number) => {
    const dateStr = formatDateStr(year, monthIndex, day);
    const dayLogs = getLogsForDate(logs, dateStr);
    const effectiveLogs = getNavLogsForDay(dayLogs);
    const defaultIdx = effectiveLogs.length > 0 ? effectiveLogs.length - 1 : 0;

    setSelectedDay({ day, monthIndex, year });
    setActiveLogIdx(defaultIdx);

    const initialNote = effectiveLogs[defaultIdx]?.note || "";
    setNoteText(initialNote);
    lastSavedNoteRef.current = initialNote;
  };

  const handleSelectLog = (idx: number) => {
    setActiveLogIdx(idx);
    const selectedNote = navLogs[idx]?.note || "";
    setNoteText(selectedNote);
    lastSavedNoteRef.current = selectedNote;
  };

  const handleSaveNote = () => {
    if (!selectedDay) return;

    const currentNote = noteText.trim();
    const lastSaved = lastSavedNoteRef.current.trim();

    if (currentNote === lastSaved) return;

    lastSavedNoteRef.current = noteText;

    saveLog({
      id: dayLog?.id,
      date: selectedDateStr,
      note: noteText,
    });
    toast.success("Nota guardada correctamente");
  };

  const clearSelection = () => setSelectedDay(null);

  return {
    selectedDay,
    noteText,
    setNoteText,
    activeLogIdx,
    navLogs,
    dayLog,
    handleSelectDay,
    handleSelectLog,
    handleSaveNote,
    clearSelection,
  };
}
