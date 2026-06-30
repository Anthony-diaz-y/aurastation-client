"use client";

import BottomNav from "@/src/shared/BottomNav";
import ShareByMeList from "../components/ShareByMeList";
import ShareDateModal from "../components/ShareDateModal";
import ShareHeader from "../components/ShareHeader";
import ShareLoadingOverlay from "../components/ShareLoadingOverlay";
import ShareReportModal from "../components/ShareReportModal";
import ShareSearchBar from "../components/ShareSearchBar";
import ShareTabs from "../components/ShareTabs";
import ShareUserList from "../components/ShareUserList";
import ShareWithMeList from "../components/ShareWithMeList";
import { useShareFlow } from "../hooks/useShareFlow";

export default function ShareContainer() {
  const flow = useShareFlow();

  return (
    <main className="h-dvh bg-[#0c5395] flex flex-col text-white overflow-hidden">
      <div className="mx-auto w-full max-w-lg flex flex-col h-full">
        <ShareHeader viewMode={flow.viewMode} />

        {flow.viewMode === "all" && (
          <ShareSearchBar
            value={flow.searchQuery}
            onChange={flow.setSearchQuery}
          />
        )}

        <ShareTabs active={flow.viewMode} onChange={flow.setViewMode} />

        <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-4 flex flex-col gap-3">
          {flow.viewMode === "all" && (
            <ShareUserList
              users={flow.filteredUsers}
              isLoading={flow.isLoadingUsers}
              searchQuery={flow.searchQuery}
              onShare={flow.selectUserToShare}
            />
          )}

          {flow.viewMode === "by-me" && (
            <ShareByMeList
              items={flow.sharedByMe}
              isLoading={flow.isLoadingList}
              onDelete={flow.deleteShare}
            />
          )}

          {flow.viewMode === "with-me" && (
            <ShareWithMeList
              items={flow.sharedWithMe}
              isLoading={flow.isLoadingList}
              onViewDetail={flow.openReportDetail}
            />
          )}
        </div>

        <BottomNav />
      </div>

      {flow.selectedUserToShare && (
        <ShareDateModal
          recipient={flow.selectedUserToShare}
          shareDate={flow.shareDate}
          selectedLogId={flow.selectedLogId}
          isSubmitting={flow.isSubmittingShare}
          daysWithMeasurements={flow.daysWithMeasurements}
          calendarYear={flow.calendarYear}
          calendarMonth={flow.calendarMonth}
          onPrevMonth={flow.prevMonth}
          onNextMonth={flow.nextMonth}
          onSelectDate={flow.selectDate}
          onSelectLog={flow.selectLog}
          onCancel={flow.cancelShare}
          onSubmit={flow.submitShare}
        />
      )}

      {flow.activeSharedLog && flow.activeSharedUser && (
        <ShareReportModal
          sharedLog={flow.activeSharedLog}
          user={flow.activeSharedUser}
          onClose={flow.closeReportDetail}
        />
      )}

      <ShareLoadingOverlay visible={flow.isLoadingDetail} />
    </main>
  );
}
