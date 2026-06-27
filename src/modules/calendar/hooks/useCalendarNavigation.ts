import { useRef, useState } from "react";
import { NAV_ANIMATION_MS } from "../constants/calendar.constants";
import { type PickerView } from "../interfaces/calendar.interfaces";
import { getMonthDays } from "../utils/calendarUtils";

export function useCalendarNavigation() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [monthIndex, setMonthIndex] = useState(now.getMonth());
  const [animClass, setAnimClass] = useState("");
  const [pickerView, setPickerView] = useState<PickerView>("none");

  const isAnimating = useRef(false);
  const days = getMonthDays(year, monthIndex);

  const navigate = (direction: "prev" | "next") => {
    if (isAnimating.current || pickerView !== "none") return;
    isAnimating.current = true;
    setAnimClass(
      direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left",
    );

    if (direction === "next") {
      if (monthIndex === 11) {
        setMonthIndex(0);
        setYear((y) => y + 1);
      } else {
        setMonthIndex((m) => m + 1);
      }
    } else if (monthIndex === 0) {
      setMonthIndex(11);
      setYear((y) => y - 1);
    } else {
      setMonthIndex((m) => m - 1);
    }

    setTimeout(() => {
      setAnimClass("");
      isAnimating.current = false;
    }, NAV_ANIMATION_MS);
  };

  const handlePickMonth = (month: number) => {
    setMonthIndex(month);
    setPickerView("none");
  };

  const handlePickYear = (selectedYear: number) => {
    setYear(selectedYear);
    setPickerView("none");
  };

  const togglePicker = (view: Exclude<PickerView, "none">) => {
    setPickerView((current) => (current === view ? "none" : view));
  };

  return {
    year,
    monthIndex,
    animClass,
    pickerView,
    days,
    navigate,
    handlePickMonth,
    handlePickYear,
    togglePicker,
  };
}
