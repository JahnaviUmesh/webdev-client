import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="123"
          title="A1 - Environment set up + HTML user interfaces"
          details="Multiple Modules | Not available until Sept 14th at 12:00am | Due Sept 27 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="124"
          title="A2 - CSS and TAILWIND"
          details="Multiple Modules | Not available until Sept 27 at 12:00am | Due Oct 11 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="125"
          title="A3 - JAVASCRIPT and data-driven UI"
          details="Multiple Modules | Not available until Oct 11 at 12:00am | Due Oct 25 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}