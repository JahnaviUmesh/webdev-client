import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        defaultValue="alice"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        type="password"
        defaultValue="123"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        defaultValue="Alice"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        defaultValue="Wonderland"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        type="date"
        defaultValue="2000-01-01"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        type="email"
        defaultValue="alice@wonderland.com"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <select
        defaultValue="FACULTY"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        href="/account/signin"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}