"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
type Course = {
  _id: string;
  name: string;
  description: string;
  image: string;
  number?: string;
  startDate?: string;
};
const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  description: "New Description",
  image: "/images/reactjs.jpg",
};
export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const fetchCourses = async () => {
    try {
      const allCourses = await client.fetchAllCourses();
      setCourses(allCourses);
    } catch {
      setCourses([]);
    }
  };
  const addCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
    setCourse(emptyCourse);
  };
  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  };
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    setCourse(emptyCourse);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button type="button" id="wd-add-new-course-click"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={addCourse}>Add</button>
        <button type="button" id="wd-update-course-click"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          onClick={updateCourse}>Update</button>
      </h5>
      <input value={course.name} id="wd-course-name"
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} rows={3} id="wd-course-description"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <input value={course.number || ""} id="wd-course-number" placeholder="Course number"
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input type="date" value={course.startDate || ""} id="wd-course-start-date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {courses.map((c) => (
          <CourseCard key={c._id} course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => deleteCourse(c._id)} />
        ))}
      </div>
    </div>
  );
}