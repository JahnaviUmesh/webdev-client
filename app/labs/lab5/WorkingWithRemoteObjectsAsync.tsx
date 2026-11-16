"use client";
import { useState, useEffect } from "react";
import * as client from "./client";
export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<any>({});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input
        className="mb-2 block rounded border border-neutral-300 px-2 py-1"
        value={assignment.title || ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <button type="button" onClick={updateTitle}
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}