"use client";

import BottomNav from "@/src/shared/BottomNav";
import CalendarGrid from "../components/CalendarGrid";
import CalendarHeader from "../components/CalendarHeader";
import CalendarLoading from "../components/CalendarLoading";
import CalendarMonthNavigator from "../components/CalendarMonthNavigator";
import CalendarPicker from "../components/CalendarPicker";
import DayDetailView from "../components/DayDetailView";
import { useCalendar } from "../hooks/useCalendar";
import { useCalendarNavigation } from "../hooks/useCalendarNavigation";
import { useDayDetail } from "../hooks/useDayDetail";

export default function CalendarContainer() {
  const { logs, isLoading, saveLog } = useCalendar();
  const navigation = useCalendarNavigation();
  const dayDetail = useDayDetail({ logs, saveLog });

  if (isLoading) {
    return <CalendarLoading />;
  }

  if (dayDetail.selectedDay) {
    return (
      <DayDetailView
        selectedDay={dayDetail.selectedDay}
        navLogs={dayDetail.navLogs}
        activeLogIdx={dayDetail.activeLogIdx}
        dayLog={dayDetail.dayLog}
        noteText={dayDetail.noteText}
        onNoteChange={dayDetail.setNoteText}
        onSelectLog={dayDetail.handleSelectLog}
        onSaveNote={dayDetail.handleSaveNote}
        onBack={dayDetail.clearSelection}
      />
    );
  }

  return (
    <main className="min-h-dvh bg-[#0c5395] flex flex-col">
      <div className="mx-auto w-full max-w-lg flex flex-col min-h-dvh relative overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center px-5 pb-24 pt-2">
          <CalendarHeader />

          <CalendarMonthNavigator
            monthIndex={navigation.monthIndex}
            year={navigation.year}
            pickerView={navigation.pickerView}
            onNavigate={navigation.navigate}
            onTogglePicker={navigation.togglePicker}
          />

          {navigation.pickerView !== "none" && (
            <CalendarPicker
              pickerView={navigation.pickerView}
              monthIndex={navigation.monthIndex}
              year={navigation.year}
              onPickMonth={navigation.handlePickMonth}
              onPickYear={navigation.handlePickYear}
            />
          )}

          {navigation.pickerView === "none" && (
            <CalendarGrid
              year={navigation.year}
              monthIndex={navigation.monthIndex}
              days={navigation.days}
              animClass={navigation.animClass}
              logs={logs}
              onSelectDay={(day) =>
                dayDetail.handleSelectDay(
                  day,
                  navigation.year,
                  navigation.monthIndex,
                )
              }
            />
          )}
        </div>

        <BottomNav />
      </div>
    </main>
  );
}
