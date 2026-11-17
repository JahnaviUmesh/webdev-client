"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as client from "../../../assignments/client";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = cid as string;
  const assignmentId = aid as string;
  const router = useRouter();
  const isNew = assignmentId === "new";
  const [assignment, setAssignment] = useState<any>({
    title: "", course: courseId, description: "", points: 100, due: "", available: "",
  });
  useEffect(() => {
    if (!isNew) {
      client.findAssignmentsForCourse(courseId).then((list) => {
        const found = list.find((a: any) => a._id === assignmentId);
        if (found) setAssignment(found);
      });
    }
  }, [courseId, assignmentId, isNew]);
  const save = async () => {
    if (isNew) {
      await client.createAssignmentForCourse(courseId, assignment);
    } else {
      await client.updateAssignment(assignment);
    }
    router.push(`/courses/${courseId}/assignments`);
  };
  const cancel = () => router.push(`/courses/${courseId}/assignments`);
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <label htmlFor="wd-name" className="mb-1 block font-semibold">Assignment Name</label>
      <input id="wd-name" className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <label htmlFor="wd-description" className="mb-1 block font-semibold">Description</label>
      <textarea id="wd-description" rows={6} className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
        value={assignment.description ?? ""}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      <div className="mb-3 flex items-center gap-3">
        <label htmlFor="wd-points" className="w-40 text-right font-semibold">Points</label>
        <input id="wd-points" type="number" className="flex-1 rounded border border-neutral-300 px-3 py-2"
          value={assignment.points ?? 0}
          onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })} />
      </div>
      <div className="mb-3 flex items-center gap-3">
        <label htmlFor="wd-due-date" className="w-40 text-right font-semibold">Due</label>
        <input id="wd-due-date" type="date" className="flex-1 rounded border border-neutral-300 px-3 py-2"
          value={assignment.due ?? ""}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
      </div>
      <div className="mb-3 flex items-center gap-3">
        <label htmlFor="wd-available-from" className="w-40 text-right font-semibold">Available from</label>
        <input id="wd-available-from" type="date" className="flex-1 rounded border border-neutral-300 px-3 py-2"
          value={assignment.available ?? ""}
          onChange={(e) => setAssignment({ ...assignment, available: e.target.value })} />
      </div>
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <button type="button" id="wd-cancel" onClick={cancel}
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-neutral-900">Cancel</button>
        <button type="button" id="wd-save" onClick={save}
          className="rounded bg-red-600 px-4 py-2 font-medium text-white">Save</button>
      </div>
    </div>
  );
}