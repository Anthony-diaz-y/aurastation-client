'use client';

import { useProfile } from '../hooks/useProfile';
import ProfileView from '../components/ProfileView';
import AvatarSelectorView from '../components/AvatarSelectorView';

export default function ProfileContainer() {
  const profile = useProfile();

  return (
    <div className="min-h-dvh bg-[#0c5395] sm:flex sm:justify-center transition-colors duration-300">
      <main className="relative flex min-h-dvh w-full max-w-[420px] flex-col px-6 pt-12 pb-10 overflow-x-hidden text-white">

        {/* Back button */}
        <button
          onClick={profile.handleBack}
          className="animate-exercise-header mb-6 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Volver"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Volver
        </button>

        {profile.view === 'profile' ? (
          <ProfileView
            fields={profile.fields}
            avatarComponent={profile.avatarComponent}
            editingField={profile.editingField}
            editValue={profile.editValue}
            setEditValue={profile.setEditValue}
            startEditing={profile.startEditing}
            cancelEditing={profile.cancelEditing}
            saveField={profile.saveField}
            onEditAvatar={profile.goToAvatarView}
            onLogout={profile.handleLogout}
          />
        ) : (
          <AvatarSelectorView
            selectedAvatarId={profile.tempAvatarId}
            avatarComponent={profile.tempAvatarComponent}
            avatars={profile.avatars}
            onSelectAvatar={profile.setTempAvatarId}
            onConfirm={profile.handleConfirmAvatar}
          />
        )}
      </main>
    </div>
  );
}
