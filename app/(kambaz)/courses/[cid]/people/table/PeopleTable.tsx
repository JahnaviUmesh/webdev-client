"use client";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import * as client from "../../../../account/client";

const emptyUser = {
  _id: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};

export default function PeopleTable({ cid }: { cid: string }) {
  const [users, setUsers] = useState<any[]>([]);
  const [user, setUser] = useState<any>(emptyUser);

  const fetchUsers = async () => {
    const enrolled = await client.findUsersForCourse(cid);
    setUsers(enrolled);
  };
  const addUser = async () => {
    const newUser = await client.createUser(user);
    await client.enrollUserInCourse(newUser._id, cid);
    await fetchUsers();
    setUser(emptyUser);
  };
  const saveUser = async () => {
    await client.updateUser(user);
    await fetchUsers();
    setUser(emptyUser);
  };
  const removeUser = async (userId: string) => {
    await client.deleteUser(userId);
    await fetchUsers();
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input value={user.firstName} id="wd-user-first-name" className="rounded border border-neutral-300 px-3 py-1.5"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
        <input value={user.lastName} id="wd-user-last-name" className="rounded border border-neutral-300 px-3 py-1.5"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
        <button id="wd-add-user-click" type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" onClick={addUser}>Add</button>
        <button id="wd-update-user-click" type="button" className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium" onClick={saveUser}>Update</button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr) => (
            <tr key={usr._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{usr.firstName}</span>{" "}
                <span className="wd-last-name">{usr.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{usr.loginId}</td>
              <td className="wd-section p-2">{usr.section}</td>
              <td className="wd-role p-2">{usr.role}</td>
              <td className="wd-last-activity p-2">{usr.lastActivity}</td>
              <td className="wd-total-activity p-2">{usr.totalActivity}</td>
              <td className="p-2 text-nowrap">
                <button type="button" className="rounded bg-yellow-400 px-2 py-1 text-xs font-medium" onClick={() => setUser(usr)}>Edit</button>
                <button type="button" className="ms-2 rounded bg-red-600 px-2 py-1 text-xs font-medium text-white" onClick={() => removeUser(usr._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}