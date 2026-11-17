"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";
export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);
  const updateProfile = async () => {
    const updated = await client.updateUser(profile);
    setCurrentUser(updated);
  };
  const signout = async () => {
    await client.signout();
    setCurrentUser(null);
    router.push("/account/signin");
  };
  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="flex flex-col gap-2 max-w-sm">
      <h3>Profile</h3>
      <input id="wd-username" className="rounded border border-neutral-300 px-3 py-1.5"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
      <input id="wd-password" type="password" className="rounded border border-neutral-300 px-3 py-1.5"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
      <input id="wd-firstname" className="rounded border border-neutral-300 px-3 py-1.5"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
      <input id="wd-lastname" className="rounded border border-neutral-300 px-3 py-1.5"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
      <input id="wd-email" type="email" className="rounded border border-neutral-300 px-3 py-1.5"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
      <select id="wd-role" className="rounded border border-neutral-300 px-3 py-1.5"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button type="button" onClick={updateProfile} id="wd-update-profile-btn"
        className="rounded bg-blue-600 px-4 py-1.5 text-white">
        Update
      </button>
      <button type="button" onClick={signout} id="wd-signout-btn"
        className="rounded bg-red-600 px-4 py-1.5 text-white">
        Sign out
      </button>
    </div>
  );
}