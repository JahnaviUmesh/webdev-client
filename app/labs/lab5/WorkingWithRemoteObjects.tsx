"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2026-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Node.js",
    description: "Learn Express HTTP routes",
    course: "RS101",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="mb-2 block rounded bg-blue-600 px-3 py-1.5 text-sm text-white w-fit"
        href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="mb-2 block text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title" className="mb-2 block text-blue-700 underline"
        href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}>
        Update Title
      </a>
      <input id="wd-assignment-title"
        className="mb-2 block rounded border border-neutral-300 px-2 py-1"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />

      <a id="wd-update-assignment-score" className="mb-1 block text-blue-700 underline"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>Update Score</a>
      <input id="wd-assignment-score" type="number" className="mb-2 block rounded border border-neutral-300 px-2 py-1"
        value={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })} />

      <a id="wd-update-assignment-completed" className="mb-1 block text-blue-700 underline"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>Update Completed</a>
      <label className="mb-2 block">
        <input id="wd-assignment-completed" type="checkbox"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} /> Completed
      </label>

      <h4>Module</h4>
      <a id="wd-get-module" className="mb-1 block text-blue-700 underline"
        href={MODULE_API_URL}>Get Module</a>
      <a id="wd-get-module-name" className="mb-1 block text-blue-700 underline"
        href={`${MODULE_API_URL}/name`}>Get Module Name</a>

      <a id="wd-update-module-name" className="mb-1 block text-blue-700 underline"
        href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}>Update Module Name</a>
      <input id="wd-module-name" className="mb-2 block rounded border border-neutral-300 px-2 py-1"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })} />

      <a id="wd-update-module-description" className="mb-1 block text-blue-700 underline"
        href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}>Update Module Description</a>
      <input id="wd-module-description" className="mb-2 block rounded border border-neutral-300 px-2 py-1"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })} />
      <hr />
    </div>
  );
}