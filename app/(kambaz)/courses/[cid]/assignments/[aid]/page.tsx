import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <label htmlFor="wd-name" className="mb-1 block font-semibold">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue="A1 - Environment set up + HTML user interfaces"
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <label htmlFor="wd-description" className="mb-1 block font-semibold">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={6}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <div className="mb-3 flex items-center gap-3">
        <label htmlFor="wd-points" className="w-40 text-right font-semibold">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          className="flex-1 rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-3 flex items-center gap-3">
        <label htmlFor="wd-group" className="w-40 text-right font-semibold">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="flex-1 rounded border border-neutral-300 px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-3 flex items-center gap-3">
        <label htmlFor="wd-display-grade-as" className="w-40 text-right font-semibold">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="flex-1 rounded border border-neutral-300 px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>
      </div>

      <div className="mb-3 flex gap-3">
        <label htmlFor="wd-submission-type" className="w-40 text-right font-semibold">
          Submission Type
        </label>
        <div className="flex-1 rounded border border-neutral-300 p-3">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="INPERSON">In Person</option>
          </select>
          <label className="mb-2 block font-semibold">Online Entry Options</label>
          <div className="mb-1">
            <input type="checkbox" id="wd-text-entry" className="me-2" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="wd-website-url" className="me-2" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="wd-media-recordings" className="me-2" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="wd-student-annotation" className="me-2" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="wd-file-upload" className="me-2" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-3 flex gap-3">
        <label htmlFor="wd-assign-to" className="w-40 text-right font-semibold">
          Assign
        </label>
        <div className="flex-1 rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue="2026-09-27"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <div className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2026-09-14"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2026-09-27"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      <label htmlFor="wd-ai-editor-notes" className="mb-1 block font-semibold">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        rows={4}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}