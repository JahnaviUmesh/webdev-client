import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormPage() {
  return (
    <div id="wd-profile-form-page" className="flex flex-col gap-8 p-4">
      <h2>Profile Forms</h2>
      <ProfileForm />
      <ContextProfileForm />
      <ZustandProfileForm />
    </div>
  );
}