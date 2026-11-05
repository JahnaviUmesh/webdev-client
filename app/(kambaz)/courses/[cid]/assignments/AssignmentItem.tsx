"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const [show, setShow] = useState(false);

  return (
    <li className="wd-assignment-list-item mb-3 flex items-center gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      <FaTrash
        id="wd-delete-assignment-click"
        className="cursor-pointer text-red-600"
        onClick={() => setShow(true)}
        title="Delete assignment"
      />
      <DeleteAssignmentDialog
        show={show}
        title={title}
        onCancel={() => setShow(false)}
        onConfirm={() => {
          deleteAssignment(aid);
          setShow(false);
        }}
      />
    </li>
  );
}