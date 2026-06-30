export type ViewMode = "all" | "by-me" | "with-me";

export interface SearchUserResult {
  id: number;
  name: string;
  email: string;
  avatarId: string;
}

export interface SharedMeasurementInfo {
  bpm: number;
  registrationTime: string;
  stressLevel?: string;
}

export interface SharedItem {
  id: number;
  sharedDate: string;
  logId?: number | null;
  measurementInfo?: SharedMeasurementInfo | null;
  createdAt: string;
  user: SearchUserResult;
}

export interface SharedDetailLog {
  id: number;
  date: string;
  bpm: number | null;
  stressLevel?: string;
  registrationTime?: string;
  note?: string;
}

export interface SharedLogDetailResponse {
  sharedDate: string;
  logs: SharedDetailLog[];
}

export interface DayMeasurement {
  id: number;
  bpm: number;
  registrationTime: string;
  stressLevel?: string;
}

export type DaysWithMeasurements = Record<string, DayMeasurement[]>;

export interface CalendarDayCell {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

export interface UserAvatarProps {
  avatarId: string;
  className?: string;
}

export interface ShareHeaderProps {
  viewMode: ViewMode;
}

export interface ShareSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export interface ShareTabsProps {
  active: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export interface ShareUserListProps {
  users: SearchUserResult[];
  isLoading: boolean;
  searchQuery: string;
  onShare: (user: SearchUserResult) => void;
}

export interface ShareByMeListProps {
  items: SharedItem[];
  isLoading: boolean;
  onDelete: (id: number, name: string) => void;
}

export interface ShareWithMeListProps {
  items: SharedItem[];
  isLoading: boolean;
  onViewDetail: (relId: number, sender: SearchUserResult) => void;
}

export interface ShareCalendarProps {
  calendarYear: number;
  calendarMonth: number;
  shareDate: string;
  daysWithMeasurements: DaysWithMeasurements;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onSelectDate: (dateStr: string) => void;
}

export interface ShareLogPickerProps {
  shareDate: string;
  measurements: DayMeasurement[];
  selectedLogId: number | null;
  onSelectLog: (id: number | null) => void;
}

export interface ShareDateModalProps {
  recipient: SearchUserResult;
  shareDate: string;
  selectedLogId: number | null;
  isSubmitting: boolean;
  daysWithMeasurements: DaysWithMeasurements;
  calendarYear: number;
  calendarMonth: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onSelectDate: (dateStr: string) => void;
  onSelectLog: (id: number | null) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

export interface ShareReportModalProps {
  sharedLog: SharedLogDetailResponse;
  user: SearchUserResult;
  onClose: () => void;
}

export interface ShareLoadingOverlayProps {
  visible: boolean;
}